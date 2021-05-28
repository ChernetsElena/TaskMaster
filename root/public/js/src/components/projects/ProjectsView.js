
export default function ProjectsView(){
    return {
        cols:[
            {},
        {
            view:"dataview",
            width:1200,
            height:1200,
            xCount: 4,
            css: "movies",
            type:{
                width: 260,
                height: 350,
                template:"<div class='overall' style='background: linear-gradient(-45deg, #color_one#, #color_two#)'><div class='title'>#title#</div></br><div class='description'>#description#</div></br><div class='teamlead'>Teamlead: #teamlead#</div></div>"
            },
            data:[
                { id:1, title:"Название проектаНазвание проекта", description:"описа ниеописаниеопис аниеописаниеописан иеописание описаниеопис аниеописаниеописаниеописаниеописаниеописаниеописание", teamlead:"Иванов Иван", color_one: "", color_two: ""},
                { id:2, title:"Название проекта", description:"описаниеописаниеописаниеописаниеописаниеописание", teamlead:"Иванов Иван", color_one: "yellow", color_two: "orange"},
                { id:3, title:"Название проектаНазвание проектаНазвание проекта", description:"описание", teamlead:"Иванов Иван", color_one: "orange", color_two: "green"},
                { id:4, title:"Название проектаНазвание проекта", description:"описаниеописаниеописание", teamlead:"Иванов Иван", color_one: "blue", color_two: "green"},
                { id:5, title:"Название проекта", description:"описание", teamlead:"Иванов Иван", color_one: "red", color_two: "green"},
                { id:6, title:"Название проекта", description:"описание", teamlead:"Иванов Иван", color_one: "green", color_two: "green"},
                { id:7, title:"Название проекта", description:"описаниеописаниеописаниеописание", teamlead:"Иванов Иван", color_one: "white", color_two: "green"},
                { id:8, title:"Название проектаНазвание проекта", description:"описаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописание", teamlead:"Иванов Иван", color_one: "red", color_two: "green"},
                { id:9, title:"Название проекта", description:"описаниеописаниеописаниеописаниеописаниеописание", teamlead:"Иванов Иван", color_one: "yellow", color_two: "orange"},
                { id:10, title:"Название проектаНазвание проектаНазвание проекта", description:"описание", teamlead:"Иванов Иван", color_one: "orange", color_two: "green"},
                { id:11, title:"Название проектаНазвание проекта", description:"описаниеописаниеописание", teamlead:"Иванов Иван", color_one: "blue", color_two: "green"},
                { id:12, title:"Название проекта", description:"описание", teamlead:"Иванов Иван", color_one: "red", color_two: "green"},
                { id:13, title:"Название проекта", description:"описание", teamlead:"Иванов Иван", color_one: "green", color_two: "green"},
                { id:14, title:"Название проекта", description:"описаниеописаниеописаниеописание", teamlead:"Иванов Иван", color_one: "white", color_two: "green"}
            ]
        },
        {}   
    ],
    css: {"background": "white"},
}
}