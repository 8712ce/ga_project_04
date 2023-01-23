// DEPENDENCIES //
import { useState, useEffect } from "react";
import { createUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

// STYLES //
import "./signUp.css"




export default function SignUp(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        location: ""
    })

    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.id]: event.target.value })
    }

    // HANDLE SUBMIT FUNCTION FOR LOGIN AND SIGNUP FORMS //
    function handleSubmit(event) {
        event.preventDefault()
        createUser(formData)
            .then((data) => {
                localStorage.token = data.token
                props.setIsLoggedIn(true)
            })
    }

    // REDIRECT TO DESIRED PAGE IF LOGGED IN //
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate("/createzombie")
        }
    }, [props.isLoggedIn])





    return (
        <div className="body">
            <h2 className="main_text">Sign Up</h2>
            <div>
                <form onSubmit={handleSubmit} className="signUpForm">

                        <label>User Name:</label>
                        <input
                            type="text" placeholder="User Name"
                            id="username"
                            onChange={handleChange}
                            value={formData.username}
                            required/>



                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={handleChange}
                            value={formData.password}
                            required/>



                        <label>Location:</label>
                        <input
                            type="text"
                            placeholder="Location"
                            id="location"
                            onChange={handleChange}
                            value={formData.location}
                            required/>

                    <button className="button is-danger" type="submit" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}