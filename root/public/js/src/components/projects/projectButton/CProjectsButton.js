import ProjectsButtonView from './ProjectsButtonView.js';
import { ProjectsWindow, PROJECT_WINDOW_TYPE } from '../projectWindow/CProjectsWindow.js';

export class ProjectsButton {
    constructor(){
        this.view
        this.window
    }

    init(showProjectsViewCB) {
        this.window = new ProjectsWindow()
        this.showProjectsView = showProjectsViewCB
    }
    
    config() {
        webix.ui(this.window.config())
        return ProjectsButtonView()
    }

    attachEvents() {
        this.view = {
            newProjectBtn: $$('projectsAddButton')
        }

        this.window.attachEvents()

        this.view.newProjectBtn.attachEvent("onItemClick", () => {
            this.showWindow()
        })
    }

    showWindow() {
        this.window.show(PROJECT_WINDOW_TYPE.show)
    }
}