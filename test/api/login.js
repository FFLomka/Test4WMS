import bcrypt from "bcrypt"
import createHttpError from "http-errors"
import _ from "lodash"

import {getColl} from "../../core/db"
import crypt from "../../core/utils/crypt"
import {RequestHandler} from "../../core/utils/handler"

const handler = RequestHandler()

handler.post(async (req, res) => {
	try {
		if (req.body.username == null || req.body.password == null) {
			return createHttpError(400)
		}

		const users = await getColl("users")

		const user = await users.findOne({
			username: req.body.username,
			deletedAt: {$exists: false},
		})

		if (user == null || !bcrypt.compareSync(req.body.password, user.password)) {
			return createHttpError(403)
		}

		res.cookies.set(
			"_r_au",
			crypt({
				_id: user._id,
				createAt: new Date().valueOf(),
				maxAge: 8 * 60 * 60 * 1000,
			}),
			{maxAge: 8 * 60 * 60 * 1000},
		)

		return {success: true}
	} catch (error) {
		console.error(`error`, error)
		return createHttpError(500)
	}
})

export default handler.handle
