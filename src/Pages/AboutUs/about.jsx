
import React from 'react'
import styled from './about.module.css'
import Navbar from '../../components/navbor/Navbar';


function About(){
    return(
      <div>
          <Navbar />
      
          <div className={styled.acwContainer}>
            
          <h1 className={styled.acwTitle}>Afghanistan Code Weekend Community</h1>
          <div className="acw-content">
            <div className="acw-about">
              <h2 className={styled.acwSectionTitle}>About the Community</h2>
              <p className={styled.acwDescription}>
                The Afghanistan Code Weekend community is a grassroots initiative started by a group of passionate developers, designers, and tech enthusiasts in Afghanistan. The goal of the community is to create a supportive and inclusive environment where people can learn, collaborate, and build innovative projects that contribute to the growth and development of the local tech ecosystem.
              </p>
            </div>
            <div className={styled.acwInitiativesList}>
              <h2 className={styled.acwSectionTitle}>Community Initiatives</h2>
              <ul className={styled.acwInitiativesList}>
                <li className={styled.acwInitiativeItem}>
                  <h3 className={styled.acwInitiativeTitle}>Coding Workshops</h3>
                  <p className={styled.acwInitiativeDescription}>
                    The community hosts regular hands-on coding workshops and tutorials, covering a wide range of topics such as web development, mobile app development, data analysis, and more. These workshops are designed to help participants of all skill levels improve their coding skills and learn new technologies.
                  </p>
                </li>
                <li className={styled.acwInitiativeItem}>
                  <h3 className={styled.acwSectionTitle}>Collaborative Project Development</h3>
                  <p className={styled.acwInitiativeDescription}>
                    The community encourages participants to work together on collaborative projects, where they can apply their skills, learn from each other, and create real-world solutions to local problems.
                  </p>
                </li>
                
              </ul>
            </div>
            <div className={styled.acwImpact}>
              <h2 className={styled.acwSectionTitle}>Community Impact</h2>
              <p className={styled.acwDescription}>
                The Afghanistan Code Weekend community has had a significant impact on the local tech ecosystem, helping to increase access to technology education and resources, foster a culture of collaboration and innovation, inspire and empower the next generation of Afghan developers and entrepreneurs, contribute to the development of technology-based solutions to local problems, and promote the growth and visibility of the Afghan tech community on a global scale.
              </p>
            </div>
            <div className={styled.acwGetInvolved}>
              <h2 className={styled.acwSectionTitle}>Get Involved</h2>
              <p className={styled.acwDescription}>
                If you're interested in getting involved with the Afghanistan Code Weekend community, there are several ways you can participate, such as attending events, volunteering as a mentor, collaborating on community projects, or supporting the community's initiatives.
              </p>
              <a href="google.com" className={styled.acwCta}>Learn More</a>
            </div>
          </div>
        </div>  
      </div>
    )
}
export default About;