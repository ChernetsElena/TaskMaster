import EmployeesWindowView from './EmployeesWindowView.js'
import employeeModel from '../../../models/employeeModel.js'


export class EmployeesWindow {
    constructor(){
        this.view
        this.type
        this.onChange
    }

    init(onChange) {
        this.onChange = onChange
    }

    config(positions) {
        return EmployeesWindowView(positions)
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
            this.clearForm()
            this.view.window.hide()
        })

        this.view.windowConfirmBtn.attachEvent("onItemClick", () => {
            switch (this.type) {
                case EMPLOYEE_WINDOW_TYPE.new:
                        employeeModel.createEmployee(this.fetch())
                        this.onChange()
                        this.clearForm();
                        this.hide()
                        break; 
                    
                case EMPLOYEE_WINDOW_TYPE.update:
                    employeeModel.updateEmployee(this.fetch())
                    this.onChange()
                    this.clearForm();
                    this.hide()
                    break;
                case EMPLOYEE_WINDOW_TYPE.delete:
                    employeeModel.deleteEmployee(this.fetch())
                    this.onChange()
                    this.clearForm();
                    this.hide()
                    break;
            }
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
                this.view.windowLabel.define("template", "Новый сотрудник")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.lastName.define("readonly", false)
                this.view.formfields.lastName.refresh()
                this.view.formfields.middleName.define("readonly", false)
                this.view.formfields.middleName.refresh()
                this.view.formfields.position.enable()
                this.view.formfields.position.refresh()
                this.view.formfields.email.define("readonly", false)
                this.view.formfields.email.refresh()
                this.view.formfields.birth.define("readonly", false)
                this.view.formfields.birth.refresh()
                this.view.windowConfirmBtn.define("value", "Добавить")
                this.view.windowConfirmBtn.refresh()
                break;
            case EMPLOYEE_WINDOW_TYPE.update:
                this.view.windowLabel.define("template", "Редактирование")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.lastName.define("readonly", false)
                this.view.formfields.lastName.refresh()
                this.view.formfields.middleName.define("readonly", false)
                this.view.formfields.middleName.refresh()
                this.view.formfields.position.enable()
                this.view.formfields.position.refresh()
                this.view.formfields.email.define("readonly", false)
                this.view.formfields.email.refresh()
                this.view.formfields.birth.define("readonly", false)
                this.view.formfields.birth.refresh()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                break;
            case EMPLOYEE_WINDOW_TYPE.delete:
                this.view.windowLabel.define("template", "Удаление")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.lastName.define("readonly", true)
                this.view.formfields.lastName.refresh()
                this.view.formfields.middleName.define("readonly", true)
                this.view.formfields.middleName.refresh()
                this.view.formfields.position.disable()
                this.view.formfields.position.refresh()
                this.view.formfields.email.define("readonly", true)
                this.view.formfields.email.refresh()
                this.view.formfields.birth.define("readonly", true)
                this.view.formfields.birth.refresh()
                this.view.windowConfirmBtn.define("value", "Удалить")
                this.view.windowConfirmBtn.refresh()
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

    parse(values) {
        this.view.form.setValues(values)
    }

    fetch() {
        return this.view.form.getValues()
    }

    clearForm() {
        this.view.form.clear()
    }

}


export const EMPLOYEE_WINDOW_TYPE = {
    new: 'NEW',
    delete: 'DELETE',
    update: 'UPDATE'
}