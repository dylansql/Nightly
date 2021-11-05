import './Landing'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div>
            <h1>Nightly</h1>
            <p>Unique Sources for those who can't sleep</p>
            <Link to="posts"><button>Check our Sources</button></Link>
        </div>
    )
}
