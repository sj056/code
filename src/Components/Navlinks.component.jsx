import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavItems from './NavItems.component';
const Navlinks =()=>{
return(
    <div className="mr-auto navbar-nav" id="my-nav">
          <NavItems name="Why Vyorius ?"/>
          <NavItems name="Solutions"/>
          <NavItems name="Products"/>
          <NavItems name="Use Cases"/>
          <NavItems name="Team"/>
          <NavItems name="Partners"/>
          <NavItems name="Contact us"/>
    </div>  
)
}
export default Navlinks;