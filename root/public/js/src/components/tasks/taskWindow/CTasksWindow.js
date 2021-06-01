import TaskWindowView from './TasksWindowView.js';


export class TaskWindow {
    constructor(){
        this.view
        this.type
    }
    
    config() {
        return TaskWindowView()
    }

    attachEvents() {
        // инициализация используемых представлений
        this.view = {
            window: $$('taskWindow'),
            windowLabel: $$('taskWindowLabel'),
            windowCancelBtn: $$('taskWindowCancelBtn'),
            windowConfirmBtn: $$('taskWindowAddBtn'),
            form: $$('formWindowTask'),
            formfields: {
                name: $$('formWindowTaskName'),
                description: $$('formWindowTaskDescription'),
                performer: $$('formWindowTaskPerformer'),
                stage: $$('formWindowTaskStage'),
                urgently: $$('formWindowTaskUrgently'),
                planTimeLabel: $$('formWindowTaskPlanTimeLabel'),
                planTime: $$('formWindowTaskPlanTime'),
                factTimeLabel: $$('formWindowTaskFactTimeLabel'),
                factTime: $$('formWindowTaskFactTime'),
            }
        }

        this.view.windowCancelBtn.attachEvent("onItemClick", () => {
            this.view.form.clear()
            this.view.window.hide()
        })

        this.view.formfields.performer.attachEvent("onChange", () => {
            if (this.view.formfields.performer.getValue() == " ") {
                this.view.formfields.stage.setValue(1)
            }
            else {
                this.view.formfields.stage.setValue(2)
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
            case TASK_WINDOW_TYPE.new:
                this.view.formfields.planTimeLabel.hide()
                this.view.formfields.planTime.hide()
                this.view.formfields.factTimeLabel.hide()
                this.view.formfields.factTime.hide()
                this.view.formfields.stage.disable()
                this.view.window.resize()
                break;
            case TASK_WINDOW_TYPE.assigned:
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.performer.disable()
                this.view.formfields.urgently.disableOption(1)
                this.view.formfields.urgently.disableOption(3)
                this.view.window.resize()
                break;
            default:
                console.error('Неизвестный тип отображения окна для работы с сущностью задачи');
                return;
        }
        this.type = type
        this.view.window.show()
    }

    hide() {
        this.view.window.hide()
    }
}

export const TASK_WINDOW_TYPE = {
    new: 'NEW',
    assigned: 'ASSIGNED'
}