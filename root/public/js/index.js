import { Toolbar } from "./src/components/toolbar/CToolbar.js";
import { Project } from "./src/components/projects/CProjects.js";
import { ProjectsButton } from "./src/components/projects/projectButton/CProjectsButton.js";
import { ProjectsWindow } from "./src/components/projects/projectWindow/CProjectsWindow.js";
import { TaskWindow } from "./src/components/tasks/taskWindow/CTasksWindow.js";
import { TaskButton } from "./src/components/tasks/taskButton/CTasksButton.js";
import { Tasks } from "./src/components/tasks/CTasks.js";

webix.ready(() => {
    let app = new TaskButton();
    //app.init()
    webix.ui(app.config()).show()
})