import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-o">
                <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum viverra torquent morbi vehicula euismod lobortis, semper lobortis per tempus primis proin sit vulputate, leo justo inceptos auctor dui egestas. id porttitor class dolor maecenas nisl volutpat semper dapibus elit non, vel id eleifend nullam augue fringilla est dui. nisl inceptos tortor a lectus per quisque nibh morbi litora, orci sem erat proin leo donec malesuada dictum, id ante congue felis nunc senectus sapien aliquam. lorem aenean morbi sed aenean platea justo elit vestibulum, sociosqu elit senectus ligula semper in ullamcorper gravida, hac nullam est lorem platea fusce velit. </p>
                </div>
                <div className="car-action great lighten-4 gray-text">
                    <div>Posted for the RentaKelly</div>
                    <div>30 Julho, 16h</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails