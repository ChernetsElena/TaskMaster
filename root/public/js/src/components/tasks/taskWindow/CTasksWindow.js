import TaskWindowView from './TasksWindowView.js';
import taskModel from '../../../models/taskModel.js';


export class TaskWindow {
    constructor(){
        this.view
        this.type
        this.onChange
    }

    init(onChange) {
        this.onChange = onChange
    }
    
    config(employees) {
        return TaskWindowView(employees)
    }

    attachEvents() {
        // инициализация используемых представлений
        this.view = {
            window: $$('taskWindow'),
            windowLabel: $$('taskWindowLabel'),
            windowConfirmBtn: $$('taskWindowAddBtn'),
            closeBtn: $$('taskWindowCloseButton'),
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

        this.view.closeBtn.attachEvent("onItemClick", () => {
            this.view.form.clear()
            this.view.window.hide()
        })

        this.view.formfields.performer.attachEvent("onChange", () => {
            if (this.view.formfields.performer.getValue() == " ") {
                this.view.formfields.stage.setValue(0)
            }
            else {
                this.view.formfields.stage.setValue(1)
            }
        })

        this.view.windowConfirmBtn.attachEvent("onItemClick", () => {
             switch (this.type) {
                 case TASK_WINDOW_TYPE.create:
                    taskModel.createTask(this.fetch())
                        this.hide()
                        break;
                 case TASK_WINDOW_TYPE.assigned:
                    taskModel.createTask(this.fetch())
                     break;
                 case TASK_WINDOW_TYPE.delete:
                    taskModel.createTask(this.fetch())
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
            case TASK_WINDOW_TYPE.create:
                this.view.formfields.planTimeLabel.hide()
                this.view.formfields.planTime.hide()
                this.view.windowLabel.define("template", "Новая задача")
                this.view.formfields.factTimeLabel.hide()
                this.view.formfields.factTime.hide()
                this.view.formfields.stage.disable()
                this.view.formfields.performer.enable()
                this.view.window.resize()
                break;
            case TASK_WINDOW_TYPE.assigned:
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.define("readonly", true)
                this.view.windowLabel.define("template", "Задача")
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.performer.disable()
                this.view.formfields.factTime.disable()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                break;
            case TASK_WINDOW_TYPE.inJob:
                this.view.formfields.name.define("readonly", true)
                this.view.windowLabel.define("template", "Задача")
                this.view.formfields.performer.disable()
                this.view.formfields.factTime.enable()
                this.view.formfields.stage.enable()
                this.view.formfields.planTime.disable()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                break;
            case TASK_WINDOW_TYPE.coordination:
                this.view.formfields.name.define("readonly", false)
                this.view.windowLabel.define("template", "Задача")
                this.view.formfields.description.define("readonly", false)
                this.view.formfields.stage.disable()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                break;
            case TASK_WINDOW_TYPE.done:
                this.view.formfields.name.define("readonly", true)
                this.view.windowLabel.define("template", "Задача")
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.performer.disable()
                this.view.formfields.stage.disable()
                this.view.formfields.factTime.disable()
                this.view.formfields.planTime.disable()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
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

    fetch() {
        return this.view.form.getValues()
    }
}

export const TASK_WINDOW_TYPE = {
    create: 'CREATE',
    assigned: 'ASSIGNED',
    inJob: 'INJOB',
    coordination: 'COORDINATION',
    done: 'DONE',
    delete: 'DELETE'
}