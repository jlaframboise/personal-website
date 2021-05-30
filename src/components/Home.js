import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import particlesOptions from "./particlesOptions"
import Particles from "react-tsparticles";


import '../App.css';


const images = require.context("../../public/images", true)

class Home extends React.Component{

    constructor(props){
        super(props);
        this.toggleTab = props.toggleTab;
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main){
        console.log("parfticlesInitting");
        console.log(main);
    }

    particlesLoaded(container){
        console.log("Particles Loading")
        console.log(container);
    }

    render(){
        return(
            <Container fluid className="m-0 p-0">
                <Particles options={particlesOptions} className="particles-background"/>
                

                <Row className="align-items-center">
                    <Col className="">
                        <img className="rounded-circle" src={images("./profilePic.jpg")} alt="Jacob's headshot" width="100%"/>
                    </Col>
                    <Col className=" d-flex justify-content-center">
                        <h1>Hey, <br></br>I'm Jacob!</h1>
                    </Col>
                </Row>
                <hr></hr>

                <Row className=" d-flex justify-content-center text-center">
                    <Col>
                        <h2>A machine learning, data science, and software development enthusiast</h2>
                        <hr></hr>
                        <h2>Queen's University School of Computing</h2>
                    </Col>
                </Row>

                <hr></hr>

                <div className=" d-flex align-items-center justify-content-center flex-wrap">
                    <Button className="m-3" onClick = {() => this.toggleTab("1")}>
                        <h3>Experience</h3>
                        <p>Check out my work experience!</p>
                    </Button>
                    <Button className="m-3" onClick = {() => this.toggleTab("3")}>
                        <h3>Projects</h3>
                        <p>Check out my projects!</p>
                    </Button>
                    <Button className="m-3" onClick = {() => this.toggleTab("2")}>
                        <h3>Education</h3>
                        <p>Check out my education!</p>
                    </Button>
                    <Button className="m-3" onClick = {() => this.toggleTab("4")}>
                        <h3>Awards</h3>
                        <p>Check out my awards!</p>
                    </Button>

                </div>

                {/* <Row className="align-items-center">
                    <Col xs={{offset: 2, size: 8}}>
                        <h2>A machine learning, data science, and software development enthusiast</h2>
                        <hr></hr>
                        <h2>Student at Queen's Computing</h2>
                    </Col>
                </Row> */}
                    
                
            </Container>
            
            
            // <Container>
            //     <Jumbotron>
                //             <Container>
                //             <h1 className="display-3">{profile.title}</h1>
                //             <p className="lead">{profile.summary}</p>
                //         </Container>
                // </Jumbotron>
            //     <div
            //         style={{
            //             position: "absolute",
            //             top: 0,
            //             left: 0,
            //             width: "100%",
            //             height: "100%",
            //             backgroundSize: "cover",
            //             backgroundPosition: "50% 50%"
                
            //         }}>
                    
            //     </div>
            //     
            // </Container>
            
        )
    }

}



export default Home;