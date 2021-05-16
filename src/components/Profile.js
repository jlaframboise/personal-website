import React from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Experiences from './Experiences';
import Education from './Education';
import Projects from './Projects';
import profile from '../profile.json';
import Awards from './Awards';


class Profile extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab){
        if (this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }

    render(){
        
        return <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">{profile.title}</h1>
                    <p className="lead">{profile.summary}</p>
                </Container>
            </Jumbotron>

            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '1'})} onClick={() => {this.toggle('1');}}>
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={()=> {this.toggle('2');}}>
                            Education
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '3'})} onClick={()=> {this.toggle('3');}}>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '4'})} onClick={()=> {this.toggle('4');}}>
                            Awards
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Experiences/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Education/>
                    </TabPane>
                    <TabPane tabId="3">
                        <Projects/>
                    </TabPane>
                    <TabPane tabId="4">
                        <Awards/>
                    </TabPane>
                </TabContent>
            </Container>
        </div>
    }
}

export default Profile;
