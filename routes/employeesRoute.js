import express from "express"
import { create, fetch, update } from "../controller/employeesController.js"
const route = express.Router()

route.get("/fetch", fetch)
route.post("/create", create)
route.put("/update/:id", update)

export default route