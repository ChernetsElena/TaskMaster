
export default function ToolbarView(){
    return {
        view: 'toolbar',
        css: 'toolbar',
        height: 60,
        cols: [
            {width: 50},
            {
                view:"button", 
                id:"userButton",
                type:"icon", 
                icon:"wxi-user",
                width: 50,
                height: 50,
                
            },
            {width: 10},
            {
                view:"button", 
                id:"employeesButton",
                 
                label:"Сотрудники",
                width: 150
            },
            {
                view: 'label',
                label: "<span class='label'>TaskMaster</span>",
                
            },
            // кнопка выхода
            {
                view: 'button',
                id: 'logoutBtn',
                css: 'webix_secondary',
                label: 'Выход',
                width: 150,
                height: 50
            },
            {width:50}
        ],
    }
}