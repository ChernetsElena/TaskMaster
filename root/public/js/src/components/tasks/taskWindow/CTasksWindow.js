import TaskWindowView from './TasksWindowView.js';
import taskModel from '../../../models/taskModel.js';
import {TASK_STATUS} from '../../../data/dataTasks.js'

export class TaskWindow {
    constructor(){
        this.view
        this.type
        this.onChange
        this.projectId
        this.names
        this.task_status = TASK_STATUS
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
            deleteBtn: $$('taskWindowDeleteButton'),
            form: $$('formWindowTask'),
            formfields: {
                name: $$('formWindowTaskName'),
                projectID: $$('formWindowProjectID'),
                description: $$('formWindowTaskDescription'),
                performer: $$('formWindowTaskPerformer'),
                status: $$('formWindowTaskStage'),
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
                this.view.formfields.status.setValue(0)
            }
            else {
                this.view.formfields.status.setValue(1)
            }
        })

        this.view.windowConfirmBtn.attachEvent("onItemClick", () => {
             switch (this.type) {
                case TASK_WINDOW_TYPE.create:
                    taskModel.createTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
                case TASK_WINDOW_TYPE.new:
                    taskModel.updateTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
                case TASK_WINDOW_TYPE.assigned:
                    taskModel.updateTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
                case TASK_WINDOW_TYPE.inJob:
                    taskModel.updateTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
                case TASK_WINDOW_TYPE.pause:
                    taskModel.updateTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
                case TASK_WINDOW_TYPE.coordination:
                    taskModel.updateTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
                case TASK_WINDOW_TYPE.delete:
                    taskModel.deleteTask(this.fetch())
                    this.view.form.clear()
                    this.onChange()
                    this.hide()
                    break;
            }
        })

        this.view.deleteBtn.attachEvent("onItemClick", () => {
            this.view.window.hide()
            this.show(TASK_WINDOW_TYPE.delete,this.names)
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
            case TASK_WINDOW_TYPE.create:
                this.view.windowLabel.define("template", "Создание задачи")
                this.view.windowLabel.refresh()
                this.view.formfields.projectID.define("value", this.projectId)
                this.view.formfields.projectID.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", false)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.enable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.define("options", [this.task_status[0], this.task_status[1]])
                this.view.formfields.status.disable()
                this.view.formfields.status.refresh()
                
                this.view.formfields.urgently.enable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.hide()
                this.view.formfields.planTime.hide()
                this.view.formfields.factTimeLabel.hide()
                this.view.formfields.factTime.hide()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Создать")
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;

            case TASK_WINDOW_TYPE.new:
                this.view.windowLabel.define("template", "Новая задача")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.enable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.disable()
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.disable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.hide()
                this.view.formfields.planTime.hide()
                this.view.formfields.factTimeLabel.hide()
                this.view.formfields.factTime.hide()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;

            case TASK_WINDOW_TYPE.assigned:
                this.view.windowLabel.define("template", "Назначенная задача")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.disable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.enable()
                this.view.formfields.status.define("options", [this.task_status[1], this.task_status[2], this.task_status[4]])
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.disable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.planTime.enable()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                this.view.formfields.factTime.disable()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;

            case TASK_WINDOW_TYPE.inJob:
                this.view.windowLabel.define("template", "Задача в работе")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.disable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.enable()
                this.view.formfields.status.define("options", [this.task_status[2], this.task_status[3], this.task_status[4], this.task_status[5]])
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.disable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.planTime.disable()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                this.view.formfields.factTime.enable()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;

            case TASK_WINDOW_TYPE.pause:
                this.view.windowLabel.define("template", "Пауза")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.disable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.enable()
                this.view.formfields.status.define("options", [this.task_status[2], this.task_status[3], this.task_status[4], this.task_status[5]])
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.disable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.planTime.disable()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                this.view.formfields.factTime.disable()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;

            case TASK_WINDOW_TYPE.coordination:
                this.view.windowLabel.define("template", "Задача на согласовании")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", false)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", false)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.enable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.disable()
                this.view.formfields.status.define("options", [this.task_status[0], this.task_status[1], this.task_status[4]])
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.enable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.hide()
                this.view.formfields.planTime.hide()
                this.view.formfields.factTimeLabel.hide()
                this.view.formfields.factTime.hide()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Сохранить")
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;

            case TASK_WINDOW_TYPE.done:
                this.view.windowLabel.define("template", "Задача выполнена")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.disable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.disable()
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.disable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.planTime.disable()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                this.view.formfields.factTime.disable()
                this.view.windowConfirmBtn.hide()
                this.view.windowConfirmBtn.refresh()
                this.view.window.resize()
                break;
            
            case TASK_WINDOW_TYPE.delete:
                this.view.windowLabel.define("template", "Удаление задачи")
                this.view.windowLabel.refresh()
                this.view.formfields.name.define("readonly", true)
                this.view.formfields.name.refresh()
                this.view.formfields.description.define("readonly", true)
                this.view.formfields.description.refresh()
                this.view.formfields.performer.disable()
                this.view.formfields.performer.define("options", employees)
                this.view.formfields.performer.refresh()
                this.view.formfields.status.disable()
                this.view.formfields.status.refresh()
                this.view.formfields.urgently.disable()
                this.view.formfields.urgently.refresh()
                this.view.formfields.planTimeLabel.show()
                this.view.formfields.planTime.show()
                this.view.formfields.planTime.disable()
                this.view.formfields.factTimeLabel.show()
                this.view.formfields.factTime.show()
                this.view.formfields.factTime.disable()
                this.view.windowConfirmBtn.show()
                this.view.windowConfirmBtn.define("value", "Удалить")
                this.view.windowConfirmBtn.refresh()
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

    parse(values) {
        this.view.form.setValues(values)
    }

    fetch() {
        return this.view.form.getValues()
    }

    setId(projectId) {
        this.projectId = projectId
    }
}

export const TASK_WINDOW_TYPE = {
    create: 'CREATE',
    new: 'NEW',
    assigned: 'ASSIGNED',
    inJob: 'INJOB',
    pause: 'PAUSE',
    coordination: 'COORDINATION',
    done: 'DONE',
    delete: 'DELETE'
}