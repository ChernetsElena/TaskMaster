import {Task} from './entities/task.js'
import {dataTasks} from '../data/dataTasks.js'
import Model from '../../../js/helpers/model.js'

class TaskModel extends Model {
    constructor(){
        super()
    }

    createTask(dataWindow) {
        return this.post('/task/create', dataWindow)
    }

    getTasksByProjectId(projectId) {
        return this.post('/task/project', projectId)
    }

    updateTask(dataWindow) {
        return this.post('/task/update', dataWindow)
    }

    deleteTask(dataWindow) {
        return this.post('/task/delete', dataWindow)
    }
}

const taskModel = new TaskModel();
export default taskModel