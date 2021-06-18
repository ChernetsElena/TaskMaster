import {dataProjects} from '../data/dataProjects.js'
import {Project} from './entities/project.js'
import Model from '../../../js/helpers/model.js'

class ProjectModel extends Model{
    constructor(){
        super()
    }

    createProject(dataWindow) {
       return this.post('/project/create', dataWindow)
    }

    updateProject(dataWindow) {
        return this.post('/project/update', dataWindow)
    }

    deleteProject(dataWindow) {
        return this.post('/project/delete', dataWindow)
    }

    getProjects() {
        return this.post('/project/all')
    }
}

const projectModel = new ProjectModel();
export default projectModel