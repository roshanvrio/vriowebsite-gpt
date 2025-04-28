import React from "react";
import map from "../Assets/map.png";
import message from "../Assets/message.png";
import linkedin from "../Assets/linkedin.png";
import "./Footer.css"; // Import custom CSS if needed
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    window.scrollTo(0, 0);
     navigate('/join')
    }
  return (

    
    <footer className="footer py-4">
      <div className="container">
        <div className="row">


          <div className="col-3 mb-2">
          <span style={{display:'flex'}}><b>Follow Our Journey</b><br/></span>
          {/* <span className="linked" style={{color:'white'}}><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a></span>     */}
          <span className="linked" style={{color:'white'}}><a href="https://x.com/i/flow/login?lang=en" target="_blank"><i class="bi bi-twitter-x fa" aria-hidden="true"></i></a></span>    
          <span className="linked" style={{color:'white'}}><a href="https://youtu.be/FEZzJDK7nuI" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></span>
          <span className="linked" style={{color:'white'}}><a href="https://www.linkedin.com/company/vriodigital" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></span>
          </div>
          <div className="col-3 d-flex mb-2">
        
            
            <div className="col-10">
              <span className="address"><b>USA</b><br/> 300 N. Coit Road, Suite 1520 Richardson, Texas 75050</span>
             
            </div>
            <div class="col-1 v1"></div>
            
          </div>
          <div className="col-3 d-flex mb-2">
           
            
            <div className="col-10">
              <span className="address"><b>Canada</b><br/> 1595 Barrington St,Unit 1101, <br />Halifax, NS B3J 0J8</span>
             
            </div>
            <div class="col-1 v1"></div>
            
          </div>
          <div className="col-3 d-flex mb-2">
          
            
            <div className="col-12">
              <span className="address"><b>India</b><br/>Gopalan Global Axis, KIADB Industrial Area,<br/>Whitefield, Bengaluru, Karnataka 560066</span>
            </div>


          </div>
        </div>

       
      </div>
      
    </footer>
    
  );
};

export default Footer;
