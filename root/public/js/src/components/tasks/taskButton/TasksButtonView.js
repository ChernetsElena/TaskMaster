export default function TaskButtonView(){
    return {
        rows:[
            {height:25},
            {cols:[
                {width:200},
                {
                    view:"button", 
                    id:"toProjectsBtn", 
                    value:"К проектам",
                    width: 150,
                    css: "tasks_button"
                },
                {width:320},
                {
                    view:"button", 
                    id:"newTaskBtn", 
                    value:"Новая задача",
                    width: 200,
                    height: 50,
                    css: "tasks_button"
                }, 
            ],
            },
        ],
        css:{"background": "linear-gradient(45deg, #A3B1FF, #7388FF)"},
        height: 100
    }
}