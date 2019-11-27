import React from "react";
import {Container, Row, Col} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media} from "reactstrap";

class Projects extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    {profile.projects.map(function (project, i){
                        moment.locale('en');

                        return (
                            <div key={i}>
                                <Media>
                                    <Media left top href={project.url}>
                                        <Media object src={project.logo} alt={project.projectName}/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            <a href={project.url}>{project.projectName}</a>
                                        </Media>
                                            <h4>{project.role}</h4>
                                            <span className="projectOrg">{project.org}</span>
                                            <ul>
                                                {project.bullets ? project.bullets.map(function(bullet){
                                                    return <li>{bullet}</li>
                                                }) : ""}
                                            </ul>
                                            
                                            <p>{project.tools.join(', ')}</p>
                                            
                                            {!project.bullets ? 
                                                <p className="projectDescription">
                                                    {project.description}
                                                </p>  : ""}
                                </Media>
                                </Media>
                            </div>
                        );
                    })}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;