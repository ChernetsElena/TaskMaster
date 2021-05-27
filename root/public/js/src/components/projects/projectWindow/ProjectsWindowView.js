export default function ProjectsWindowView(){
    return {
        view:"popup",
        id:"popupAddProject",
        align: "center",
        body:{
            view:"form", 
            id:"log_form",
            elements:[
                { rows:[
                    {cols: [
                        {
                            view:"text", 
                            label:"Название проекта",
                            id:"projectName", 
                            width: 400,
                            labelPosition: "top",
                            align : 'center',
                            attributes: {required: true}
                        },
                        {rows: [
                            { 
                                view:"colorpicker", 
                                label:"Цвета проекта", 
                                labelPosition: "top",
                                width: 150,
                                name:"color",
                                value:"#ffdb5c" 
                            },
                            { 
                                view:"colorpicker", 
                                width: 150,
                                name:"color",
                                value:"#ffacac" 
                            }
                        ]}
                    ]},
                    {
                        view:"textarea", 
                        label:"Описание",
                        id:"projectDescription", 
                        width: 400,
                        height: 300,
                        labelPosition: "top",
                        align : 'center',
                    },
                    {
                        view:"combo", 
                        id:"teamlead", 
                        label:"Teamlead", 
                        width: 350,
                        align : 'center',
                        labelPosition: "top", 
                        options:["One", "Two", "Three"]
                    },
                    {cols: [
                        {
                            view:"button", 
                            id:"addProjectBtn", 
                            value:"Создать",
                            width: 150,
                            align : 'center',
                            top: 20
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
                css:{"background": "linear-gradient(45deg, #EECFBA, #C5DDE8)"},
            },    
        ]
    }
    }
}