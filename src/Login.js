import React, { useState } from 'react';
import './Login.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser,  faLock,  faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF,  faTwitter,  faGoogle,  faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';

library.add(faUser, faLock, faEnvelope, faFacebookF, faTwitter, faGoogle, faLinkedinIn);

function Login() 
{
  
  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

    
  return (
    
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">

          <form action="#" className="sign-in-form">
            <h2 className="titleName">Sign in</h2>   {/* issue in changing the font color */}

              <div className="input-field">
                <FontAwesomeIcon icon="user" />
                <input type="text" placeholder="Username" />
              </div>
              
              <div className="input-field">
                <FontAwesomeIcon icon="lock" />
                <input type="password" placeholder="Password" />
              </div>

               <input type="submit" value="Login" className="btnsub" />  
               
               <p className="social-text">Or Sign in with social platforms</p>
               
               <div className="social-media">
                 <a href="https://www.facebook.com/" className="social-icon" id='fb'>
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
            
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin" className="social-icon" id='fb'>
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>

                <a href="https://gmail.com" className="social-icon" id='fb'>
                  <FontAwesomeIcon icon={['fab', 'google']} />
                </a>

                <a id='fb' href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin+login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062135&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlgP4i2ayCSPD--fQuZ131P8_hAqaP2p9zN9v_CqR3TYfP8awpqGxHsaArjlEALw_wcB&gclsrc=aw.ds&original_referer=https%3A%2F%2Fwww.google.com%2F" className="social-icon">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
              </div>
          </form>
        
        
          <form action="#" className="sign-up-form">
            <h2 className="titleName">Sign up</h2>{/* issue in changing the font color */}
              <div className="input-field">
                <FontAwesomeIcon icon="user" />
                <input type="text" placeholder="Username" />
              </div>
          
              <div className="input-field">
                <FontAwesomeIcon icon="envelope" />
                <input type="email" placeholder="Email" />
              </div>
          
              <div className="input-field">
                <FontAwesomeIcon icon="lock" />
                <input type="password" placeholder="Password" />
              </div>
              
              <input type="submit" className="btnsub" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              
              <div className="social-media">
                <a href="https://www.facebook.com/" className="social-icon" id='ln'>
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
            
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin" className="social-icon" id='ln'>
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>

                <a href="https://gmail.com" className="social-icon" id='ln'>
                  <FontAwesomeIcon icon={['fab', 'google']} />
                </a>
            
                <a id='ln' href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin+login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062135&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlgP4i2ayCSPD--fQuZ131P8_hAqaP2p9zN9v_CqR3TYfP8awpqGxHsaArjlEALw_wcB&gclsrc=aw.ds&original_referer=https%3A%2F%2Fwww.google.com%2F" className="social-icon">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
              </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
              <h3>New here ?</h3>
              <p>Welcome..! Register here and join with us.</p>
              <button onClick={handleSignUpClick} className="btnmain" id="sign-up-btn">
                Sign up
              </button>
          </div>        
        <img src="./img/login_img.png" className="image" alt="" />
      </div>

      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p> Login here and continue your upskilling journey </p>
          <button onClick={handleSignInClick} className="btnmain" id="sign-in-btn">
            Sign in
          </button>

        </div>
          <img src="./img/signup_img.png" className="image" alt="" />
        </div>

      </div>
    </div>
      
  )
}

export default Login;