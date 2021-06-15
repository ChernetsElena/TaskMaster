import {dataProjects} from '../data/dataProjects.js'
import {Project} from './entities/project.js'
import Model from '../../../js/helpers/model.js'

class ProjectModel extends Model{
    constructor(){
        super()
    }

    createProject(dataWindow) {
        dataProjects.push(new Project(
            Number(dataProjects[dataProjects.length-1].id) + 1,
            dataWindow.name, 
            dataWindow.description, 
            dataWindow.teamlead, 
            dataWindow.color_one, 
            dataWindow.color_two)
        )
        //console.log(this.post('NEW_PROJECT', dataWindow))
    }

    updateProject(dataWindow) {
        let updateProject = dataProjects.find(item => item.id == dataWindow.id)
        let indexOfUpdateProject = dataProjects.indexOf(updateProject)
        dataProjects.splice(indexOfUpdateProject, 1, dataWindow)
        //console.log(dataProjects)
    }

    deleteProject(dataWindow) {
        let deleteProject = dataProjects.find(item => item.id == dataWindow.id)
        let indexOfDeleteProject = dataProjects.indexOf(deleteProject)
        dataProjects.splice(indexOfDeleteProject, 1)
        console.log(dataProjects)
    }

    getProjects() {
        return dataProjects
    }
}

const projectModel = new ProjectModel();
export default projectModel