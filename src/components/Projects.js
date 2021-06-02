import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media} from "reactstrap";
import '../App.css';

const images = require.context('../../public/images', true)


const Project = function(project, i){
    moment.locale('en');
    const imagePath = "./" + project.logo;
    const projectLogo = images(imagePath)

    return (
        <div key={i}>
        <Media>
            <Media className="project-img-div" left top href={project.url}>
                <Media object className="project-img" src={projectLogo} alt={project.projectName}/>
            </Media>
            <Media body>
                <Media heading>
                    <a href={project.url}>{project.projectName}</a>
                </Media>
                <h4>{project.role}</h4>
                <span className="projectOrg">{project.org}</span>
                    
                <ul>
                    {project.bullets ? project.bullets.map(function(bullet, i){
                        return <li key={i}>{bullet}</li>
                    }) : ""}
                </ul>

                {
                        project.github ?
                        <Button href={project.github}>GitHub</Button> :
                        ""
                    }
                
                <p>{project.tools.join(', ')}</p>
                
                {!project.bullets ? 
                    <p className="projectDescription">
                        {project.description}
                    </p>  : ""}

            </Media>
        </Media>
    </div>
    )
}

class Projects extends React.Component{
    render(){

        window.scrollTo(0,0);

        return(
            <Container>
                <Row>
                    <Col>
                    {profile.projects.map(Project)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;