import {dataEmployees} from '../data/dataEmployees.js'
import Model from '../../../js/helpers/model.js'

class EmployeeModel extends Model{
    constructor(){
        super()
    }

    createEmployee(dataWindow) {
        return this.post('/employee/create', dataWindow)
    }

    updateEmployee(dataWindow) {
        return this.post('/employee/update', dataWindow)
    }

    deleteEmployee(dataWindow) {
        return this.post('/employee/delete', dataWindow)
    }

    getEmployees() {
        return this.post('/employee/all')
    }

    getEmployeeById(id) {
        return this.post('/employee/id', id)
    }
}

const employeeModel = new EmployeeModel();
export default employeeModel