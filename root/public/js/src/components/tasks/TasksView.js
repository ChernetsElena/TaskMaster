export default function TasksView(){
    return {
        css: {"background": "linear-gradient(-45deg, #ffdb5c, #ffacac)"},
        rows: [
                {
                    view:"search", 
                    id:"filter-list",
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
                        height: 140,
                        width: 230
                    },
                    drag: false,
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#name#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
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
                        height: 140,
                        width: 230
                    },
                    drag: false,
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#name#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
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
                        height: 140,
                        width: 230
                    },
                    drag: false,
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#name#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
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
                        height: 140,
                        width: 230
                    },
                    drag: false,
                    template:"<div class='overall_tasks' style='background: #v#' ><div class ='title_tasks'>#name#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
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
                        height: 140,
                        width: 230
                    },
                    drag: false,
                    dragscroll:true,
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#name#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
                    data: []
                },
            ]},
            {}
        ]}
    ]}  
}
