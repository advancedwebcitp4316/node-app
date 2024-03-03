import Employees from "../model/employeesModel.js"

//create a new record
export const create = async(req, res) => {
    try {
        const employeeData = new Employees(req.body)
        const {userName} = employeeData
        const employeeExist = await Employees.findOne({userName})

        if(employeeExist) {
            return res.status(400).json({message: "Employee already exists."})
        }

        const savedEmployee = await employeeData.save();
        res.status(200).json(savedEmployee)
        
    } catch (error) {
        res.status(500).json({error: "Internal Server Error . "})
    }
}



//fetch a record
export const fetch = async (req, res) => {
    try {
        //res.json("Hello World")
        const employees = await Employees.find();
        if(employees.length === 0) {
            return res.status(404).json({ message: "Employees not found."})
        }
        res.status(200).json(employees)
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error"})
    }
}

//update a record
export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const employeeExist = await Employees.findOne({_id:id})

        if(!employeeExist) {
            return res.status(404).json({message: "Employee not found"})
        }

        const updateEmployee = await Employees.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(updateEmployee)

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}