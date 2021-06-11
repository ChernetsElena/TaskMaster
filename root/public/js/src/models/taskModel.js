import {Task} from './entities/task.js'

class TaskModel {
    constructor(){
        this.tasks = [
            {id: '1', project: '1', status: '0', name: 'Task1', description: 'Description1', performer: '', urgently: '0', plan_time: '', fact_time: ''},
            {id: '2', project: '1', status: '1', name: 'Task2', description: 'Description2', performer: 'Иванов Иван', urgently: '1', plan_time: '01:00', fact_time: ''},
            {id: '3', project: '1', status: '2', name: 'Task3', description: 'Description3', performer: 'Петров Петр', urgently: '2', plan_time: '04:30', fact_time: ''},
            {id: '4', project: '1', status: '3', name: 'Task4', description: 'Description4', performer: 'Петров Петр', urgently: '0', plan_time: '08:30', fact_time: ''},
            {id: '5', project: '2', status: '4', name: 'Task5', description: 'Description5', performer: 'Иванов Иван', urgently: '1', plan_time: '15:30', fact_time: '15:00'},
            {id: '6', project: '3', status: '5', name: 'Task6', description: 'Description6', performer: 'Ив Ив', urgently: '2', plan_time: '20:00', fact_time: ''},
            {id: '7', project: '3', status: '1', name: 'Task7', description: 'Description7', performer: 'Пет Пет', urgently: '0', plan_time: '02:00', fact_time: ''},
        ]

        this.tasksDone = [
            { id:9, title:"The Shawshank Redemption", status:"Решена", performer:"Иванов Иван"},
            { id:8, title:"The Godfather", status:"Решена", performer:"Иванов Иван"},
            { id:10, title:"The Godfather: Part II", status:"Решена", performer:"Иванов Иван"},
            { id:11, title:"The Good, the Bad and the Ugly", status:"Решена", performer:"Иванов Иван"},
            { id:12, title:"The Sawshank Redemption", status:"Решена", performer:"Иванов Иван"},
            { id:34, title:"The Goher", status:"Решена", performer:"Иванов Иван"},
            { id:36, title:"The Gofather: Part II", status:"Решена", performer:"Иванов Иван"},
            { id:90, title:"The God, the Bad and the Ugly", status:"Решена", performer:"Иванов Иван"},
            { id:13, title:"The Shak Redemption", status:"Решена", performer:"Иванов Иван"},
            { id:14, title:"The Gfather", status:"Решена", performer:"Иванов Иван"},
            { id:15, title:"The Godfather:t II", status:"Решена", performer:"Иванов Иван"},
            { id:16, title:"The Good, thd and the Ugly", status:"Решена", performer:"Иванов Иван"}
        ]
    }

    createTask(data) {
        console.log(data.taskPlanTime.getHours(), data.taskPlanTime.getMinutes())
       // this.tasks.push(new Task(this.tasks.length + 1, 1, data.taskStatus, data.taskName, data.taskDescription, data.taskPerformer, data.taskUrgently, '', ''))
        //console.log(this.tasks)
    }


}

const taskModel = new TaskModel();
export default taskModel