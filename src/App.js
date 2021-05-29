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

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '0',
            isOpen: false
        };
    }

    toggleTab(tab){
        if (this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }



    render(){
        
        return <div className="">
            <TopBar toggleTab={this.toggleTab}/>
            <Container className="my-auto d-flex justify-center " style={{justify: "center", minHeight: "80vh", width: "100vw"}} >
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
            

                <TabContent className="full-width my-auto" activeTab={this.state.activeTab} style={{align: "center"}}>
                    <TabPane tabId="0">
                        <Home toggleTab={this.toggleTab}/>
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
