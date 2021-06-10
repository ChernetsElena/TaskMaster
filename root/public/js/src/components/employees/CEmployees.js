import EmployeesView from './EmployeesView.js'
import {EmployeesWindow, EMPLOYEE_WINDOW_TYPE} from './employeesWindow/CEmployeesWindow.js';
import {dataEmployees} from "../../data/dataEmployees.js";
import employeeModel from '../../models/employeeModel.js'


export class Employees {
    constructor(){
        this.view
        this.window = new EmployeesWindow()
        this.dataEmployees = dataEmployees
        //this.employees
        this.employeesButton
        this.positions
    }

    init (employeesButton, showProjectsViewCB) {
        this.employeesButton = employeesButton
        this.employeesButton.init(this.window, showProjectsViewCB)
        this.window.init(
            () => { this.refreshView(this.dataEmployees) }
        )
        this.positions = []
        employeeModel.getPositions().map((position) =>{
            this.positions.push(position.value)
        })
        //this.employees = []
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

        // this.dataEmployees.map((employee) => {
        //     this.
        // })

        this.refreshView(this.dataEmployees)

        this.view.employeesTable.attachEvent("onItemClick", (id) => {
            let selectedEmployee = this.view.employeesTable.getItem(id)
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
