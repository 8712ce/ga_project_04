// DEPENDENCIES
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

// STYLES //
import "./footer.css"

// IMAGES //
import zombie_button_top from "../../assets/zombie_button_top.jpg"



export default function Footer(props) {

    // STATE: BUILD JSX ARRAY OF FOOTER ITEMS //
	const initialState = []
	const [footerItems, setFooterItems] = useState(initialState)
	const navigate = useNavigate()


	// ADD FOOTER ITEMS DEPENDING ON USER LOGIN STATUS //
	useEffect(() => {
		if (props.isLoggedIn) {
			setFooterItems(initialState.concat(
				<div key='1'>
					<Link className="foot_links" to="/" onClick={() => {
						props.setIsLoggedIn(false)
						localStorage.clear()
						props.setUser({})
					}}>Wake Up from this Nightmare</Link>
				</div>
			))
		} else {
			setFooterItems(initialState.concat([
				<div key='2'>
					<Link className="foot_links" to="/login">Log In</Link>
					{/* <Link href="/login" key='2'>Log In</Link> */}
					<Link className="foot_links" to="/signup">Sign Up</Link>
					{/* <Link href="/signup" key='3'>Sign Up</Link> */}
				</div>
			]))
		}
	}, [props.isLoggedIn])



    return (
        <div className="footer">
            {/* <Link to="/logout">Wake Up from this Nightmare</Link> */}

            <img src={zombie_button_top} alt="KinderZombie Logo" width="15%" />

            { footerItems }
            

            <p className="credit">A Site by 8712CE</p>
        </div>
    )
}