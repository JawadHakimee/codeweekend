
import styled from './chart.module.css'

function Chart(props){


  return(
  
    <div className={styled.Chart}>
      <img alt='' src={props.article.imageUrl} />
      <h1>{props.article.name }</h1>
      <h3>{props.article.position}</h3>
      <div className={styled.socialIcons}>
                <a href={props.article.facebookUrl} className="social-icon">
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

)

}

export default Chart;