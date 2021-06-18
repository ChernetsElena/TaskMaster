import ProjectsWindowView from './ProjectsWindowView.js';
import projectModel from '../../../models/projectModel.js'


export class ProjectsWindow {
    constructor(){
        this.view
        this.type
        this.onChange
        this.names
    }

    init(onChange) {
        this.onChange = onChange
    }

    config(employees) {
        return ProjectsWindowView(employees)
    }

    attachEvents() {
        this.view = {
            window: $$('projectWindow'),
            windowLabel: $$('projectWindowLabel'),
            windowConfirmBtn: $$('addProjectBtn'),
            closeBtn: $$('projectWindowCloseButton'),
            updateBtn: $$('projectWindowUpdateButton'),
            deleteBtn: $$('projectWindowDeleteButton'),
            form: $$('formWindowProject'),
            formfields: {
                name: $$('formWindowProjectName'),
                colorOne: $$('formWindowProjectColorOne'),
                colorTwo: $$('formWindowProjectColorTwo'),
                description: $$('formWindowProjectDescription'),
                teamlead: $$('formWindowProjecTeamlead'),
            }
        }

        this.view.closeBtn.attachEvent("onItemClick", () => {
            this.clearForm();
            this.view.window.hide();
        });

        this.view.windowConfirmBtn.attachEvent("onItemClick", () => {
            switch (this.type) {
                case PROJECT_WINDOW_TYPE.new:
                    if (this.view.form.validate()) {
                        projectModel.createProject(this.fetch()).then(() => {
                            this.onChange()
                            this.clearForm();
                            this.hide()
                        })
                        break;
                    }
                    else {
                        webix.message("Ваша форма не валидна")
                        break;
                    }
                    
                case PROJECT_WINDOW_TYPE.update:
                    if (this.view.form.validate()) {
                        projectModel.updateProject(this.fetch()).then(() => {
                            this.onChange()
                            this.clearForm();
                            this.hide()
                        })
                        break;
                    }
                    else {
                        webix.message("Ваша форма не валидна")
                        break;
                    }
                    
                case PROJECT_WINDOW_TYPE.delete:
                    if (this.view.form.validate()) {
                        projectModel.deleteProject(this.fetch()).then(() => {
                            this.onChange()
                            this.clearForm();
                            this.hide()
                        })
                        break;
                    }
                    else {
                        webix.message("Ваша форма не валидна")
                        break;
                    }
            }
        })

        this.view.updateBtn.attachEvent("onItemClick", () => {
            this.view.window.hide()
            this.show(PROJECT_WINDOW_TYPE.update, this.names)
        })

        this.view.deleteBtn.attachEvent("onItemClick", () => {
            this.view.window.hide()
            this.show(PROJECT_WINDOW_TYPE.delete, this.names)
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

    show(type, employees) {
        this.names = employees
        switch (type) {
            case PROJECT_WINDOW_TYPE.new:
                this.view.windowLabel.define("template", "Новый проект")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", false)
                this.view.formfields.description.refresh()
                this.view.formfields.colorOne.enable()
                this.view.formfields.colorTwo.enable()
                this.view.formfields.teamlead.enable()
                this.view.formfields.teamlead.define("options", employees)
                this.view.formfields.teamlead.refresh()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Создать")
                this.view.windowConfirmBtn.refresh()
                this.view.updateBtn.hide()
                this.view.updateBtn.refresh()
                this.view.deleteBtn.hide()
                this.view.deleteBtn.refresh()
                this.view.window.resize()
                break;

            case PROJECT_WINDOW_TYPE.update:
                this.view.windowLabel.define("template", "Изменить проект")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", false)
                this.view.formfields.description.refresh()
                this.view.formfields.colorOne.enable()
                this.view.formfields.colorTwo.enable()
                this.view.formfields.teamlead.enable()
                this.view.formfields.teamlead.define("options", employees)
                this.view.formfields.teamlead.refresh()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                this.view.updateBtn.show()
                this.view.updateBtn.refresh()
                this.view.deleteBtn.show()
                this.view.deleteBtn.refresh()
                this.view.windowConfirmBtn.show()
                this.view.window.resize()
                break;

            case PROJECT_WINDOW_TYPE.show:
                this.view.windowLabel.define("template", "Просмотр проекта")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.colorOne.disable()
                this.view.formfields.colorTwo.disable()
                this.view.formfields.teamlead.disable()
                this.view.formfields.teamlead.define("options", employees)
                this.view.formfields.teamlead.refresh()
                this.view.updateBtn.show()
                this.view.updateBtn.refresh()
                this.view.deleteBtn.show()
                this.view.deleteBtn.refresh()
                this.view.windowConfirmBtn.hide()
                this.view.window.resize()
                break;

            case PROJECT_WINDOW_TYPE.delete:
                this.view.windowLabel.define("template", "Удаление проекта")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.colorOne.disable()
                this.view.formfields.colorTwo.disable()
                this.view.formfields.teamlead.disable()
                this.view.formfields.teamlead.define("options", employees)
                this.view.formfields.teamlead.refresh()
                this.view.windowConfirmBtn.define("value", "Удалить")
                this.view.windowConfirmBtn.refresh()
                this.view.updateBtn.show()
                this.view.updateBtn.refresh()
                this.view.deleteBtn.show()
                this.view.deleteBtn.refresh()
                this.view.windowConfirmBtn.show()
                this.view.window.resize()
                break;
            
            default:
                console.error('Неизвестный тип отображения окна для работы с сущностью проекта');
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
        this.view.form.clearValidation()
        this.view.formfields.colorOne.setValue("#ffdb5c")
        this.view.formfields.colorTwo.setValue("#ffacac")
    }
}

export const PROJECT_WINDOW_TYPE = {
    new: 'NEW',
    show: 'SHOW',
    update: 'UPDATE',
    delete: 'DELETE'
}