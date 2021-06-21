import {dataTasks} from '../src/data/dataTasks.js'
import {dataEmployees} from '../src/data/dataEmployees.js'
import {dataProjects} from '../src/data/dataProjects.js'
import {dataPositions} from '../src/data/dataPositions.js'
import {Task} from '../src/models/entities/task.js'
import {Employee} from '../src/models/entities/employee.js'
import {Project} from '../src/models/entities/project.js'

export default class Model {
    // метод для совершения get запроса
    // get(url) {
    //     return new Promise(function (resolve, reject) {

    //         let xhr = new XMLHttpRequest();
    //         xhr.open('GET', url);
    //         xhr.responseType = 'json'
    //         xhr.onload = () => {
    //             // проверка статуса HTTP запроса
    //             if (xhr.status != 200) {
    //                 webix.message(xhr.status + ': ' + xhr.statusText, 'error');
    //                 reject()
    //             } else {
    //                 if (!xhr.response) {
    //                     return
    //                 }
    //                 // валидация статуса ответа сервера
    //                 if (!xhr.response.status) {
    //                     webix.message('Не удалось совершить запрос', 'error');
    //                     console.error(`GET xhr.response.status is ${xhr.response.status}`);
    //                     reject()
    //                 }

    //                 // проверка статуса ответа сервера
    //                 switch (xhr.response.status) {
    //                     case RESULT_STATE.SUCCESS: // положительный результат запроса
    //                         resolve(xhr.response.data);
    //                         return;
    //                     case RESULT_STATE.FAILED: // отрицательный результат запроса
    //                         webix.message('Не удалось совершить запрос', 'error');
    //                         console.error(`GET ${xhr.response.error}`);
    //                         reject();
    //                         return;
    //                     default: // ошибка при получении результата запроса
    //                         webix.message('Не удалось совершить запрос', 'error');
    //                         console.error(`GET Статус ответа сервера не соответствует ожидаемым значениям, xhr.response.status is ${xhr.response.status}`);
    //                         reject();
    //                         return;
    //                 }
    //             }
    //         }
    //         xhr.send()
    //     })
    // }

    // метод для совершения post запроса
    post(url, params) {
        return new Promise(function (resolve, reject) {
            switch (url) {
                case URL_TYPE.createTask:
                    dataTasks.push(new Task(
                        Number(dataTasks[dataTasks.length-1].id) + 1,
                        params.projectID,
                        params.status,
                        params.name, 
                        params.description, 
                        params.performer, 
                        params.urgently, 
                        params.plan_time,
                        params.fact_time))
                    resolve();
                    break; 

                case URL_TYPE.updateTask:
                    let updateTask = dataTasks.find(item => item.id == params.id)
                    let indexOfUpdateTask = dataTasks.indexOf(updateTask)
                    dataTasks.splice(indexOfUpdateTask, 1, params)
                    resolve(dataTasks);
                    break;

                case URL_TYPE.deleteTask:
                    let deleteTask = dataTasks.find(item => item.id == params.id)
                    let indexOfDeleteTask = dataTasks.indexOf(deleteTask)
                    dataTasks.splice(indexOfDeleteTask, 1)
                    resolve(dataTasks);
                    break;

                case URL_TYPE.getTasksByProjectId:
                    let tasksOfProject = []
                    dataTasks.map((task) => {
                        if (task.projectID == params) {
                            tasksOfProject.push(task)
                        }
                    })
                    resolve(tasksOfProject);
                    break;

                case URL_TYPE.createEmployee:
                    dataEmployees.push(new Employee(
                        Number(dataEmployees[dataEmployees.length-1].id) + 1, 
                        params.positionID,
                        params.position, 
                        params.name, 
                        params.last_name, 
                        params.middle_name, 
                        params.email, 
                        params.birth)
                    )
                    resolve(dataEmployees)
                    break;

                case URL_TYPE.getEmployees:
                    resolve(dataEmployees)
                    break;

                case URL_TYPE.updateEmployee:
                    let updateEmployee = dataEmployees.find(item => item.id == params.id)
                    let indexOfUpdateEmployee = dataEmployees.indexOf(updateEmployee)
                    dataEmployees.splice(indexOfUpdateEmployee, 1, params)
                    resolve(dataEmployees)
                    break;
                
                case URL_TYPE.deleteEmployee:
                    let deleteEmployee = dataEmployees.find(item => item.id == params.id)
                    let indexOfDeleteEmployee = dataEmployees.indexOf(deleteEmployee)
                    dataEmployees.splice(indexOfDeleteEmployee, 1)
                    resolve(dataEmployees)
                    break;

                case URL_TYPE.getEmployeeById:
                    let employee = dataEmployees.find(item => item.id == params)
                    resolve(employee)
                    break;

                case URL_TYPE.createProject:
                    dataProjects.push(new Project(
                        Number(dataProjects[dataProjects.length-1].id) + 1,
                        params.name, 
                        params.description, 
                        params.teamlead, 
                        params.color_one, 
                        params.color_two)
                    )
                    resolve(dataProjects)
                    break;

                case URL_TYPE.updateProject:
                    let updateProject = dataProjects.find(item => item.id == params.id)
                    let indexOfUpdateProject = dataProjects.indexOf(updateProject)
                    dataProjects.splice(indexOfUpdateProject, 1, params)
                    resolve(dataProjects)
                    break;

                case URL_TYPE.deleteProject:
                    let deleteProject = dataProjects.find(item => item.id == params.id)
                    let indexOfDeleteProject = dataProjects.indexOf(deleteProject)
                    dataProjects.splice(indexOfDeleteProject, 1)
                    resolve(dataProjects)
                    break;

                case URL_TYPE.getProjects:
                    resolve(dataProjects)
                    break;

                case URL_TYPE.getPositions:
                    resolve(dataPositions)
                    
                default: reject()
            }
        })
    }
}

        


 const URL_TYPE = {
    createTask: '/task/create',
    updateTask: '/task/update',
    deleteTask: '/task/delete',
    getTasksByProjectId: '/task/project',

    createProject: '/project/create',
    updateProject: '/project/update',
    deleteProject: '/project/delete',
    getProjects: '/project/all',

    createEmployee: '/employee/create',
    updateEmployee: '/employee/update',
    deleteEmployee: '/employee/delete', 
    getEmployees: '/employee/all',
    getEmployeeById: '/employee/id',

    getPositions: '/position/all',
}