import EmployeesWindowView from './EmployeesWindowView.js'
import employeeModel from '../../../models/employeeModel.js'
import positionModel from '../../../models/positionModel.js'


export class EmployeesWindow {
    constructor(){
        this.view
        this.type
        this.onChang
        this.positions
    }

    init(onChange) {
        this.onChange = onChange

        this.positions = []
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

        positionModel.getPositions().then((data) => {
            data.map((position) => {
                this.positions.push({id: `${position.value}`, value: `${position.value}`})
            })
            this.view.formfields.position.define('options', this.positions)
            this.view.formfields.position.refresh()
        })

        this.view.closeBtn.attachEvent("onItemClick", () => {
            this.clearForm()
            this.view.window.hide()
        })

        this.view.windowConfirmBtn.attachEvent("onItemClick", () => {
            switch (this.type) {
                case EMPLOYEE_WINDOW_TYPE.new:
                    if (this.view.form.validate()) {
                        employeeModel.createEmployee(this.fetch()).then(() => {
                            this.onChange()
                            this.clearForm();
                            this.hide()
                        })
                        break;
                    }
                    else {
                        webix.message("???????? ?????????? ???? ??????????????")
                        break;
                    }
                    
                case EMPLOYEE_WINDOW_TYPE.update:
                    if (this.view.form.validate()) {
                        employeeModel.updateEmployee(this.fetch()).then(() => {
                            this.onChange()
                            this.clearForm();
                            this.hide()
                        })
                        break;
                    }
                    else {
                        webix.message("???????? ?????????? ???? ??????????????")
                        break;
                    }
                    
                case EMPLOYEE_WINDOW_TYPE.delete:
                    if (this.view.form.validate()) {
                        employeeModel.deleteEmployee(this.fetch()).then(() => {
                            this.onChange()
                            this.clearForm();
                            this.hide()
                        })
                        break;
                    }
                    else {
                        webix.message("???????? ?????????? ???? ??????????????")
                        break;
                    }
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
                this.view.windowLabel.define("template", "?????????? ??????????????????")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.lastName.define("readonly", false)
                this.view.formfields.lastName.refresh()
                this.view.formfields.middleName.define("readonly", false)
                this.view.formfields.middleName.refresh()
                this.view.formfields.position.enable()
                this.view.formfields.email.define("readonly", false)
                this.view.formfields.email.refresh()
                this.view.formfields.birth.define("readonly", false)
                this.view.formfields.birth.refresh()
                this.view.windowConfirmBtn.define("value", "????????????????")
                this.view.windowConfirmBtn.refresh()
                break;
            case EMPLOYEE_WINDOW_TYPE.update:
                this.view.windowLabel.define("template", "????????????????????????????")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.lastName.define("readonly", false)
                this.view.formfields.lastName.refresh()
                this.view.formfields.middleName.define("readonly", false)
                this.view.formfields.middleName.refresh()
                this.view.formfields.position.enable()
                this.view.formfields.email.define("readonly", false)
                this.view.formfields.email.refresh()
                this.view.formfields.birth.define("readonly", false)
                this.view.formfields.birth.refresh()
                this.view.windowConfirmBtn.define("value", "??????????????????")
                this.view.windowConfirmBtn.refresh()
                break;
            case EMPLOYEE_WINDOW_TYPE.delete:
                this.view.windowLabel.define("template", "????????????????")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.lastName.define("readonly", true)
                this.view.formfields.lastName.refresh()
                this.view.formfields.middleName.define("readonly", true)
                this.view.formfields.middleName.refresh()
                this.view.formfields.position.disable()
                this.view.formfields.email.define("readonly", true)
                this.view.formfields.email.refresh()
                this.view.formfields.birth.define("readonly", true)
                this.view.formfields.birth.refresh()
                this.view.windowConfirmBtn.define("value", "??????????????")
                this.view.windowConfirmBtn.refresh()
                break;
            
            default:
                console.error('?????????????????????? ?????? ?????????????????????? ???????? ?????? ???????????? ?? ?????????????????? ????????????');
                return;
        }
        this.type = type
        this.view.window.show()
    }

    hide(){
        this.view.window.hide()
    }

    parse(values) {
        console.log(values)
        this.view.form.setValues(values)
    }

    fetch() {
        return this.view.form.getValues()
    }

    clearForm() {
        this.view.form.clear()
        this.view.form.clearValidation()
    }

}

export const EMPLOYEE_WINDOW_TYPE = {
    new: 'NEW',
    delete: 'DELETE',
    update: 'UPDATE'
}