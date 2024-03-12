import createHttpError from "http-errors"
import _ from "lodash"
import {NextApiRequest, NextApiResponse} from "next"

import {royalResto, royalUsers} from "./core"

export function royalMiddlewareUsers(...rule: string[]) {
	return function (req: NextApiRequest, res: NextApiResponse, next: Function) {
		try {
			if (!_.has(req, "user._id")) return next(createHttpError(401))
			if (rule.map((e) => royalUsers.canGuideline(_.get(req, "user._id").toString(), e)).filter((f) => !!f).length == 0) return next(createHttpError(403))
			next()
		} catch (error) {
			next(createHttpError(403))
		}
	}
}

export function royalMiddlewareResto(...rule: string[]) {
	return function (req: NextApiRequest, res: NextApiResponse, next: Function) {
		try {
			if (!_.has(req, "user._id")) return next(createHttpError(401))
			if (rule.map((e) => royalResto.canGuideline(_.get(req, "user._id").toString(), e)).filter((f) => !!f).length == 0) return next(createHttpError(403))
			next()
		} catch (error) {
			next(createHttpError(403))
		}
	}
}
