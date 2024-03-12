import {MongoConnector} from "mongo4royal"
import {Royal} from "royal-core/dist/index.modern"
import {Royal as IRoyal} from "royal-core/royalCore"

// @ts-ignore
export const royalUsers = new Royal(new MongoConnector(process.env.MONGO_URL, process.env.MONGO_DATABASE, "royalUsers")) as IRoyal
// @ts-ignore
export const royalResto = new Royal(new MongoConnector(process.env.MONGO_URL, process.env.MONGO_DATABASE, "royalResto")) as IRoyal
