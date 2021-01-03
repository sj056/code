import React from "react";
import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home =()=>{
return(
    <div className="column" >
     <h6 className="mainPageHeading">CONNECTING THE DISCONNECTED</h6>
     <h1 className="mainHeading" >
         <span className="orangeText">Vyorius&nbsp;</span>
         brings&nbsp; 
         <span className="textinSingleline">
             unmanned robots&nbsp;
             <span className="orangeText">together</span>
         </span>
         ,&nbsp;
         <br />
          wherever they are&nbsp;
     </h1>
     <p className="mainPageP">
     With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re Delivering.&nbsp;
     </p>
     <button type="button" id="homebutton" className="btn button1" >Try Vyorius</button>
     <button className="btn button2" id="homebuttonsec" >Learn More</button>
     <br/>
     <p className="deliveryLink">
         <span>
              Need to order a delivery? 
             <a href="/" className="link">
                 Get Started
             </a>
         </span>
     </p>
    </div>
)
}
export default Home;