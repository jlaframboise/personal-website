import React from "react";
import {Container, Row, Col} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media} from "reactstrap";
import particlesOptions from "./particlesOptions"
import Particles from "react-tsparticles";
import '../App.css';

const images = require.context('../../public/images', true)


function showDuration(duration){
    if (duration<1){
        return ""
    }
        
    const years = parseInt(duration / 12);
    const months = duration - years*12; // (duration>12)? duration%12 : duration;

    const year_string = years > 0   ?   years + " year" + (years !== 1 ? "s": "")   :   ""
    const month_string = months > 0 ?   months + " month" + (months !== 1 ? "s": "") : ""
    const and_string = year_string!=="" & month_string!=="" ? " and " : ""

    return year_string + and_string + month_string;
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
            return Number(cnt) + Number(duration.asMonths().toFixed(0));
        }, 0);


        return (
            <div key={i}>
                <Media>
                    <Media left top className="job-img-div" href={experience.url}>
                        <Media object className="job-img" src={companyLogo} alt={experience.companyName}/>
                    </Media>
                    <Media body>
                        <Media heading>
                            <a href={experience.url}>{experience.companyName}</a>
                            <span className="jobTotalDuration">{showDuration(totalDuration)}</span>
                        </Media>

                        {experience.roles.map(function (role, i){
                            const startDate = moment(role.startDate);
                            const endDate = moment(role.currentJob ? new Date() : new Date(role.endDate));
                            
                            const duration = Number(moment.duration(endDate.diff(startDate)).asMonths().toFixed(0));
                            const duration_text = duration>0 ? "(" + showDuration(duration) + ")" : ""
                            return(
                                <div key={i}>
                                <h5>{role.title}</h5>
                                <span className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : endDate.format('MMM YYYY')} {duration_text}</span>
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
