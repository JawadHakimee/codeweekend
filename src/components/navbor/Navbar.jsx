import styled from './test.module.css'
import { Link } from 'react-router-dom'
export default function Navbar(props){

    return (
        <div>
            <nav>
            <div className={styled.Container}>
                <ul className={styled.navMenu}>
                <h2>Code Weekend Members 2024</h2>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="google.com">Services</a></li>
                    <li><a href="google.com">Contact</a></li>
                </ul>
            </div>
            </nav>
        </div>

        )
}
