export const TASK_STAGE_TYPE = {
    new: 'Новая',
    assigned: 'Назначена',
    inJob: 'В работе',
    pause: 'Пауза',
    coordination: 'Согласование',
    done: 'Решена' 
}

export default function TasksWindowView(){
    let headText = 'Новая задача' 

    let TASK_STAGE = [
        {"id": 1, "value": TASK_STAGE_TYPE.new},
        {"id": 2, "value": TASK_STAGE_TYPE.assigned},
        {"id": 3, "value": TASK_STAGE_TYPE.inJob},
        {"id": 4, "value": TASK_STAGE_TYPE.pause},
        {"id": 5, "value": TASK_STAGE_TYPE.coordination},
        {"id": 6, "value": TASK_STAGE_TYPE.done},
    ]

    return {
        view:"window",
        id:"taskWindow",
        head: {cols: [
            {
                view: 'template',
                id: 'taskWindowLabel',
                css: 'webix_template',
                template: headText,
                borderless: true,
                type:"header",
                width: 200,
            },
            {width: 650},
            {
                view: "button",
                id: "taskWindowCloseButton",
                type: "icon",
                icon: "wxi-close",
                width: 100,

            }
        ]},
        position: "center",
        modal: true,
        css: "popup_task_window",
        width: 1000,
        body:{
            view:"form", 
            id:"formWindowTask",
            width: 1000,
            elements:[
                { rows:[
                    {
                        view:"text", 
                        label:"Задача",
                        id:"formWindowTaskName", 
                        width: 400,
                        labelWidth: 100,
                        align : 'center',
                        attributes: {required: true},
                    },      
                    {
                        view:"textarea", 
                        label:"Описание",
                        id:"formWindowTaskDescription", 
                        width: 400,
                        height: 150,
                        labelWidth: 100,
                        align : 'center',
                    },
                    {
                        view:"combo", 
                        id:"formWindowTaskPerformer", 
                        label:"Исполнитель", 
                        width: 400,
                        labelWidth: 100,
                        align : 'center',
                        options:[" ","One", "Two", "Three"]
                    },
                    {
                        view:"select", 
                        id:"formWindowTaskStage", 
                        label: "Статус",
                        labelWidth: 100,
                        width: 400,
                        value: TASK_STAGE_TYPE.new,  
                        align : 'center',
                        options: TASK_STAGE
                    },
                    {
                        view:"segmented", 
                        id:"formWindowTaskUrgently", 
                        width: 400,
                        value:1, 
                        align : 'center',
                        options:[
                            { "id":"1", "value":"Нормально" },
                            { "id":"2", "value":"Срочно" }, 
                            { "id":"3", "value":"Очень срочно" }
                        ],
                        css: "segment_btn_task_window",
                        
                    },
                    {
                        cols: [
                        {},
                        {cols: [
                            {rows: [
                                {
                                    view: "label",
                                    id: "formWindowTaskPlanTimeLabel",
                                    label: "Планируемое время выполнения:"
                                },
                                {
                                    view: "timeboard",
                                    id: "formWindowTaskPlanTime",
                                    twelve: false,
                                    width: 400
                                 },
                                 
                            ]},
                        ]},
                        {width: 34},
                        {cols: [
                            {rows: [
                                {
                                    view: "label",
                                    id: "formWindowTaskFactTimeLabel",
                                    label: "Фактическое время выполнения:"
                                },
                                {
                                    view: "timeboard",
                                    id: "formWindowTaskFactTime",
                                    twelve: false,
                                    width: 400
                                 },
                                 
                            ]},
                        ]},
                        {}
                    ]},
                    {cols: [
                        {},
                        {
                            view:"button", 
                            id:"taskWindowAddBtn", 
                            value:"Сохранить",
                            width: 150,
                            top: 20,
                            css: "webix_primary",
                        }, 
                        {},
                    ]}
                ] 
            },    
        ],
        css:{"border-color":"orange"},
    }
    }
}