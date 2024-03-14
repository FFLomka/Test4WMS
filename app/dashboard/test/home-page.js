"use client"

import {Button} from "antd"
import {useState} from "react"

export default function Page({data: dataRaw}) {
	const [data, setData] = useState(dataRaw)
	return (
		<>
			{data}
			<Button onClick={() => setData(789456123)}>Update</Button>
		</>
	)
}
