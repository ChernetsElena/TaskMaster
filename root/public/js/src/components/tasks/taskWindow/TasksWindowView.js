export default function TasksWindowView(){
    return {
        view:"popup",
        id:"popupAddTask",
        align: "center",
        body:{
            view:"form", 
            id:"formTask",
            elements:[
                { rows:[
                    {
                        view:"text", 
                        label:"Задача",
                        id:"taskName", 
                        width: 400,
                        labelPosition: "top",
                        align : 'center',
                        attributes: {required: true}
                    },      
                    {
                        view:"textarea", 
                        label:"Описание",
                        id:"taskDescription", 
                        width: 400,
                        height: 300,
                        labelPosition: "top",
                        align : 'center',
                    },
                    {
                        view:"combo", 
                        id:"performer", 
                        label:"Исполнитель", 
                        width: 350,
                        align : 'center',
                        labelPosition: "top",
                        options:["One", "Two", "Three"]
                    },
                    {
                        view:"select", 
                        id:"taskStage", 
                        label: "Статус",
                        value:1,
                        options:[
                            { "id":1, "value":"Новая" },
                            { "id":2, "value":"Назначена"},
                            { "id":2, "value":"В работе"},
                            { "id":2, "value":"Согласование"},
                            { "id":2, "value":"Решена"},
                        ]
                    },
                    {
                        view:"segmented", 
                        id:"urgently", 
                        width: 700,
                        value:1, 
                        options:[
                            { id:"1", value:"Нормально" },
                            { id:"2", value:"Срочно" }, 
                            { id:"3", value:"Очень срочно" }
                        ],
                    }, 
                    {
                        view: "label",
                        label: "Планируемое время выполнения:"
                    },
                    {
                        view: "timeboard",
                        width: 350,
                        twelve: false
                     },
                     {
                        view:"datepicker", 
                        value: new Date(2012, 6, 8), 
                        label: "Начало выполнения:", 
                        timepicker: true,
                        width: 300
                    },
                    {
                        view: "label",
                        label: "Фактическое время выполнения: "
                    },
                   
                    {cols: [
                        {
                            view:"button", 
                            id:"addTaskBtn", 
                            value:"Создать",
                            width: 150,
                            align : 'center',
                            top: 20
                        }, 
                        {
                            view:"button", 
                            id:"cancelTaskBtn", 
                            value:"Отмена",
                            width: 150,
                            align : 'center',
                            top: 20
                        }, 
                    ]} 
                ],
                css:{"background": "linear-gradient(45deg, #EECFBA, #C5DDE8)"},
            },    
        ]
    }
    }
}