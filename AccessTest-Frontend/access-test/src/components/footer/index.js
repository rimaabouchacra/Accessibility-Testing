import React from "react";
import './index.css'
import logo2 from '../../images/logo2.png'
import fcb from '../../images/fcb.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
function Footer() {
  return (
    <footer className="footer">
        <img src={logo2} alt="website logo" />
        <div>
           <img src={fcb} alt="facebook icon" />
           <img src={insta} alt="instagram icon" />
           <img src={linkedin} alt="linkedin icon" />
        </div>
        <p>Copyright © 2023 AccessTest. All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;