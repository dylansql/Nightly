import '../Landing/Landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="landing">
            <div className='title-side'>
                <h1 id="title">Nightly</h1>
            </div>
                <div className="sub-title">
                    <p id="sub-title">Unique Sources for those who can't sleep</p>
                </div>
            <div className='seperate-color'>
            {/* <Link to="/posts"><button className="landing-button">Check our Sources</button></Link>  */}
            </div>
        </div>
    )
}
