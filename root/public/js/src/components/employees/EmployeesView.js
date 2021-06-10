export default function EmployeesView(){
    return {
        cols:[
                //{width: 100},
                {
                    view:"datatable",
                    id: "employeeDatatable",
                    css: "employee_table",
                    hover: "hover_employee_table",
                    autoConfig:true,
                    scroll: "xy",
                    
                    columns:[
                        { id: 'ID', header: ['', { content: 'textFilter' }], hidden: true },
                        { id: 'last_name', header: ['Фамилия', { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id: 'name', header: ['Имя', { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id: 'middle_name', header: ['Отчество', { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id: 'position', header: ['Должность', { content:'selectFilter' }], sort: 'string', fillspace: true, },
                        { id:"email",   header:["E-mail", { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id:"birth",   header:["Дата рождения", { content: 'textFilter' }], sort: 'string', fillspace: true, format:webix.Date.dateToStr("%Y-%m-%d")},
                        { id:"edit", header: "", template:"{common.editIcon()}"},
                        { id:"trash", header: "", template:"{common.trashIcon()}"},
                    ],
                    data:[]
                },
                //{width: 100},
        ]  
    }
}