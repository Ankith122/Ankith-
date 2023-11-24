import React from 'react';
import '../css/Footer.css';
import InstagramIcon from '../images/InstagramIcon.png';
import FacebookIcon from '../images/FacebookIcon.png';
import TwitterIcon from '../images/TwitterIcon.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>K ANKITH SHENOY</p>
                <p>ankithshenoyk@gmail.com</p>
                <p>+91-8147091555</p>
                <div className="social-icons">
                    <a href="https://instagram.com/ankith_shenoyy?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter" />
                    </a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 ankith_shenoyy. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
