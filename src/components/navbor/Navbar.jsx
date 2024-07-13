import styled from './test.module.css'
import { Link } from 'react-router-dom'


function Navbar(props){

    return (
        <div>
            <nav>
            <div className={styled.Container}>
                <ul className={styled.navMenu}>
                <h2>CodeWeekend Members 2024</h2>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            </nav>
        </div>

        )
}



export default Navbar;