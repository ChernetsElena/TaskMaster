import {Task} from './entities/task.js'
import {dataTasks} from '../data/dataTasks.js'
import Model from '../../../js/helpers/model.js'

class TaskModel extends Model {
    constructor(){
        super()
    }

    createTask(dataWindow) {
        dataTasks.push(new Task(
            Number(dataTasks[dataTasks.length-1].id) + 1,
            dataWindow.projectID,
            dataWindow.status,
            dataWindow.name, 
            dataWindow.description, 
            dataWindow.performer, 
            dataWindow.urgently, 
            dataWindow.plan_time,
            dataWindow.fact_time,)
        )
    }

    getTasks(projectId) {
        let tasksOfProject = []
        dataTasks.map((task) => {
            if (task.projectID == projectId) {
                tasksOfProject.push(task)
            }
        })
        return tasksOfProject
    }

    updateTask(dataWindow) {
        let updateTask = dataTasks.find(item => item.id == dataWindow.id)
        let indexOfUpdateTask = dataTasks.indexOf(updateTask)
        dataTasks.splice(indexOfUpdateTask, 1, dataWindow)
        console.log(dataTasks)
    }

    deleteTask(dataWindow) {
        let deleteTask = dataTasks.find(item => item.id == dataWindow.id)
        let indexOfDeleteTask = dataTasks.indexOf(deleteTask)
        dataTasks.splice(indexOfDeleteTask, 1)
    }
}

const taskModel = new TaskModel();
export default taskModel