import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import {Media} from "reactstrap";
import '../App.css';

const images = require.context('../../public/images', true)


const Paper = function(paper, i){
    moment.locale('en');
    const imagePath = "./" + paper.logo;
    // const imagePath = "./" + "3DSlicerLogo.png";
    const paperLogo = images(imagePath)

    return (
        <div key={i}>
        <Media>
            <Media className="paper-img-div" left top href={paper.url}>
                <Media object className="paper-img" src={paperLogo} alt={paper.paperTitle}/>
            </Media>
            <Media body>
                <Media heading>
                    <a href={paper.url}>{paper.paperTitle}</a>
                </Media>
                <h4>{paper.role}</h4>
                <p>{paper.authors.join(', ')}</p>
                <p>{paper.publisher + " - " + paper.location + " - " + paper.date}</p>
                

                {
                        paper.github ?
                        <Button href={paper.github}>GitHub</Button> :
                        ""
                    }
                
                {/* <p>{paper.tools.join(', ')}</p> */}
                
                {!paper.bullets ? 
                    <p className="paperDescription">
                        {paper.description}
                    </p>  : ""}

            </Media>
        </Media>
    </div>
    )
}

class Research extends React.Component{
    render(){

        window.scrollTo(0,0);

        return(
            <Container>
                <Row>
                    <Col>
                    {profile.research.map(Paper)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Research;