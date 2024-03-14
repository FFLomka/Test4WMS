import {getColl} from "../../core/db"
import {RequestHandler} from "../../core/utils/handler"

const handler = RequestHandler()

handler.get(async (req, res) => {
	try {
		await connection
		let stores = getColl("temp").find({})
		let result = await stores.toArray()
		res.json({
			list: result,
			count: await stores.count(),
		})
	} catch (error) {
		console.error(`error`, error)
	}
})

export default handler.handle
