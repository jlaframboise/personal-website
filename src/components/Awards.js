import React from "react";
import {Container, Row, Col} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media} from "reactstrap";

class Awards extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    {profile.awards.map(function (award, i){
                        moment.locale('en');

                        return (
                            <div key={i}>
                                <Media>
                                    <Media body>
                                        <Media heading>
                                            <h5 href={award.link}>{award.awardName}</h5>
                                        </Media>
                                            <h4>{award.issuer}</h4>
                                            
                                            <h3>{moment(award.date).format('MMM YYYY')}</h3>
                                            <p className="awardDesc">{award.description}</p>
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

export default Awards;