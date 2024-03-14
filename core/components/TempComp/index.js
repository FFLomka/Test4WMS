"use client"
import {useState} from "react"
import classes from "./index.module.scss"
import {useEffect} from "react"

const p = new Promise((res, rej) => {
	setTimeout(() => res(123), 5000)
})

export default function TempComp(props) {
	const d = use(p)
	const [test, setTest] = useState()

	useEffect(() => {
		setTest(d)
	}, [d])

	return (
		<div className={classes.root}>
			Hello world<div>{test}</div>
		</div>
	)
}

function use(promise) {
	switch (promise.status) {
		case "fulfilled":
			return promise.value
		case "rejected":
			throw promise.reason
		case "pending":
			throw promise

		default:
			promise.status = "pending"
			promise.then(
				(result) => {
					promise.status = "fulfilled"
					promise.value = result
				},
				(reason) => {
					promise.status = "rejected"
					promise.reason = reason
				},
			)
			throw promise
	}
}
