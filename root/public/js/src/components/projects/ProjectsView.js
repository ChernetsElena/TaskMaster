
export default function ProjectsView(){
    return {
        rows:[
            { 
                view:"search",
                id: "projectsSearch",
                placeholder:"Поиск по названию проекта...", 
                align: 'center',
                width:600 
            },
            {
                cols:[
                    {},
                {
                    view:"dataview",
                    id: "projectsDataview",
                    width:1400,
                    borderless:false,
                    xCount: 4,
                    css: "movies",
                    select: "true",
                    type:{
                        width: 260,
                        height: 330,
                        template:"<div class='overall' style='background: linear-gradient(-45deg, #color_one#, #color_two#)'><div class='title'>#name#</div></br><div class='description'>#description#</div></br><div class='teamlead'>Teamlead: #teamlead#</div></div>"
                    },
                    data:[]
                },
                {}   
            ],
            }
        ]
}
}