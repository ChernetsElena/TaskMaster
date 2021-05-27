export default function ProjectsButtonView(){
    return {
        rows:[
            {
                view:"button", 
                id:"my_button", 
                value:"Новый проект",
                width: 150,
                align : 'center',
                css: {"background": ""}
            }
        ],
        css:{"background": "linear-gradient(45deg, #EECFBA, #C5DDE8)"},
        height: 100
    }
}