import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            
            <Link to="https://www.linkedin.com/in/dylan-boger/">
                <img src={`https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png`} style={{height: '30px', width: '30px'}}/>
            </Link>
            <Link to="https://github.com/dylansql/Nightly">
            <img src={`https://cdn-icons-png.flaticon.com/512/25/25231.png`} style={{height: '30px', width: '30px'}}/>
            </Link>
        </div>
    )
}
