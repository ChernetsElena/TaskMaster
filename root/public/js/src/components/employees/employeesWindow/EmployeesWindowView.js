
export default function EmployeesWindowView(){
    return {
        view:"popup",
        id:"popupEmployee",
        align: "center",
        
        body:{
            view:"form", 
            id:"formPopupEmployee",
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
                        {width: 80},
                        {
                            view:"button", 
                            id:"addProjectBtn", 
                            value:"Готово",
                            width: 150,
                            align : 'center',
                            top: 20,
                            css: "webix_primary"
                        }, 
                        {
                            view:"button", 
                            id:"cancelProjectBtn", 
                            value:"Отмена",
                            width: 150,
                            align : 'center',
                            top: 20
                        }, 
                    ]} 
                ],
                
            },    
        ],
        css:{"border-color":"orange"},
    }
    }
}