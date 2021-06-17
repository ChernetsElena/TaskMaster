export const dataTasks= [
    {"id":"1", "projectID":"1", "status": "0", "name":"Task1", "description":"Description1", "performer": "", "urgently":"0", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"2", "projectID":"2", "status": "1", "name":"Task2", "description":"Description2", "performer": "2", "urgently":"1", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"3", "projectID":"1", "status": "2", "name":"Task3", "description":"Description3", "performer": "1", "urgently":"2", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"4", "projectID":"2", "status": "3", "name":"Task4", "description":"Description4", "performer": "1", "urgently":"0", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"5", "projectID":"1", "status": "4", "name":"Task5", "description":"Description5", "performer": "2", "urgently":"1", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"6", "projectID":"2", "status": "5", "name":"Task6", "description":"Description6", "performer": "1", "urgently":"2", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"7", "projectID":"3", "status": "0", "name":"Task1", "description":"Description1", "performer": "", "urgently":"0", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"8", "projectID":"4", "status": "1", "name":"Task2", "description":"Description2", "performer": "2", "urgently":"1", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"9", "projectID":"3", "status": "2", "name":"Task3", "description":"Description3", "performer": "2", "urgently":"2", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"10", "projectID":"4", "status": "3", "name":"Task4", "description":"Description4", "performer": "1", "urgently":"0", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"11", "projectID":"3", "status": "4", "name":"Task5", "description":"Description5", "performer": "2", "urgently":"1", "plan_time": "01:00", "fact_time": "01:30"},
    {"id":"12", "projectID":"4", "status": "5", "name":"Task6", "description":"Description6", "performer": "2", "urgently":"2", "plan_time": "01:00", "fact_time": "01:30"}
]

export const TASK_STATUS = [
    {"id": 0, "value": 'Новая'},
    {"id": 1, "value": 'Назначена'},
    {"id": 2, "value": 'В работе'},
    {"id": 3, "value": 'Пауза'},
    {"id": 4, "value": 'Согласование'},
    {"id": 5, "value": 'Решена'},
]

export const TASK_URGENTLY_COLOR = [
    { "id": 0, "value":"#aebaff" },
    { "id": 1, "value":"orange" }, 
    { "id": 2, "value":"#e23f0e" }
]

export const TASK_URGENTLY = [
    { "id": 0, "value":"Нормально" },
    { "id": 1, "value":"Срочно" }, 
    { "id": 2, "value":"Очень срочно" }
]