import TasksView from './TasksView.js';
import { TaskWindow, TASK_WINDOW_TYPE } from './taskWindow/CTasksWindow.js'
import taskModel from '../../models/taskModel.js'
import employeeModel from '../../models/employeeModel.js'

export class Tasks {
    constructor(){
        this.view
        this.window = new TaskWindow()
        this.tasksButton
        this.names
    }

    init(tasksButton){
        this.window = new TaskWindow()

        this.tasksButton = tasksButton

        this.tasksButton.init(this.window)

        this.window.init(
            () => { this.refreshView(this.tasksData) }
        )

        this.names = []
        employeeModel.getEmployees().map((employee) => {
            this.names.push(`${employee.last_name} ${employee.name}`)
        })
    }

    config() {
        webix.ui(this.window.config(this.names))
        return TasksView()
    }

    attachEvents(){
        this.view = {
            filterList: $$('filter-list'),
            newList: $$('tasksNewList'),
            assignedList: $$('tasksAssignedList'),
            inJobList: $$('tasksInJobList'),
            coordinationList: $$('tasksCoordinationList'),
            doneList: $$('tasksDoneList'),
        }

        this.window.attachEvents()

        this.view.filterList.attachEvent("onTimedKeyPress",() => { 
            var value = this.view.filterList.getValue().toLowerCase(); 
            this.view.newList.filter(function(obj){
                return obj.performer.toLowerCase().indexOf(value)!=-1;
            });
            this.view.assignedList.filter(function(obj){
                return obj.performer.toLowerCase().indexOf(value)!=-1;
            });
            this.view.inJobList.filter(function(obj){
                return obj.performer.toLowerCase().indexOf(value)!=-1;
            });
            this.view.coordinationList.filter(function(obj){
                return obj.performer.toLowerCase().indexOf(value)!=-1;
            })
            this.view.doneList.filter(function(obj){
                return obj.performer.toLowerCase().indexOf(value)!=-1;
            })
        });

        this.view.newList.attachEvent("onSelectChange", () => {
            let id = this.view.newList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.assigned);
            this.view.newList.unselectAll();
        })

        this.view.assignedList.attachEvent("onSelectChange", () => {
            let id = this.view.assignedList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.assigned)
            this.view.assignedList.unselectAll();
         })
         this.view.inJobList.attachEvent("onSelectChange", () => {
            let id = this.view.inJobList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.inJob);
            // this.view.newList.unselectAll();
            // this.view.coordinationList.unselectAll();
            // this.view.doneList.unselectAll();
            // this.view.assignedList.unselectAll();
            this.view.inJobList.unselectAll();
         })
         this.view.coordinationList.attachEvent("onSelectChange", () => {
            let id = this.view.coordinationList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.coordination)
            // this.view.newList.unselectAll();
            // this.view.inJobList.unselectAll();
            // this.view.doneList.unselectAll();
            // this.view.assignedList.unselectAll();
            this.view.coordinationList.unselectAll();
         })
         this.view.doneList.attachEvent("onSelectChange", () => {
            let id = this.view.doneList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.done);
            // this.view.newList.unselectAll();
            // this.view.inJobList.unselectAll();
            // this.view.assignedList.unselectAll();
            // this.view.coordinationList.unselectAll();
            this.view.doneList.unselectAll();
         })
    }

    showWindow(type) {
        this.window.show(type)
    }

    refreshView(tasksData) {
        let newTasks = []
        let assignedTasks = []
        let inJobTasks = []
        let coordinationTasks = []
        let doneTasks = []

        tasksData.map((task) => {
            if (task.status == 0) {
                newTasks.push(task)
            } 
            if (task.status == 1) {
                assignedTasks.push(task)
            }
            if (task.status == 2) {
                inJobTasks.push(task)
            }
            if (task.status == 3) {
                coordinationTasks.push(task)
            }
            if (task.status == 4) {
                doneTasks.push(task)
            }
        })

        this.view.newList.clearAll()
        this.view.newList.parse(newTasks)
        this.view.assignedList.clearAll()
        this.view.assignedList.parse(assignedTasks)
        this.view.inJobList.clearAll()
        this.view.inJobList.parse(inJobTasks)
        this.view.coordinationList.clearAll()
        this.view.coordinationList.parse(coordinationTasks)
        this.view.doneList.clearAll()
        this.view.doneList.parse(doneTasks)
    }
}