import createHttpError from "http-errors"
import {ObjectId} from "mongodb"

import {getColl} from "../db"
import decrypt from "./decrypt"

export default function middleware(needAuth) {
	return async (req, res, next) => {
		try {
			req.user = null
			if (req.cookies.get("_r_au")) {
				let decryptedToken = await decrypt(req.cookies.get("_r_au"))
				if (decryptedToken.security) {
					const coll = await getColl("users")
					const user = await coll.findOne(
						{
							_id: ObjectId(decryptedToken.payload._id),
							deletedAt: {$exists: false},
						},
						{projection: {password: 0}},
					)
					if (user) {
						req.user = {...user}
					}
				}
			}
			if (req.user == null && needAuth) {
				return next(createHttpError(401))
			}
			next()
		} catch (error) {
			next(error)
		}
	}
}
