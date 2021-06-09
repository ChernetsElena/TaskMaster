import ProjectsButtonView from './ProjectsButtonView.js';
import {PROJECT_WINDOW_TYPE } from '../projectWindow/CProjectsWindow.js';

export class ProjectsButton {
    constructor(){
        this.view
        this.window
    }

    init(projectWindow) {
        this.window = projectWindow
    }
    
    config() {
        return ProjectsButtonView()
    }

    attachEvents() {
        this.view = {
            newProjectBtn: $$('projectsAddButton')
        }

        this.view.newProjectBtn.attachEvent("onItemClick", () => {
            this.showWindow()
        })
    }

    showWindow() {
        this.window.show(PROJECT_WINDOW_TYPE.new)
    }
}