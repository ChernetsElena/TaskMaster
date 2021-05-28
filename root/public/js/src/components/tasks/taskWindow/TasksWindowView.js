export default function TasksWindowView(){
    return {
        view:"popup",
        id:"popupWindowTask",
        align: "center",
        css: "popup_task_window",
        width: 500,
        body:{
            view:"form", 
            id:"formWindowTask",
            width: 500,
            elements:[
                { rows:[
                    {
                        view:"text", 
                        label:"Задача",
                        id:"taskName", 
                        width: 400,
                        labelWidth: 100,
                        //labelPosition: "top",
                        align : 'center',
                        attributes: {required: true}
                    },      
                    {
                        view:"textarea", 
                        label:"Описание",
                        id:"taskDescription", 
                        width: 400,
                        height: 150,
                        labelWidth: 100,
                        align : 'center',
                    },
                    {
                        view:"combo", 
                        id:"performer", 
                        label:"Исполнитель", 
                        width: 400,
                        labelWidth: 100,
                        align : 'center',
                        options:["One", "Two", "Three"]
                    },
                    {
                        view:"select", 
                        id:"taskStage", 
                        label: "Статус",
                        labelWidth: 100,
                        width: 400,
                        value:1,
                        align : 'center',
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
                        width: 400,
                        value:1, 
                        align : 'center',
                        options:[
                            { id:"1", value:"Нормально" },
                            { id:"2", value:"Срочно" }, 
                            { id:"3", value:"Очень срочно" }
                        ],
                        css: "segment_btn_task_window",
                        
                    },
                    {cols: [
                        {width: 34},
                        {rows: [
                            {
                                view: "label",
                                label: "Планируемое время выполнения:"
                            },
                            {
                                view: "timeboard",
                                id: "planTime",
                                twelve: false,
                                width: 400
                             },
                             
                        ]},
                    ]},
                    
                    {
                        view:"datepicker", 
                        id: "startTime",
                        value: new Date(2012, 6, 8), 
                        label: "Начало выполнения:", 
                        timepicker: true,
                        labelWidth: 170,
                        width: 400,
                        align: "center"
                    },
                    {
                        view:"datepicker", 
                        id: "endTime",
                        value: new Date(2012, 6, 8), 
                        label: "Конец выполнения:", 
                        timepicker: true,
                        labelWidth: 170,
                        width: 400,
                        align: "center"
                    },
                    {cols: [
                        {
                            view: "label",
                            id: "factTime",
                            label: "Фактическое время выполнения: ",
                            width: 400,
                            align: "center"
    
                        },
                    ]},
                    {cols: [
                        {width: 90},
                        {
                            view:"button", 
                            id:"addTaskBtn", 
                            value:"Сохранить",
                            width: 150,
                            top: 20,
                            css: "webix_primary",
                        }, 
                        {
                            view:"button", 
                            id:"cancelTaskBtn", 
                            value:"Закрыть",
                            width: 150,
                            top: 20,
                        }, 
                    ]}
                ] 
            },    
        ],
        css:{"border-color":"orange"},
    }
    }
}