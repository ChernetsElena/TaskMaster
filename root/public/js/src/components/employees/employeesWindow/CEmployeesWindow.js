import EmployeesWindowView from './EmployeesWindowView.js'

export class EmployeesWindow {
    constructor(){
        this.view
        this.type
    }

    config() {
        return EmployeesWindowView()
    }

    attachEvents() {
        this.view = {
            window: $$('windowEmployee'),
            windowLabel: $$('employeeWindowLabel'),
            windowConfirmBtn: $$('addEmployeeBtn'),
            closeBtn: $$('employeeWindowCloseButton'),
            form: $$('formWindowEmployee'),
            formfields: {
                lastName: $$('employeeLastName'),
                name: $$('employeeFirstName'),
                middleName: $$('employeeMiddleName'),
                position: $$('employeePosition'),
                email: $$('employeeEmail'),
                birth: $$('employeeBirth'),         
            }
        }

        this.view.closeBtn.attachEvent("onItemClick", () => {
            this.view.form.clear()
            this.view.window.hide()
        })
    }

    switch(type) {
        switch (this.view.window.isVisible()) {
            case true:
                this.hide()
                break;
            case false:
                this.show(type)
                break;
        }
    }

    show(type) {
        switch (type) {
            case EMPLOYEE_WINDOW_TYPE.new:
                break;
            case EMPLOYEE_WINDOW_TYPE.update:
                this.view.windowLabel.define("template", "Редактирование")
                this.view.windowConfirmBtn.define("value", "Сохранить")
                break;
            case EMPLOYEE_WINDOW_TYPE.delete:
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.lastName.define("readonly", true)
                this.view.formfields.middleName.define("readonly", true)
                this.view.formfields.email.define("readonly", true)
                this.view.formfields.birth.define("readonly", true)
                this.view.windowConfirmBtn.hide()
                this.view.window.resize()
                break;
            
            default:
                console.error('Неизвестный тип отображения окна для работы с сущностью задачи');
                return;
        }
        this.type = type
        this.view.window.show()
    }

    hide(){
        this.view.window.hide()
    }

}


export const EMPLOYEE_WINDOW_TYPE = {
    new: 'NEW',
    delete: 'DELETE',
    update: 'UPDATE'
}