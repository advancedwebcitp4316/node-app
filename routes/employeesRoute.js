import express from "express"
import { create, fetch, update, deleteEmployee, findEmployee } from "../controller/employeesController.js"
const route = express.Router()

route.get("/fetch", fetch)
route.post("/create", create)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteEmployee)
route.get("/fetch/:id", findEmployee)
export default route