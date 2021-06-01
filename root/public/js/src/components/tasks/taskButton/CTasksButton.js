import TaskButtonView from './TasksButtonView.js';
import { TaskWindow, TASK_WINDOW_TYPE } from '../taskWindow/CTasksWindow.js'


export class TaskButton {
    constructor(){
        this.view
        this.window
    }

    init() {
        this.window = new TaskWindow()
    }
    
    config() {
        webix.ui(this.window.config())
        return TaskButtonView()
    }

    attachEvents() {
        this.view = {
            toProjectsBtn: $$('tasksButtonToProjectsBtn'),
            newTaskBtn: $$('tasksButtonNewTaskBtn')
        }

        this.window.attachEvents()

        this.view.newTaskBtn.attachEvent("onItemClick", () => {
            this.showWindow()
        })   
    }

    showWindow() {
        this.window.show(TASK_WINDOW_TYPE.new)
    }
}