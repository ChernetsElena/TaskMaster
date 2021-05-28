export default function ProjectsButtonView(){
    return {
        rows:[
            {height: 30},
            {
                view:"button", 
                id:"my_button", 
                value:"Новый проект",
                width: 150,
                align : 'center',
            }
        ],
        css:{"background": "linear-gradient(45deg, #A3B1FF, #7388FF)"},
        height: 100
    }
}