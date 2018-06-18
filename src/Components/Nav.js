import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';


class Navi extends React.Component {


    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {

        return (

            <div>
                <Navbar color='light' light expand={'sm'}>
                    <NavbarBrand href="/">Logo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className='ml-sm-0 ml-md-4 ml-lg-4 ml-xl-4'>
                                <NavLink exact to={'/'} activeStyle={{color: 'red'}}>Home</NavLink>
                            </NavItem>
                            <NavItem className='ml-sm-0 ml-md-4 ml-lg-4 ml-xl-4'>
                                <NavLink to={'/about'} activeStyle={{fontWeight: 'bold'}}>About</NavLink>
                            </NavItem>
                            <NavItem className='ml-sm-0 ml-md-4 ml-lg-4 ml-xl-4'>
                                <NavLink to={'/experience'} activeStyle={{fontWeight: 'bold'}}>Experience</NavLink>
                            </NavItem>
                            <NavItem className='ml-sm-0 ml-md-4 ml-lg-4 ml-xl-4'>
                                <NavLink to={'/contact'} activeStyle={{fontWeight: 'bold'}}>Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Navi


//
// <ul>
// <li><NavLink exact to={'/'} activeStyle={{color: 'red'}}>Home</NavLink></li>
// <li><NavLink to={'/about'} activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
// <li><NavLink to={'/experience'} activeStyle={{fontWeight: 'bold'}}>Experience</NavLink></li>
// <li><NavLink to={'/contact'} activeStyle={{fontWeight: 'bold'}}>Contact</NavLink></li>
// </ul>