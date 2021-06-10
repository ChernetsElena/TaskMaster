import ProjectsView from './ProjectsView.js';
import {ProjectsWindow, PROJECT_WINDOW_TYPE} from './projectWindow/CProjectsWindow.js';
import {dataProjects} from "../../data/dataProjects.js";
import employeeModel from '../../models/employeeModel.js'

export class Project {
    constructor(){
        this.view
        this.window = new ProjectsWindow()
        this.dataProjects = dataProjects
        this.projectsButton
        this.names
    }

    init (projectsButton) {
        this.projectsButton = projectsButton
        this.projectsButton.init(this.window)
        this.window.init(
            () => { this.refreshView(this.dataProjects) }
        )
        this.names = []
        employeeModel.getEmployees().map((employee) => {
            this.names.push({id: employee.id, value: `${employee.last_name} ${employee.name}` })
        })
        
    }

    config() {
        webix.ui(this.window.config(this.names))
        return ProjectsView()
    }

    attachEvents() {
        this.view = {
            search: $$('projectsSearch'),
            projectsDv: $$('projectsDataview'),
        }

        this.window.attachEvents()

        this.refreshView(this.dataProjects)

        this.view.search.attachEvent("onTimedKeyPress",() => { 
            var value = this.view.search.getValue().toLowerCase(); 
            this.view.projectsDv.filter(function(obj){
              return obj.name.toLowerCase().indexOf(value)!=-1;
            })
        });


        this.view.projectsDv.attachEvent("onItemClick", (id) => {
            let selectedProject = this.view.projectsDv.getItem(id)
            this.window.parse(selectedProject)
            this.showWindow(PROJECT_WINDOW_TYPE.show);
        })
    }

    showWindow(type) {
        this.window.show(type)
    }

    refreshView(data) {
        this.view.projectsDv.clearAll()
        this.view.projectsDv.parse(data)
    }
}