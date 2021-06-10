import {dataEmployees, dataPositions} from '../data/dataEmployees.js'
import {Employee} from './entities/employee.js'
import Model from '../../../js/helpers/model.js'

const monthName = {
    "0": "января",
    "1": "февраля",
    "2": "марта",
    "3": "апреля",
    "4": "мая",
    "5": "июня",
    "6": "июля",
    "7": "августа",
    "8": "сентября",
    "9": "октября",
    "10": "ноября",
    "11": "декабря"
}
class EmployeeModel extends Model{
    constructor(){
        super()
    }

    createEmployee(dataWindow) {
        let year = dataWindow.birth.getFullYear()
        let month = dataWindow.birth.getMonth() + 1
        let day = dataWindow.birth.getDate()
        if (month < 10){
            month = '0' + month
        }
        if (day < 10){
            day = '0' + day
        }
        let dateOfBirth = year + '-' + month + '-' + day
        console.log(dataWindow.position)
        dataEmployees.push(new Employee(
            Number(dataEmployees[dataEmployees.length-1].id) + 1, 
            dataWindow.position, 
            dataWindow.name, 
            dataWindow.last_name, 
            dataWindow.middle_name, 
            dataWindow.email, 
            dateOfBirth)
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