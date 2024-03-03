import express from "express"
import { create, fetch, update, deleteEmployee } from "../controller/employeesController.js"
const route = express.Router()

route.get("/fetch", fetch)
route.post("/create", create)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteEmployee)
export default route