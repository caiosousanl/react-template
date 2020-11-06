import React from 'react';
import { 
    NavbarToggler, 
    NavbarBrand, 
    Nav,
    Navbar 
} from 'reactstrap';


export default function Header(props) {
    
    function handleClickToSidebar(e) {
        e.preventDefault();
        document.getElementById('main-wrapper').classList.toggle('toggled');
    }
    return(
        <header>
            <Navbar color="light" light>
                <NavbarBrand href="/">
                   <img src="C:\dsv\template-react-son\admin_template\src\logoSysEats.jpg" alt=""/>
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavbarToggler onClick={handleClickToSidebar}/>
                </Nav>
            </Navbar>
        </header>
    )
}
