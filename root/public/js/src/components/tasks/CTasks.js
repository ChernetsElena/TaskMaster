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
        this.projectId
        this.color_one
        this.color_two
    }

    init(tasksButton, showProjectsViewCB){
        this.window = new TaskWindow()

        this.tasksButton = tasksButton

        this.tasksButton.init(this.window, showProjectsViewCB)

        this.window.init(() => { 
            taskModel.getTasksByProjectId(this.projectId).then((data) => {
                this.refreshView(data, this.projectId, this.color_one, this.color_two) 
            })
        })

        this.names = []

        employeeModel.getEmployees().then((data) => {
            data.map((employee) => {
                this.names.push({id: `${employee.id}`, value: `${employee.last_name} ${employee.name}`})
            })
        })
    }

    config() {
        webix.ui(this.window.config(this.names))
        return TasksView()
    }

    attachEvents(){
        this.view = {
            container: $$('tasksContainer'),
            filterList: $$('filterList'),
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

        this.view.newList.attachEvent("onSelectChange", (id) => {
            let selectedTask = this.view.newList.getItem(id)
            this.window.parse(selectedTask)
            this.showWindow(TASK_WINDOW_TYPE.new);
            this.view.newList.unselectAll();
        })

        this.view.assignedList.attachEvent("onSelectChange", (id) => {
            let selectedTask = this.view.assignedList.getItem(id)
            this.window.parse(selectedTask)
            this.showWindow(TASK_WINDOW_TYPE.assigned)
            this.view.assignedList.unselectAll();
        })

        this.view.inJobList.attachEvent("onSelectChange", (id) => {
            let selectedTask = this.view.inJobList.getItem(id)
            this.window.parse(selectedTask)
            this.showWindow(TASK_WINDOW_TYPE.inJob);
            this.view.inJobList.unselectAll();
        })

        this.view.coordinationList.attachEvent("onSelectChange", (id) => {
            let selectedTask = this.view.coordinationList.getItem(id)
            this.window.parse(selectedTask)
            this.showWindow(TASK_WINDOW_TYPE.coordination)
            this.view.coordinationList.unselectAll();
        })

        this.view.doneList.attachEvent("onSelectChange", (id) => {
            let selectedTask = this.view.doneList.getItem(id)
            this.window.parse(selectedTask)
            this.showWindow(TASK_WINDOW_TYPE.done);
            this.view.doneList.unselectAll();
        })
    }

    showWindow(type) {
        this.names = []
        employeeModel.getEmployees().then((data) => {
            data.map((employee) => {
                this.names.push({id: `${employee.id}`, value: `${employee.last_name} ${employee.name}`})
            })
            this.window.show(type, this.names)
        })
    }

    refreshView(tasksData, projectId, color_one, color_two) {
        this.projectId = projectId
        this.color_one = color_one
        this.color_two = color_two
       
        


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
                inJobTasks.push(task)
            }
            if (task.status == 4) {
                coordinationTasks.push(task)
            }
            if (task.status == 5) {
                doneTasks.push(task)
            }
        })

        this.window.setId(projectId)
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
        this.view.container.define("css", {"background": `linear-gradient(-45deg, ${this.color_one}, ${this.color_two})`})
        this.view.container.resize()
        console.log('in refresh task', this.color_one, this.color_two)
        
        //console.log(this.view.container["$ready"])
    }
}