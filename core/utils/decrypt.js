import crypto from "crypto"

import atob from "atob"
import btoa from "btoa"

const load = btoa(JSON.stringify({token: "JWT", type: "sha256"}))

export default async function decrypt(hash = "") {
	let arr = hash.split(".")
	//Hash check
	if (arr.length != 3) {
		return {security: false, error: "Token is incorrect", payload: {}}
	}
	if (arr[0] != load) {
		return {security: false, error: "Load is incorrect", payload: {}}
	}
	let hashCorrect = crypto
		.createHash("sha256")
		.update(arr[0] + "." + arr[1] + "." + btoa(process.env.JWT_SECRET_KEY))
		.digest("base64")
	if (arr[2] !== hashCorrect) {
		return {security: false, error: "Hash is damaged", payload: {}}
	}

	//Payload check
	let payload = JSON.parse(atob(arr[1]))
	if (Object.keys(payload).length == 0) {
		return {security: false, error: "Payload is null", payload: {}}
	}
	if (payload.maxAge) {
		if (payload.createAt == null) {
			return {security: false, error: "Life is destroyed", payload: {}}
		} else if (payload.maxAge < new Date() - new Date(payload.createAt)) {
			return {security: false, error: "Life is end", payload: {}}
		}
	}
	return {security: true, payload}
}
