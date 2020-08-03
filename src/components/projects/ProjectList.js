import React from 'react'
import ProjectMenu from './ProjectMenu'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <ProjectMenu project={project} key={project.id} />
                )

            })}
        </div>
    )
}

export default ProjectList