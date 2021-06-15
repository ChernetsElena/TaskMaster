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
            1, 
            dataWindow.taskStatus,
            dataWindow.taskName, 
            dataWindow.taskDescription, 
            dataWindow.taskPerformer, 
            dataWindow.taskUrgently, 
            taskPlanTime,
            taskFactTime)
        )
        console.log(dataTasks)
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
}

const taskModel = new TaskModel();
export default taskModel