
import EmployeesButtonView from './EmployeesButtonView.js'


export class EmployeesButton {
    constructor(){
        this.view
        this.showProjectsView
    }

    init(showProjectsViewCB){
        this.showProjectsView = showProjectsViewCB
    }

    config() {
        return EmployeesButtonView()
    }

    attachEvents() {
         this.view = {
             toProjectsBtn: $$('employeeToProjectsBtn'),
             addEmployeeBtn: $$('employeeButtonAddBtn')
         }

         this.view.toProjectsBtn.attachEvent("onItemClick", () => {
             this.showProjectsView()
         })
    }
}
