export default function ProjectsWindowView(){
    let headText = 'Новый проект'
    
    return {
        view:"window",
        id:"projectWindow",
        position: "center",
        modal: true,
        head: {cols: [
                {
                    view: 'template',
                    id: 'projectWindowLabel',
                    css: 'webix_template',
                    template: headText,
                    borderless: true,
                    type:"header",
                    width: 320,
                },
                {
                    view: "button",
                    id: "projectWindowDeleteButton",
                    type: "icon",
                    icon: "wxi-trash",
                    width: 50,
    
                },
                {
                    view: "button",
                    id: "projectWindowUpdateButton",
                    type: "icon",
                    icon: "wxi-pencil",
                    width: 50,
    
                },
                {
                    view: "button",
                    id: "projectWindowCloseButton",
                    type: "icon",
                    icon: "wxi-close",
                    width: 50,
    
                }
            ]},
        body:{
            view:"form", 
            id:"formWindowProject",
            width: 500,
            elements:[
                { rows:[
                        {
                            view:"text", 
                            label:"Название проекта",
                            name: "name",
                            id:"formWindowProjectName", 
                            width: 400,
                            labelWidth: 150,
                            align : 'center',
                            attributes: {required: true}
                        },
                        {cols: [
                            {width: 34},
                            { 
                                view:"colorpicker", 
                                id: "formWindowProjectColorOne",
                                label:"Цвета проекта", 
                                labelWidth: 150,
                                width: 275,
                                name:"color_one",
                                value:"#ffdb5c" 
                            },
                            { 
                                view:"colorpicker", 
                                id: "formWindowProjectColorTwo",
                                width: 125,
                                name:"color_two",
                                value:"#ffacac" 
                            }
                        ]},
                    {
                        view:"textarea", 
                        label:"Описание",
                        name: "description",
                        labelWidth: 150,
                        id:"formWindowProjectDescription", 
                        width: 400,
                        height: 200,
                        align : 'center',
                    },
                    {
                        view:"combo", 
                        id:"formWindowProjecTeamlead", 
                        label:"Teamlead",
                        name: "teamlead", 
                        width: 400,
                        labelWidth: 150,
                        align : 'center',
                        options:["One", "Two", "Three"]
                    },
                    {cols: [
                        {},
                        {
                            view:"button", 
                            id:"addProjectBtn", 
                            value:"Создать",
                            width: 150,
                            align : 'center',
                            top: 20,
                            css: "webix_primary"
                        }, 
                        {},
                    ]} 
                ],
                
            },    
        ],
        rules:{
            "name":webix.rules.isNotEmpty,
            "description":webix.rules.isNotEmpty,
            "teamlead":webix.rules.isNotEmpty,
        },
        css:{"border-color":"orange"},
    }
    }
}