import React from 'react';
import profile from "../profile";
import particlesOptions from "./particlesOptions"
import {Jumbotron, Container} from 'reactstrap';
import Particles from "react-tsparticles";
import '../App.css';


const images = require.context("../../public/images", true)

class Home extends React.Component{

    constructor(props){
        super(props);

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
            <Container className="m-0 p-0">
                <Particles options={particlesOptions} className="particles-background"/>

                    
                <h1>Hello world</h1>
                
            </Container>
            
            
            // <Container>
            //     <Jumbotron>
            //             <Container>
            //                 <h1 className="display-3">{profile.title}</h1>
            //                 <p className="lead">{profile.summary}</p>
            //             </Container>
            //     </Jumbotron>
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