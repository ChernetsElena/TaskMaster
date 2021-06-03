import TasksView from './TasksView.js';
import { TaskWindow, TASK_WINDOW_TYPE } from './taskWindow/CTasksWindow.js'
import taskModel from '../../models/taskModel.js'

export class Tasks {
    constructor(){
        this.view
        this.window = new TaskWindow()
        this.dataDoneList = taskModel.tasksDone
    }

    init(){
        this.window = new TaskWindow()
    }

    config() {
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

        this.window.attachEvents()



        this.view.newList.attachEvent("onSelectChange", () => {
            let id = this.view.newList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.assigned);
            // this.view.inJobList.unselectAll();
            // this.view.coordinationList.unselectAll();
            // this.view.doneList.unselectAll();
            // this.view.assignedList.unselectAll();
            this.view.newList.unselectAll();
            this.refresh(this.dataDoneList)
        })
         this.view.assignedList.attachEvent("onSelectChange", () => {
            let id = this.view.assignedList.getSelectedId();
            this.showWindow(TASK_WINDOW_TYPE.assigned)
            // this.view.newList.unselectAll();
            // this.view.inJobList.unselectAll();
            // this.view.coordinationList.unselectAll();
            // this.view.doneList.unselectAll();
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

    refresh(data) {
        this.view.coordinationList.clearAll()
        this.view.coordinationList.parse(data)
    }
}