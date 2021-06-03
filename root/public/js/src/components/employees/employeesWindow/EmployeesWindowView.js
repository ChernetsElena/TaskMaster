
export default function EmployeesWindowView(){
    return {
        view:"window",
        id:"windowEmployee",
        position: "center",
        modal: true,
        head: {cols: [
            {
                view: 'template',
                id: 'employeeWindowLabel',
                css: 'webix_template',
                template: headText,
                borderless: true,
                type:"header",
                width: 320,
            },
            {
                view: "button",
                id: "employeeWindowCloseButton",
                type: "icon",
                icon: "wxi-close",
                width: 50,
            }
        ]},
        body:{
            view:"form", 
            id:"formWindowEmployee",
            width: 500,
            elements:[
                { rows:[
                    {
                        view:"text", 
                        label:"Фамилия",
                        id:"employeeLastName", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        attributes: {required: true}
                    },
                    {
                        view:"text", 
                        label:"Имя",
                        id:"employeeFirstName", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        attributes: {required: true}
                    },
                    {
                        view:"text", 
                        label:"Отчество",
                        id:"employeeMiddleName", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        attributes: {required: true}
                    },
                    {
                        view:"select", 
                        label:"Должность",
                        id:"employeePosition", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        options:[
                            { "id":1, "value":"Master" },
                            { "id":2, "value":"Release" }
                        ],
                        attributes: {required: true}
                    },
                    {
                        view:"text", 
                        label:"E-mail",
                        id:"employeeEmail", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        attributes: {required: true}
                    },
                    {
                        view:"datepicker", 
                        label:"Дата рождения",
                        id:"employeeBirth", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        attributes: {required: true}
                    },
                    {cols: [
                        {},
                        {
                            view:"button", 
                            id:"addEmployeeBtn", 
                            value:"Готово",
                            width: 150,
                            align : 'center',
                            top: 20,
                            css: "webix_primary"
                        },
                        {} 
                    ]} 
                ],
                
            },    
        ],
        css:{"border-color":"orange"},
    }
    }
}