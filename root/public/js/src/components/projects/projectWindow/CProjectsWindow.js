import ProjectsWindowView from './ProjectsWindowView.js';


export class ProjectsWindow {
    constructor(){
        this.view
        this.type
    }
    
    config() {
        return ProjectsWindowView()
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

        // this.view.updateBtn.attachEvent("onItemClick", () => {
        //     this.update()
        // });

        this.view.closeBtn.attachEvent("onItemClick", () => {
            this.view.form.clear();
            this.view.window.hide();
        });


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
            case PROJECT_WINDOW_TYPE.new:
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.description.define("readonly", false)
                this.view.updateBtn.hide()
                this.view.deleteBtn.hide()
                this.view.window.resize()
                break;
            case PROJECT_WINDOW_TYPE.update:
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.description.define("readonly", false)
                this.view.windowConfirmBtn.define("value", "Сохранить")
                break;
            case PROJECT_WINDOW_TYPE.show:
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.colorOne.disable()
                this.view.formfields.colorTwo.disable()
                this.view.formfields.teamlead.disable()
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

    // update(){
    //     this.hide();
    //     this.view.formfields.name.define("readonly", false)
    //     this.view.window.resize()
    //     this.view.window.show()
    // }
}

export const PROJECT_WINDOW_TYPE = {
    new: 'NEW',
    show: 'SHOW',
    update: 'UPDATE'
}