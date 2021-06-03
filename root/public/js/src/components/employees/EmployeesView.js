export default function EmployeesView(){
    return {
        cols:[
                {width: 100},
                {
                    view:"datatable",
                    css: "employee_table",
                    hover: "hover_employee_table",
                    autoConfig:true,
                    
                    columns:[
                        { id: 'ID', header: ['', { content: 'textFilter' }], hidden: true },
                        { id: 'lastname', header: ['Фамилия', { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id: 'firstname', header: ['Имя', { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id: 'middlename', header: ['Отчество', { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id: 'position', header: ['Должность', { content:'selectFilter' }], sort: 'string', fillspace: true, },
                        { id:"email",   header:["E-mail", { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id:"birth",   header:["Дата рождения", { content: 'textFilter' }], sort: 'string', fillspace: true, },
                        { id:"edit", header: "", template:"{common.editIcon()}"},
                        { id:"trash", header: "", template:"{common.trashIcon()}"},

                        
                    ],
                    data:[
                        { ID:"1", lastname: "wetaetgae", firstname:"Rage", middlename:"greg", position: "lalala", email: "sdskjf@mail.ri", birth: 123321 },
                        { ID:"2", lastname: "wetaetgae", firstname:"Chalices", middlename:"greg",  position: "lala", email: "sdskjf@mail.ri", birth: 123321},
                        { ID:"3", lastname: "wetaetgae", firstname:"Look", middlename:"greg", position: "a", email: "sdskjf@mail.ri", birth: 123321 },
                        { ID:"4", lastname: "wetaetgae", firstname:"Look", middlename:"greg",  position: "lal", email: "sdskjf@mail.ri", birth: 123321 }
                    ]
                },
                {width: 100},
        ]  
    }
}