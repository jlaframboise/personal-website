import React from 'react';
import {Container, TabContent, TabPane} from 'reactstrap';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Projects from './components/Projects';
import Awards from './components/Awards';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import './App.css';
import Timeline from './components/Timeline';
import Home from './components/Home'

class App extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '0'
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
            <TopBar toggleTab={this.toggle}/>
            <Container className="m-3 p-3">
                {/* <Nav tabs>
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
                </Nav> */}
            

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="0">
                        <Home/>
                    </TabPane>
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
                    <TabPane tabId="5">
                        <Timeline/>
                    </TabPane>
                </TabContent>

            </Container>
            <Footer/>
        </div>
    }
}

export default App;
