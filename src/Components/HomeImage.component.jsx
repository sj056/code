import React from "react";
import homeImage from './assets/homeimage.png'
import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeImage =()=>{
return(
   <div className="column">
       <img src={homeImage} alt="homeimage" className="image"/>
   </div>
)
}
export default HomeImage;