import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="navWrapper">
                <div className="navContainer">
                    <h1>Booking.com</h1>
                    <div className="navButtons">
                        <button type="button">Login</button>
                        <button type="button">Register</button>
                    </div>
                </div>
            </div>
            <div className="navLinkWrapper">
                <div className="navLinkContainer">
                    <div className="navLink active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="navLink">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="navLink">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="navLink">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="navLink">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
            </div>
            <header>
                <div className="headerContainer">
                    <div>
                        <h1>A lifetime of discount? It's Genius.</h1>
                        <div>Get rewarded for your travels - unlock instant savings of 10% or more with a free booking account.</div>
                        <button>Sign in / Register</button>
                    </div>
                </div>
            </header>
        </nav>
    )
}

export default Navbar