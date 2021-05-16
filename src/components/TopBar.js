import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
// import profilePic from "../images/profilePic.jpg";
const images = require.context('../../public/images', true)

class TopBar extends React.Component{
    constructor(props){
        super(props);

        this.toggleTab = props.toggleTab;
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggle(tab){
        super.toggle(tab);
    }

    render(){
        return (
            <Navbar color="dark" dark expand="md" fixed='top'>
                <Container>
                    <NavbarBrand href="/">
                        <img src={images("./profilePic.jpg")} className="profile-pic" alt="Jacob Laframboise"></img>
                        <span>Jacob Laframboise</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={() => {this.toggleTab('1');}}>
                                    Experience
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {this.toggleTab('2');}}>
                                    Education
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {this.toggleTab('3');}}>
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {this.toggleTab('4');}}>
                                    Awards
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {this.toggleTab('5');}}>
                                    Timeline View
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default TopBar;