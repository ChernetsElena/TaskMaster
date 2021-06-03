export class Task {
    constructor(
        id,
        project,  
        status,
        name, 
        description, 
        performer, 
        urgently,
        plan_time, 
        fact_time
    ){
        this.id = id,
        this.project = project,
        this.status = status
        this.name = name
        this.description = description
        this.performer = performer
        this.urgently = urgently
        this.plan_time = plan_time
        this.fact_time = fact_time
    }
}

// export let TASK_STATUS = {

// }