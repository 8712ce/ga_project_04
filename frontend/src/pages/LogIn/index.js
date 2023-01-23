import { logInToAccount } from "../../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// STYLES //
import "./login.css"

export default function LogIn(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        form: "logIn"
    })

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.id]: event.target.value })
    };

    // HANDLE SUBMIT FUNCTION FOR LOGIN AND SIGNUP FORMS //
    function handleSubmit(e) {
        e.preventDefault()
        logInToAccount(formData)
            .then((data) => {
                localStorage.token = data.token
                props.setIsLoggedIn(true)
                props.setUser(data.user)
            })
    };

    // REDIRECT TO A PAGE IF LOGGED IN //
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate("/createZombie")
        }
    }, [props.isLoggedIn])





    return (
        <div className="body">
            <h2 className="main_text">Log In</h2>

            <div>
                <form onSubmit={handleSubmit} className="logInForm">

                        <label>Username:</label>
                        <input
                            type="text"
                            placeholder="User Name"
                            id="username"
                            onChange={handleChange}
                            value={formData.username}
                            required />



                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={handleChange}
                            value={formData.password}
                            required />

                    <button className="button is-danger" type="submit" onClick={(e) => handleSubmit(e, formData)}>Log In</button>

                </form>
            </div>
        </div>

    )
};