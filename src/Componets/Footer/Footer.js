import React from 'react';
import './Footer.css';



const footer={
    backgroundColor:'#3498DB ',
    width:'100%',
    color:'white',
    // height:'40vh',
    marginTop:'15px',
    // marginBottom:'10px'
    padding:'2%'
}


const Footer = () => {
    return (
      
            <div className="backgroudColor mt-4 p-2 bottom-margin footer ">
            <div className="row mx-4 mt-5 ">
                <div className="col-md-4">
                    <div>
                        <h4 style={{fontWeight:'bold'}}>RED-<span style={{color:'green'}}>ONION</span> </h4>
                        <span>Getting a car gives you the freedom to commute anywhere you need to</span>
                    </div>
                    <div>
                        <i class="fab fa-facebook icon"></i>
                        <i class="fab fa-twitter icon"></i>
                        <i class="fab fa-youtube icon"></i>
                        <i class="fab fa-linkedin icon"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h4>Useful Links</h4>
                      
                     <p>  <span> Premises</span></p>
                       <p> <span>FAQ's</span></p>
                       <p> <span>Appointment</span></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h4>Quick Contact</h4>
                        <div>
                          <p>
                               <i class="fas fa-map-marked-alt contact-icon"></i>
                             A108 Demo Street New York, NY 535022, United States
                             classicmotor@gmail.com
                                +1 234 567 8910
                                2021 © classicmoter. Design by Amit Hasan.</p>
                              <p>
                                <i class="fas fa-envelope-open-text contact-icon"></i>
                                    classicmotor@gmail.com
                                    </p>
                                <p>
                                <i class="fas fa-phone contact-icon"></i>
                                    +12345678910
                                    </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
        
    );
};

export default Footer;