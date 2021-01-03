import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const NavItems =(props)=>{
if(props.name==="Solutions")
{
    return(
        <div className="test">  
        <a className="text-black nav-link" href="/" style={{fontSize:"1.2rem",color:"black"}}>{props.name}</a> 
        </div>
    )
}
else{
    return(
        <div className="test">  
        <a className="text-black nav-link" href="/" style={{fontSize:"1.2rem",fontWeight:"bold"}}>{props.name}</a> 
        </div>
    )
}
}
export default NavItems;