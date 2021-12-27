import '../Landing/Landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {

    const spans = document.querySelectorAll('.word span');

            spans.forEach((span, idx) => {
            span.addEventListener('click', (e) => {
                e.target.classList.add('active');
            });
            span.addEventListener('animationend', (e) => {
                e.target.classList.remove('active');
            });
            
            // Initial animation
            setTimeout(() => {
                span.classList.add('active');
            }, 750 * (idx+1))
            });


    return (
        <div className="landing">
            <div className='title-side'>
                {/* <h1 id="title">Nightly</h1> */}
                <h3 class="fixed"></h3>
                    <div class="word">
                        <span id="title">N</span>
                        <span id="title">I</span>
                        <span id="title">G</span>
                        <span id="title">H</span>
                        <span id="title">T</span>
                        <span id="title">L</span>
                        <span id="title">Y</span>
                    </div>
            </div>
                <div className="sub-title">
                    <p id="sub-title">Unique Sources for those who can't sleep</p>
                </div>
            <div className='seperate-color'>
                <Link to="/posts"><button className="landing-button">Check our Sources</button></Link> 
            </div>
        </div>
    )
}
