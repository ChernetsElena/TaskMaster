import {dataEmployees, dataPositions} from '../data/dataEmployees.js'
import {Employee} from './entities/employee.js'
import Model from '../../../js/helpers/model.js'

class EmployeeModel extends Model{
    constructor(){
        super()
    }

    createEmployee(dataWindow) {
        let date = JSON.stringify(dataWindow.birth)
        dataEmployees.push(new Employee(
            Number(dataEmployees[dataEmployees.length-1].id) + 1, 
            dataWindow.position, 
            dataWindow.name, 
            dataWindow.last_name, 
            dataWindow.middle_name, 
            dataWindow.email, 
            dataWindow.birth)
        )
        console.log(dataEmployees)
    }

    updateEmployee(dataWindow) {
        let updateEmployee = dataEmployees.find(item => item.id == dataWindow.id)
        let indexOfUpdateEmployee = dataEmployees.indexOf(updateEmployee)
        dataEmployees.splice(indexOfUpdateEmployee, 1, dataWindow)
        console.log(dataEmployees)
    }

    deleteEmployee(dataWindow) {
        let deleteEmployee = dataEmployees.find(item => item.id == dataWindow.id)
        let indexOfDeleteEmployee = dataEmployees.indexOf(deleteEmployee)
        dataEmployees.splice(indexOfDeleteEmployee, 1)
        console.log(dataEmployees)
    }

    getPositions() {
        return dataPositions
    }

    getEmployees() {
        return dataEmployees
    }
}

const employeeModel = new EmployeeModel();
export default employeeModel