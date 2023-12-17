import React from 'react'
import "./Home.css"
import about from "../images/about_img.png"

function Home() {
  return (
    <div> 
    <div class="bgimage">
    <div class="main1">
   
     <ul><li><a href="#">WORKNET</a></li></ul>
     
    </div>
       <div class="main">      
       <ul>
         <li><a href="#"> HOME </a></li>
         <li><a href="#About_us"> ABOUT </a></li>
         <li><a href="#contact"> CONTACT US </a></li>
         <li><a href="/login"> LOGIN</a></li>
       </ul>
       </div>
       <div class="content">
         <h1>Tech way to make Life Easy</h1>
       </div>
       <div class="button">
         <a href="/register"class="btn">Want to work</a>
         <a href="/login"class="btn">Find worker</a>
       </div>  
   </div>
   <div class="container1" id="About_us">
   <div class="header"><h1>About Us</h1>

     <hr style={{height:"3px",borderWidth:"0",color:"#000",backgroundColor:"#000" ,width:"98%"}}/></div>
   
   <div class="about">
   
   <div class="about_img">
     <img src={about} alt="/"/>
   </div>
   <div class="about_content">

     <h2 style={{color:"#000"}}>WorkNet provides a connect between users and workers.
       It solves a real time problem of users.
       Increases job offers for domestic workers.
       Can search labourers in nearby location.</h2>
    </div>
   </div>
  </div>
  <div class="container2">
   <div class="header"><h1>Contact Us</h1>
   <hr style={{height:"3px",borderWidth:"0",color:"#000",backgroundColor:"#000" ,width:"98%"}}/></div>

   <div id= "contact" class="contact_box">
   <h2>Get in Touch</h2>
   <input type="text" name="email" placeholder="EMAIL"/>
   <textarea rows="4" cols="50" placeholder="MESSAGE">
    </textarea>
 </div> 
</div>
</div>

  )
}

export default Home