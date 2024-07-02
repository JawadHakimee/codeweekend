import styled from './footer.module.css'
import React from 'react'





function footer(){
    return (
        <footer className={styled.footer}>
          <div className={styled.footerContent}>
            <div className={styled.footerSection}>
              <h3>About Us</h3>
              <p>We are a company that provides high-quality products and services.</p>
            </div>
            <div className={styled.footerSection}>
              <h3>Contact Us</h3>
              <ul>
                <li>Email: info@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Main Street, Anytown USA</li>
              </ul>
            </div>
            <div className={styled.footerSection}>
              <h3>Follow Us</h3>
              <div className={styled.socialIcons}>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styled.socialIcons}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styled.socialIcons}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styled.footerBottom}>
            <p>&copy; 2024 Example Company. All rights reserved.</p>
          </div>
          
        </footer>
      );
    };
    
export default footer;




