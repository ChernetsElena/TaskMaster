import {dataProjects} from '../src/data/dataProjects.js'
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
                case URL_TYPE.newProject:
                    dataProjects.push(new Project(dataProjects.length + 1, params.name, params.description, params.teamlead, params.color_one, params.color_two))
                    resolve(dataProjects);
                    break; 
                case URL_TYPE.updateProject:
                    break;
                case URL_TYPE.deleteProject:
                    break;
                default: reject()
            }
        })
    }
}

        


 const URL_TYPE = {
    newTask: 'NEW_TASK',
    updateTask: 'UPDATE_TASK',
    deleteTask: 'DELETE_TASK',
    newProject: 'NEW_PROJECT',
    updateProject: 'UPDATE_PROJECT',
    deleteProject: 'DELETE_PROJECT',
    newEmployee: 'NEW_EMPLOYEE',
    updateEmployee: 'UPDATE_EMPLOYEE',
    deleteEmployee: 'DELETE_EMPLOYEE', 
}