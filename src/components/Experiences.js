import React, { useEffect } from "react";
import {Container, Row, Col} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media} from "reactstrap";
import particlesOptions from "./particlesOptions"
import Particles from "react-tsparticles";
import '../App.css';

const images = require.context('../../public/images', true)


function getDuration(duration){
    const years = parseInt(duration / 12);
    const months = (duration>12)? duration%12 : duration;
    return (years > 0? years + " year" + (years>1? "s": "") + " and ": "") + (months > 0 ? months + " month" + (months > 1? "s": "") : "");
};

const Experience = function(experience, i){
        // const images = require.context('../../public/images', true)
        const imagePath = "./" + experience.logo;
        const companyLogo = images(imagePath)
    
        moment.locale('en');

        const totalDuration = experience.roles.reduce(function (cnt, role){
            const startDate = moment(role.startDate);
            const timeEnd = moment(role.currentJob ? new Date(): new Date(role.endDate));
            const duration = moment.duration(timeEnd.diff(startDate));
            return Number(cnt) + Number(duration.asMonths().toPrecision(1)) +1;
        }, 0);


        return (
            <div key={i}>
                <Media>
                    <Media left top className="job-img-div" href={experience.url}>
                        <Media object className="job-img" src={companyLogo} alt={experience.companyName} alt={"images/" + experience.logo}/>
                    </Media>
                    <Media body>
                        <Media heading>
                            <a href={experience.url}>{experience.companyName}</a>
                            <span className="jobTotalDuration">{getDuration(totalDuration)}</span>
                        </Media>

                        {experience.roles.map(function (role, i){
                            const startDate = moment(role.startDate);
                            const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                            const duration = 1+ Number(moment.duration(timeEnd.diff(startDate)).asMonths().toPrecision(1));

                            return(
                                <div key={i}>
                                <h5>{role.title}</h5>
                                <span className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})</span>
                                <span className="jobLocation">{role.location}</span>

                                <ul>
                                    {role.bullets ? role.bullets.map(function(bullet, i){
                                        return <li key={i}>{bullet}</li>
                                    }) : ""}
                                </ul>
                                {!role.bullets ? 
                                    <p className="jobDescription">
                                        {role.description}
                                    </p>  : ""}
                                
                                </div>
                            )
                        })}
                    </Media>
                </Media>
            </div>
        );
    
}


class Experiences extends React.Component{
    
    

    render(){

        window.scrollTo(0,0);

        return(
            <Container>
                
                <Row>
                    <Col>
                    <Particles options={particlesOptions} className="particles-background"/>
                    {profile.experiences.map(function (experience, i){
                        return(Experience(experience, i))
                    })}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Experiences;
