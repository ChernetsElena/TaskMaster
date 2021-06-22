import {TASK_STATUS} from '../../data/dataTasks.js'
import {TASK_URGENTLY_COLOR} from '../../data/dataTasks.js'

export default function TasksView(){
    
    return {
        id: "tasksContainer",
        css: "bg",
        rows: [
                {
                    view:"search", 
                    id:"filterList",
                    placeholder:"Поиск по исполнителю...", 
                    align: 'center',
                    width: 600,
                    css: "webix_el_box"    
                },
        {cols: [
            {},
            {
                rows:[
                {
                    view: "label",
                    label: "Новые задачи",
                    align: "center"
                },
                {
                    view:"list",
                    id:"tasksNewList",
                    xCount:1,
                    css:"movies_tasks",
                    select:true,
                    type: {
                        height: 180,
                        width: 230
                    },
                    drag: false,
                    template: function (obj) {
                        return "<div class='overall_tasks' style = 'border: 8px solid " + TASK_URGENTLY_COLOR[obj.urgently].value +"'>" + 
                        "<div class ='title_tasks'>" + obj.name + "</div>" + 
                        "</br><div class='status_tasks'>Статус: " + TASK_STATUS[obj.status].value + "</div>" + 
                        "</br> <div class='performer_tasks'>Исполнитель: </div>" + 
                        "</br> <div class='performer_tasks'>" + obj.performer_name + " " + obj.performer_last_name + "</div>" +
                        "</div>"            
                    },
                    data:[]
                },
            ]},
            {rows: [
                {
                    view: "label",
                    label: "Назначеные задачи",
                    align: "center"
                },
                {
                    view:"list",
                    id:"tasksAssignedList",
                    xCount:1,
                    css:"movies_tasks",
                    select:true,
                    type: {
                        height: 180,
                        width: 230
                    },
                    drag: false,
                    template: function (obj) {
                        return "<div class='overall_tasks' style = 'border: 8px solid " + TASK_URGENTLY_COLOR[obj.urgently].value +"'>" + 
                        "<div class ='title_tasks'>" + obj.name + "</div>" + 
                        "</br><div class='status_tasks'>Статус: " + TASK_STATUS[obj.status].value + "</div>" + 
                        "</br> <div class='performer_tasks'>Исполнитель: </div>" + 
                        "</br> <div class='performer_tasks'>" + obj.performer_name + " " + obj.performer_last_name + "</div>" +
                        "</div>"            
                    },                                
                    data: []
                },
            ]},
            
            {rows: [
                {
                    view: "label",
                    label: "В работе",
                    align: "center"
                },
                {
                    view:"list",
                    id:"tasksInJobList",
                    xCount:1,
                    css:"movies_tasks",
                    select:true,
                    type: {
                        height: 180,
                        width: 230
                    },
                    drag: false,
                    template: function (obj) {
                        return "<div class='overall_tasks' style = 'border: 8px solid " + TASK_URGENTLY_COLOR[obj.urgently].value +"'>" + 
                        "<div class ='title_tasks'>" + obj.name + "</div>" + 
                        "</br><div class='status_tasks'>Статус: " + TASK_STATUS[obj.status].value + "</div>" + 
                        "</br> <div class='performer_tasks'>Исполнитель: </div>" + 
                        "</br> <div class='performer_tasks'>" + obj.performer_name + " " + obj.performer_last_name + "</div>" +
                        "</div>"            
                    },                
                    data: []
                },
            ]},
           
            {rows: [
                {
                    view: "label",
                    label: "Согласование",
                    align: "center"
                },
                {
                    view:"list",
                    id:"tasksCoordinationList",
                    xCount:1,
                    css:"movies_tasks",
                    select:true,
                    type: {
                        height: 180,
                        width: 230
                    },
                    drag: false,
                    template: function (obj) {
                        return "<div class='overall_tasks' style = 'border: 8px solid " + TASK_URGENTLY_COLOR[obj.urgently].value +"'>" + 
                        "<div class ='title_tasks'>" + obj.name + "</div>" + 
                        "</br><div class='status_tasks'>Статус: " + TASK_STATUS[obj.status].value + "</div>" + 
                        "</br> <div class='performer_tasks'>Исполнитель: </div>" + 
                        "</br> <div class='performer_tasks'>" + obj.performer_name + " " + obj.performer_last_name + "</div>" +
                        "</div>"            
                    },                                
                    data: []
                },
            ]},
           
            {rows: [
                {
                    view: "label",
                    label: "Решенные",
                    align: "center"
                },
                {
                    view:"list",
                    id:"tasksDoneList",
                    xCount:1,
                    css:"movies_tasks",
                    select:true,
                    type: {
                        height: 180,
                        width: 230
                    },
                    drag: false,
                    dragscroll:true,
                    template: function (obj) {
                        return "<div class='overall_tasks' style = 'border: 8px solid " + TASK_URGENTLY_COLOR[obj.urgently].value +"'>" + 
                        "<div class ='title_tasks'>" + obj.name + "</div>" + 
                        "</br><div class='status_tasks'>Статус: " + TASK_STATUS[obj.status].value + "</div>" + 
                        "</br> <div class='performer_tasks'>Исполнитель: </div>" + 
                        "</br> <div class='performer_tasks'>" + obj.performer_name + " " + obj.performer_last_name + "</div>" +
                        "</div>"            
                    },                 
                    data: []
                },
            ]},
            {}
        ]}
    ]}  
}
