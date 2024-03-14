import HomePage from "./home-page"

const p = new Promise((res, rej) => {
	setTimeout(() => res(123), 15000)
})
const p1 = new Promise((res, rej) => {
	setTimeout(() => res(123), 5000)
})

new Promise((res, rej) => {
	setTimeout(() => {
		console.log("res(123)", res(123))
	}, 20000)
})

export default async function Page() {
	const data = await p1
	// const d = use(new Promise(() => {}))

	return <HomePage data={data} />
}
