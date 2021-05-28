
export default function EmployeesButtonView(){
    return {
        rows:[
            {},
            {cols:[
                {},
                {
                    view:"button", 
                    id:"employeeToProjectsBtn", 
                    label:"К проектам",
                    type: "icon",
                    icon: "wxi-angle-left",
                    width: 150,
                    css: "tasks_button_back"
                },
                {width: 280},
                {
                    view:"button", 
                    id:"employeeButtonAddBtn", 
                    value:"Добавить сотрудника",
                    width: 200,
                    height: 50,
                    css: "employee_button_new"
                },
                {},
                {},
                {} 
            ],
            },
            {}
        ],
        css:{"background": "linear-gradient(45deg, #A3B1FF, #7388FF)"},
        height: 100
    }
}