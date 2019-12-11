import React, {useState} from 'react';
import { Sidenav, Icon, Nav } from 'rsuite';
import './SideNav.css'

const styles = {
    width: '20%',
};

const SideNav = () => {

    const [activeKey, setactiveKey] = useState('1');
    const [expanded, setExpanded] = useState(true);

    function handleChange(e){
        setactiveKey(e);
    }

    return (
        <div style={styles}>
            <Sidenav activeKey={activeKey} expanded={expanded} onSelect={handleChange} >
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" icon={<Icon icon="home" />} >
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="bolt" />}>
                            About Me
                        </Nav.Item>
                        <Nav.Item eventKey="3" icon={<Icon icon="briefcase" />}>
                            Projects
                        </Nav.Item>
                        <Nav.Item eventKey="4" icon={<Icon icon="envelope" />}>
                            Contact Me
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export default SideNav;