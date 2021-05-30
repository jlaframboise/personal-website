import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import profile from "../profile";
import './timeline.css'
import Sort from './Sort'

const images = require.context('../../public/images', true)

const Timeline = () =>{
    

    return (
        <VerticalTimeline>
            <Sort by="date">
                {/* Jobs */}
                {profile.experiences.map((job)=>{
                    const imagePath = job.logo_small ? "./" + job.logo_small : "./" + job.logo;
                    const logo = images(imagePath)
                    return (
                        job.roles.map((role)=>{
                            return (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                                    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    startDate={role.startDate}
                                    endDate={role.endDate}
                                    date={role.startDate + " - " + role.endDate}
                                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                                    icon={<img src={logo} alt="Role logo" className="timeline-icon"></img>}

                                >
                                    <h3 className="vertical-timeline-element-title">{role.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle" ><a href={job.url}>{job.companyName}</a></h4>
                                    <ul>
                                        {role.bullets ? role.bullets.map(function(bullet, i){
                                            return <li key={i}>{bullet}</li>
                                        }) : ""}
                                    </ul>
                                    {!role.bullets ? 
                                        <p className="jobDescription">
                                            {role.description}
                                        </p>  : ""
                                    }
                                </VerticalTimelineElement>
                            )
                        })
                    )
                    
                    
                })}
                {/* Projects */}
                {/* {data.map((item)=>{

                    return (
                        <VerticalTimelineElement
                            key={item.title}
                            date={item.date}
                            icon={logo}
                        >
                            <h5>{data.title}</h5>
                        </VerticalTimelineElement>
                    )
                })} */}
                {/* Awards */}
                {/* {data.map((item)=>{

                    return (
                        <VerticalTimelineElement
                            key={item.title}
                            date={item.date}
                            icon={logo}
                        >
                            <h5>{data.title}</h5>
                        </VerticalTimelineElement>
                    )
                })} */}
                {/* Educations */}
                {/* {data.map((item)=>{

                    return (
                        <VerticalTimelineElement
                            key={item.title}
                            date={item.date}
                            icon={logo}
                        >
                            <h5>{data.title}</h5>
                        </VerticalTimelineElement>
                    )
                })} */}

            </Sort>
            

        </VerticalTimeline>
    )
}

export default Timeline;