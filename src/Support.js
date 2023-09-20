import './support.css';

import React, { useState, useEffect } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faGithub,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faGithub, faGoogle, faLinkedinIn);

function Support()
{

  const [focusedInput, setFocusedInput] = useState(null);

  function handleFocus(inputName) {
    setFocusedInput(inputName);
  }

  function handleBlur() {
    setFocusedInput(null);
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => handleFocus(input.name));
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => handleFocus(input.name));
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return(

    <div class="container">
            <span class="big-circle"></span>
            <img src="shape.png" class="square" alt="" />
            <div class="form">
              <div class="contact-info">
                <h3 class="title">About me</h3>
                <p class="text">
                  Hi..! we are the one who are developing this Mech-Geniee Bot.
                  Our main moto is to develop a bot which enhances mechanical engineers to design 
                  so efficiently.
                </p>
      
                <div class="info">
                  <div class="information">
                    <img src="./img/location.png" alt="" srcset="" class="icon" />  
                    <p>Hyderabad, TS, India</p>
                  </div>

                  <div class="information">
                    <img src="./img/email.png" alt="" srcset="" class="icon" />  
                    <p>sriram.jfsjd@gmail.com</p>
                  </div>

                  <div class="information">
                    <img src="./img/phone.png" alt="" srcset="" class="icon" />  
                    <p>7094896529</p>
                  </div>
                </div>
      
                <div class="social-media">
                  <p>Connect with us :</p> 

                  <div class="social-icons">
                    <a href="https://www.facebook.com/sriram.suka" className="social-icon" id='fb'>
                       <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>

                    <a href="https://github.com/SriramKannan04" className="social-icon" id='gh'>
                       <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>

                    <a href="https://instagram.com/sriram_mr.imperfect?igshid=MzRlODBiNWFlZA==" className="social-icon" id='gg'>
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </a>

                    <a href="https://www.linkedin.com/in/sriram-kannan-913458247/" className="social-icon" id='ln'>
                      <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                  </div>
                </div>
              </div>
      
              <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>
      
                <form action="index.html" autocomplete="off">
                  <h3 class="title">Contact us</h3>

             <div className={`input-container ${focusedInput === "name" ? "focus" : ""}`}>
              <input
                type="text"
                name="name"
                className="input"
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
              />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>


            <div className={`input-container ${focusedInput === "email" ? "focus" : ""}`}>
            <input
              type="email"
              name="email"
              className="input"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
            <label htmlFor="">Email</label>
            <span>Email</span>
          </div>

          <div className={`input-container ${focusedInput === "phone" ? "focus" : ""}`}>
            <input
              type="number"
              name="phone"
              className="input"
              onFocus={() => handleFocus("phone")}
              onBlur={handleBlur}
            />
            <label htmlFor="">Phone</label>
            <span>Phone</span>
          </div>

          <div className={`input-container textarea ${focusedInput === "message" ? "focus" : ""}`}>
            <textarea
              name="message"
              className="input"
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
            ></textarea>
            <label htmlFor="">Message</label>
            <span>Message</span>
          </div>   

                  <input type="submit" value="Send" class="btn" />
                </form>
              </div>
            </div>
          </div>

  );
}

export default Support;