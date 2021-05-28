
export default function ApplicationView(Toolbar, Project, ProjectsButton){
    return {
        id: 'workedPlace',
        rows: [
            Toolbar.config(),
            {
                rows: [
                    Project.config(),
                    ProjectsButton.config()
                ]
            }

        ]
    }
}