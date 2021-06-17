import ProjectsView from './ProjectsView.js';
import {ProjectsWindow, PROJECT_WINDOW_TYPE} from './projectWindow/CProjectsWindow.js';
import employeeModel from '../../models/employeeModel.js'
import projectModel from '../../models/projectModel.js';
import taskModel from '../../models/taskModel.js';

export class Project {
    constructor(){
        this.view
        this.window = new ProjectsWindow()
        this.tasks
        this.projects
        this.tasksOfProject
        this.projectsButton
        this.names
        this.showTasksView
        this.clickTimeout
    }

    init (projectsButton, tasks, tasksButton, showProjectsViewCB, showTasksViewCB) {
        this.showTasksView = showTasksViewCB
        this.projectsButton = projectsButton
        this.tasks = tasks

        this.tasks.init(tasksButton, showProjectsViewCB)

        this.projectsButton.init(this.window)

        this.window.init(
            () => { this.refreshView(this.projects) }
        )
        this.names = []

        this.projects = []

        this.tasksOfProject = []

        this.clickTimeout = null
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

        this.projects = projectModel.getProjects()

        this.refreshView(this.projects)

        this.view.search.attachEvent("onTimedKeyPress",() => { 
            var value = this.view.search.getValue().toLowerCase(); 
            this.view.projectsDv.filter(function(obj){
              return obj.name.toLowerCase().indexOf(value)!=-1;
            })
        });

        this.view.projectsDv.attachEvent("onItemClick", (id) => {
            if (this.clickTimeout) {
                clearTimeout(this.clickTimeout)
                this.clickTimeout = null
                let selectedProject = this.view.projectsDv.getItem(id)
                this.window.parse(selectedProject)
                this.showWindow(PROJECT_WINDOW_TYPE.show);
               
            } else {
                this.clickTimeout = setTimeout(() => {
                    this.clickTimeout = null
                    this.tasksOfProject = taskModel.getTasks(id)
                    let project = this.view.projectsDv.getItem(id)
                    this.tasks.refreshView(this.tasksOfProject, id, project.color_one, project.color_two)
                    this.showTasksView()
                }, 500)
            }
        })
    }

    showWindow(type) {
        this.names = []
        employeeModel.getEmployees().map((employee) => {
            this.names.push({id: `${employee.id}`, value: `${employee.last_name} ${employee.name}`})
        })
        this.window.show(type, this.names)
    }

    refreshView(data) {
        this.view.projectsDv.clearAll()
        this.view.projectsDv.parse(data)
    }
}