import styled from './test.module.css'
export default function Navbar(props){

    return (
        <div>
            <nav>
            <div className={styled.Container}>
                <ul className={styled.navMenu}>
                <h2>Code Weekend Members 2024</h2>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            </nav>
        </div>

        )
}
