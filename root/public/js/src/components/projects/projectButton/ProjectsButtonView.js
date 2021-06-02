export default function ProjectsButtonView(){
    return {
        rows:[
            {height: 30},
            {
                view:"button", 
                id:"projectsAddButton", 
                value:"Новый проект",
                width: 200,
                height: 50,
                align : 'center',
            }
        ],
        css:{"background": "linear-gradient(45deg, #A3B1FF, #7388FF)"},
        height: 100
    }
}