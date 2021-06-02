import TasksView from './TasksView.js';


export class Tasks {
    constructor(){
        this.view
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

        this.view.newList.attachEvent("onSelectChange", () => {
            let id = this.view.newList.getSelectedId();
            //alert(this.view.newList[1])
         })
    }
}