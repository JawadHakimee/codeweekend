import React from 'react'
import styled from './chart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Chart(props){


  return(
  
    <div className={styled.Chart}>
      <img alt='' src={props.article.imageUrl} />
      <h1>{props.article.name }</h1>
      <h3>{props.article.position}</h3>

      <div className={styled.socialIcons}>
        <a href={props.article.facebookUrl}  target="_blank" rel="noopener noreferrer" className={styled.socialIcons}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href={props.article.twitterUrl} target="_blank" rel="noopener noreferrer" className={styled.socialIcons}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={props.article.instagramUrl} target="_blank" rel="noopener noreferrer" className={styled.socialIcons}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      
    </div>

)

}

export default Chart;