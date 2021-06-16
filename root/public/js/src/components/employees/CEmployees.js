import EmployeesView from './EmployeesView.js'
import {EmployeesWindow, EMPLOYEE_WINDOW_TYPE} from './employeesWindow/CEmployeesWindow.js';
import employeeModel from '../../models/employeeModel.js'
import {FormatDate, BirthToDate} from '../../../helpers/dateFormatter.js'


export class Employees {
    constructor(){
        this.view
        this.window = new EmployeesWindow()
        this.employees
        this.employeesButton
        this.positions
        this.FormatDate = FormatDate
        // this.BirthToDate = BirthToDate
    }
    
    init (employeesButton, showProjectsViewCB) {
        this.employeesButton = employeesButton
        this.employeesButton.init(this.window, showProjectsViewCB)
        this.window.init(
            () => { this.refreshView(this.employees) }
        )
        this.positions = []
        employeeModel.getPositions().map((position) =>{
            this.positions.push(position.value)
        })
        this.employees = []
    }

    config() {
        webix.ui(this.window.config(this.positions))
        return EmployeesView()
    }
    
    attachEvents() {
        this.view = {
            employeesTable: $$('employeeDatatable'),
        }

        this.window.attachEvents()

        this.employees = employeeModel.getEmployees()
        this.employees.map((employee) => {
            employee.birth = this.FormatDate(employee.birth)
        })
        this.refreshView(this.employees)

        this.view.employeesTable.attachEvent("onItemClick", (id) => {
            let selectedEmployee = this.view.employeesTable.getItem(id)
            //let dateFromBirth = this.BirthToDate(selectedEmployee.birth)
            
            //let employeeForParse = Object.assign({}, selectedEmployee);
            //employeeForParse.birth = dateFromBirth
            
            if (id.column == 'edit') {
                this.window.parse(selectedEmployee)
                this.showWindow(EMPLOYEE_WINDOW_TYPE.update);
            }
            if (id.column == 'trash') {
                this.window.parse(selectedEmployee)
                this.showWindow(EMPLOYEE_WINDOW_TYPE.delete);
            }
        })

    }

    showWindow(type) {
        this.window.show(type)
    }


    refreshView(data) {
        this.view.employeesTable.clearAll()
        this.view.employeesTable.parse(data)
    }
}
