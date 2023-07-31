import './pages-style.css/welcome-style.css'
import NextButton from '../Shared/Components/NextButton';
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="home-context">
            <div className="tulip-img">
                <img src="/tulip.png" alt="" />
            </div>

             <h1>Good day, lovelove!</h1>
             <p>I treasure the time we spend together and am glad for every second we have.</p>

            <div className="home-button">
                <button><Link to ="/home">Proceed to site</Link></button>
            </div>
        </div>
    )
}

export default Welcome;