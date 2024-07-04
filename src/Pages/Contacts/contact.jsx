
import React from "react";
import Navbar from "../../components/navbor/Navbar";
import Footer from "../../components/footer/footer";
import styled from './contact.module.css'


function Contact(){

    return (
        <div>
            <Navbar />
            <div className={styled.contactContainer}>
                <h1 className={styled.contactTitle}>Get in Touch</h1>
            <div className={styled.contactContent}>
            <div className={styled.contactInfo}>
                <h2 className={styled.contactSectionTitle}>Contact Information</h2>
                <p className={styled.contactDetail}>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:info@codeweekend.com">info@codeweekend.com</a>
                </p>
                <p className={styled.contactDetail}>
                    <i className="fas fa-phone"></i>
                    <a href="tel:+770000000">+1 7000000000</a>
                </p>
                <p className={styled.contactDetail}>
                    <i className="fas fa-map-marker-alt"></i>
                    123 Main Street, Anytown USA
                </p>
            </div>
            <div className={styled.contactForm}>
                <h2 className={styled.contactSectionTitle}>Send Us a Message</h2>
                <form>
                    <div className={styled.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styled.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styled.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className={styled.contactSubmit}>Send</button>
                </form>
            </div>
        </div>
        
        </div>

            <Footer />

        </div>

        )
}



export default Contact;