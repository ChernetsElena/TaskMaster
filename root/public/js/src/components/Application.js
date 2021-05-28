import ApplicationView from './ApplicationView.js';
import { Toolbar } from "./src/components/toolbar/CToolbar.js";
import { Project } from "./src/components/projects/CProjects.js";
import { ProjectsButton } from "./src/components/projects/projectButton/CProjectsButton.js";


export class Application {
    constructor() {
        this.toolbar = new Toolbar()          // экземпляр контроллера пользовательской информации 
        this.project = new Project()           // экземпляр контроллера книг
        this.projectsButton = new ProjectsButton()   // экземпляр контроллера сотрудников
    }
    config() {
        return ApplicationView(this.toolbar, this.project, this.projectsButton)
    }
}