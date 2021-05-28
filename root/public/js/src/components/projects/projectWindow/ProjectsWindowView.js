export default function ProjectsWindowView(){
    return {
        view:"popup",
        id:"popupAddProject",
        align: "center",
        
        body:{
            view:"form", 
            id:"log_form",
            width: 500,
            elements:[
                { rows:[
                        {
                            view:"text", 
                            label:"Название проекта",
                            id:"projectName", 
                            width: 400,
                            labelWidth: 150,
                            align : 'center',
                            attributes: {required: true}
                        },
                        {cols: [
                            {width: 34},
                            { 
                                view:"colorpicker", 
                                label:"Цвета проекта", 
                                labelWidth: 150,
                                width: 275,
                                name:"color",
                                value:"#ffdb5c" 
                            },
                            { 
                                view:"colorpicker", 
                                width: 125,
                                name:"color",
                                value:"#ffacac" 
                            }
                        ]},
                    {
                        view:"textarea", 
                        label:"Описание",
                        labelWidth: 150,
                        id:"projectDescription", 
                        width: 400,
                        height: 200,
                        align : 'center',
                    },
                    {
                        view:"combo", 
                        id:"teamlead", 
                        label:"Teamlead", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        options:["One", "Two", "Three"]
                    },
                    {cols: [
                        {width: 80},
                        {
                            view:"button", 
                            id:"addProjectBtn", 
                            value:"Создать",
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