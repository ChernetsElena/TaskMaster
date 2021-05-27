


export default function TasksView(){
    return {
        css: {"background": "linear-gradient(-45deg, #ffdb5c, #ffacac)"},
        rows: [
        {cols: [
            {rows:[
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
                    type: {
                        height: 140,
                        width: 270
                    },
                    drag: "move",
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#title#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
                    data:[
                        { id:1, title:"The Shawshank Redemption", status:"Новая", performer:"Иванов Иван"},
                        { id:2, title:"The Godfather", status:"Новая", performer:"Иванов Иван"},
                        { id:3, title:"The Godfather: Part II", status:"Новая", performer:"Иванов Иван"},
                        { id:4, title:"The Good, the Bad and the Ugly", status:"Новая", performer:"Иванов Иван"}
                    ]
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
                    type: {
                        height: 140,
                        width: 270
                    },
                    drag: "move",
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#title#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
                    data:[
                        { id:1, title:"The Shawshank Redemption", status:"Назначена", performer:"Иванов Иван"},
                        { id:2, title:"The Godfather", status:"Назначена", performer:"Иванов Иван"},
                        { id:3, title:"The Godfather: Part II", status:"Назначена", performer:"Иванов Иван"},
                        { id:4, title:"The Good, the Bad and the Ugly", status:"Назначена", performer:"Иванов Иван"}
                    ]
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
                    type: {
                        height: 140,
                        width: 270
                    },
                    drag: "move",
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#title#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
                    data:[
                        { id:1, title:"The Shawshank Redemption", status:"В работе", performer:"Иванов Иван"},
                        { id:2, title:"The Godfather", status:"В работе", performer:"Иванов Иван"},
                        { id:3, title:"The Godfather: Part II", status:"В работе", performer:"Иванов Иван"},
                        { id:4, title:"The Good, the Bad and the Ugly", status:"В работе", performer:"Иванов Иван"}
                    ]
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
                    type: {
                        height: 140,
                        width: 270
                    },
                    drag: "move",
                    template:"<div class='overall_tasks' style='background: #v#' ><div class ='title_tasks'>#title#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
                    data:[
                        { id:1, title:"The Shawshank Redemption", status:"Согласование", performer:"Иванов Иван", v:"red"},
                        { id:2, title:"The Godfather", status:"Согласование", performer:"Иванов Иван",v:"orange"},
                        { id:3, title:"The Godfather: Part II", status:"Согласование", performer:"Иванов Иван", v:"white"},
                        { id:4, title:"The Good, the Bad and the Ugly", status:"Согласование", performer:"Иванов Иван", v:"red"}
                    ]
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
                    type: {
                        height: 140,
                        width: 270
                    },
                    drag: "move", 
                    dragscroll:true,
                    template:"<div class='overall_tasks'><div class ='title_tasks'>#title#</div></br><div class='status_tasks'>Статус: #status#</div> </br> <div class='performer_tasks'>Исполнитель: #performer#</div></div>",
                    data:[
                        { id:1, title:"The Shawshank Redemption", status:"Решена", performer:"Иванов Иван"},
                        { id:2, title:"The Godfather", status:"Решена", performer:"Иванов Иван"},
                        { id:3, title:"The Godfather: Part II", status:"Решена", performer:"Иванов Иван"},
                        { id:4, title:"The Good, the Bad and the Ugly", status:"Решена", performer:"Иванов Иван"},
                        { id:5, title:"The Sawshank Redemption", status:"Решена", performer:"Иванов Иван"},
                        { id:6, title:"The Goher", status:"Решена", performer:"Иванов Иван"},
                        { id:7, title:"The Gofather: Part II", status:"Решена", performer:"Иванов Иван"},
                        { id:8, title:"The God, the Bad and the Ugly", status:"Решена", performer:"Иванов Иван"},
                        { id:9, title:"The Shak Redemption", status:"Решена", performer:"Иванов Иван"},
                        { id:10, title:"The Gfather", status:"Решена", performer:"Иванов Иван"},
                        { id:11, title:"The Godfather:t II", status:"Решена", performer:"Иванов Иван"},
                        { id:12, title:"The Good, thd and the Ugly", status:"Решена", performer:"Иванов Иван"}
                    ]
                },
            ]},
        ]}
    ]}  
}
