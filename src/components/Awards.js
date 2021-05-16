import React from "react";
import {Container, Row, Col} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media, Toast, ToastHeader, ToastBody, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup} from "reactstrap";

class Awards extends React.Component{
    render(){
        return(
            <Container>
                    {profile.awards.map(function (award, i){
                        moment.locale('en');

                        return (
                            <div key={i}>
                                {/* <Media>
                                    <Media body>
                                        <Media heading>
                                            <h3 href={award.link}>{award.awardName}</h3>
                                        </Media>
                                            <h4>{award.issuer + " - " + moment(award.date).format('MMM YYYY')}</h4>
                                            <p className="awardDesc">{award.description}</p>
                                    </Media>
                                </Media> */}
                                <CardGroup>
                                    <Card className="m-3 p-3 shadow">
                                        <CardTitle tag="h3">{award.awardName}</CardTitle>
                                        <CardSubtitle tag="h5">{award.issuer + " - " + moment(award.date).format('MMM YYYY')}</CardSubtitle>
                                        <CardBody>{award.description}</CardBody>
                                    </Card>
                                </CardGroup>
                                {/* <Toast
                                    >
                                    <ToastHeader>
                                        <h3 href={award.link}>{award.awardName}</h3>
                                    </ToastHeader>
                                    <ToastBody>
                                            <h5>{award.issuer + " - " + moment(award.date).format('MMM YYYY')}</h5>
                                            <p className="awardDesc">{award.description}</p>
                                    </ToastBody>
                                </Toast> */}

                            </div>
                        );
                    })}
            </Container>
        )
    }
}

export default Awards;