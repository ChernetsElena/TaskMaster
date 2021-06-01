import ApplicationView from './ApplicationView.js';
import { Toolbar } from "./src/components/toolbar/CToolbar.js";
import { Project } from "./src/components/projects/CProjects.js";
import { ProjectsButton } from "./src/components/projects/projectButton/CProjectsButton.js";


export class Application {
    constructor() {
    }
    config() {
        return ApplicationView()
    }
}