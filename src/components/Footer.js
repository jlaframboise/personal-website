import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <hr/>
                <Container>
                    <a href="https://www.linkedin.com/in/jacob-laframboise"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/jlaframboise"><FontAwesomeIcon icon={faGithub}/></a>
                </Container>
            </footer>
        )
    }
}

export default Footer;
