import React from 'react'

const ProjectMenu = ({project}) => {
    return (
        <div className="card z-depth-0 project-menu">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Postado por RentaKelly</p>
                    <p className="grey-text">30 Julho, 15h</p>
                </div>
        </div>
    )
}

export default ProjectMenu