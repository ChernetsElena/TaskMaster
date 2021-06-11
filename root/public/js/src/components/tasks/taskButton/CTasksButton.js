import TaskButtonView from './TasksButtonView.js';
import { TaskWindow, TASK_WINDOW_TYPE } from '../taskWindow/CTasksWindow.js'


export class TaskButton {
    constructor(){
        this.view
        this.window
        this.showProjectsView
    }

    init(showProjectsViewCB) {
        this.window = new TaskWindow()
        // this.window.init(
        //     () => { this.refreshList() }
        // )
        this.showProjectsView = showProjectsViewCB
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

        this.view.toProjectsBtn.attachEvent("onItemClick", () => {
            this.showProjectsView()
        })
    }

    showWindow() {
        this.window.show(TASK_WINDOW_TYPE.assigned)
    }

    
}