import {useEffect, useState} from "react"
import {Royal, SyncConnector} from "royal-core/dist/index.modern"

export default function useRoyalCore(fn) {
	const [royal, setRoyal] = useState(new Royal(new SyncConnector()))

	useEffect(() => {
		;(async () => {
			const res = await fn()
			setRoyal(new Royal(new SyncConnector([{id: "self", rules: res}])))
		})()
	}, [])

	const can = (r) => royal?.canGuideline("self", r)
	const setRules = (res) => {
		setRoyal(new Royal(new SyncConnector([{id: "self", rules: res}])))
	}

	return [royal, can, setRules]
}
