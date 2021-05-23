import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import profile from '../profile.json';
import '../App.css';



const images = require.context("../../public/images", true)

class Education extends React.Component{
    render(){
        return <Container>
            <Row>
                <Col>
                    {profile.studies.map(function (study, i){
                        return <Media key={i}>
                            <Media left top href={study.url}>
                                <Media object src = {images("./"+study.logo)} alt={study.institute}/>
                            </Media>
                            <Media body>
                                <Media heading>
                                    <a href={study.url}>{study.institute}</a>
                                </Media>
                                {
                                    [
                                        {
                                            "key": "Title",
                                            "value": study.title
                                        },
                                        {
                                            "key": "Graduation Year",
                                            "value": study.graduationYear
                                        },
                                        {
                                            "key": "Duration", 
                                            "value": study.durationInYears + " year(s)"
                                        },
                                        {
                                            "key": "GPA",
                                            "value": study.gpa
                                        }
                                    ].map(function (object, i){
                                        return <div key={i}>
                                            <Row>
                                                <Col className="formLabel">{object.key}:</Col>
                                            </Row>
                                            <Row>
                                                <Col>{object.value}</Col>
                                            </Row>
                                        </div>
                                    })
                                }
                            </Media>
                        </Media>
                    })}
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col>
                    <h4>Certifications</h4>
                    <hr/>
                    {profile.certifications.map(function (cert, i){
                        const verification = cert.verificationLink ? 
                        <Row>
                            <Col>
                                <a className="certificationLink" href={cert.verificationLink}>See certificate</a>
                            </Col>
                        </Row> : "";
                        return <Media key={i}>
                            <Media left top href={cert.url}>
                                <Media object src={images("./" + cert.logo)} alt = {cert.title}/>
                            </Media>
                            <Media body>
                                <Media heading>
                                    <a href={cert.url}>{cert.title}</a>
                                </Media>
                                <Row>
                                    <Col>{moment(cert.issueDate).format('MMM YYYY')} - {(cert.expiryDate) ? moment(cert.expiryDate).format('MMM YYYY') : "Present"}</Col>
                                </Row>
                                <Row>
                                    <Col>{cert.issuer}</Col>
                                </Row>
                                {verification}
                            </Media>
                        </Media>
                    })}
                </Col>
            </Row>
        </Container>
    }
}

export default Education;