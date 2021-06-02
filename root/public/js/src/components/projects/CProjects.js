import ProjectsView from './ProjectsView.js';


export class Project {
    constructor(){
        this.view
    }

    config() {
        return ProjectsView()
    }

     attachEvents() {
        this.view = {
            search: $$('projectsSearch'),
            projectsDv: $$('projectsDataview'),
        }

        this.view.search.attachEvent("onTimedKeyPress",() => { 
            var value = this.view.search.getValue().toLowerCase(); 
            this.view.projectsDv.filter(function(obj){
              return obj.title.toLowerCase().indexOf(value)!=-1;
            })
        });
    }
}