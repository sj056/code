import React, { useState } from "react";
import logo from './assets/vyorius2.png'
import brandname from './assets/vyorius.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navlinks from './Navlinks.component';
import  './css/nav.css';

const Nav =()=>{
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

return(
    <nav className="navbar navbar-expand-md navbar-light fixed-top" id="navbar" >
        <a className="navbar-brand" href="/">
            <img src={logo} className="d-inline-block align-top img-responsive logoimage" id="logo" alt="React Bootstrap logo" />
            <img src={brandname} className="d-inline-block align-top img-responsive logoimage" id="brandname" alt="React Bootstrap logo" />
        </a>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar0" aria-controls="navbar0" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon"></span>
        </button>  
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar0" >
            <Navlinks/>
            <button className="btn menubutton" id="navbutton" >Launch Vyorius {'>'}</button>
        </div>
    </nav>
)
}
export default Nav;