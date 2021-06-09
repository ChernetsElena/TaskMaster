import { EmployeesWindow, EMPLOYEE_WINDOW_TYPE} from '../employeesWindow/CEmployeesWindow.js';
import EmployeesButtonView from './EmployeesButtonView.js'


export class EmployeesButton {
    constructor(){
        this.view
        this.window
        this.showProjectsView
    }

    init(showProjectsViewCB){
        this.window = new EmployeesWindow()
        this.showProjectsView = showProjectsViewCB
    }

    config() {
        webix.ui(this.window.config())
        return EmployeesButtonView()
    }

    attachEvents() {
         this.view = {
             toProjectsBtn: $$('employeeToProjectsBtn'),
             addEmployeeBtn: $$('employeeButtonAddBtn')
         }

         this.window.attachEvents()

         this.view.addEmployeeBtn.attachEvent("onItemClick", () => {
            this.showWindow()
        })

         this.view.toProjectsBtn.attachEvent("onItemClick", () => {
             this.showProjectsView()
         })
    }

    showWindow() {
        this.window.show(EMPLOYEE_WINDOW_TYPE.new)
    }
}
