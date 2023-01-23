// DEPENDENCIES //
import { createOffspring } from "../../utils/api";
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
// import ReactDOM from 'react-dom/client';

// STYLES //
import "./createZombie.css"

export default function CreateZombie({setZombie}) {

    // STATE //
    const [formState, setFormState] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        createOffspring(formState).then(data => {
            setZombie(data)
            navigate("/showZombie")
        });
    };

    function handleChange(event) {
        // console.log(event.target.id)
        // console.log(event.target.value)
        setFormState({ ...formState, [event.target.id]: event.target.value })
    };

    return (
        <div className="body">
            <div>
                <h1 className="main_text">So, you decided to have a baby during the zombie apocalypse?  Well, might as well make it a cute one.</h1>
            </div>

            <div id="offspring">
                <form onSubmit={handleSubmit} className="createForm">

                        <label>Baby's Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Baby's Name"
                            onChange={handleChange}
                            value={formState.name || ""}
                            required />



                        <label>Baby's Eye Color:</label>
                        <select
                        id="eye_color"
                        onChange={handleChange}
                        value={formState.eye_color}
                        required >
                            <option>Select a Color</option>

                            <option value="amber">Amber</option>

                            <option value="blue">Blue</option>

                            <option value="brown">Brown</option>

                            <option value="gray">Gray</option>

                            <option value="green">Green</option>

                            <option value="hazel">Hazel</option>
                        </select>



                        <label>Baby's Intelligence:</label>
                        <select
                            id="intelligence"
                            onChange={handleChange}
                            value={formState.intelligence}
                            required >
                                <option>Select an Intelligence Level</option>

                                <option value="Cognitively Delayed">Cognitively Delayed</option>

                                <option value="Within Typical Limits">Within Typical Limits</option>

                                <option value="Above Average">Above Average</option>
                        </select>



                        <label>Baby's Personality:</label>
                        <select
                            id="personality_type"
                            onChange={handleChange}
                            value={formState.personality_type}
                            required >
                                <option>Select a Personality</option>

                                <option value="Bruiser">Bruiser</option>

                                <option value="Close Talker">Close Talker</option>

                                <option value="Codependent">Codependent</option>

                                <option value="Cry Baby">Cry Baby</option>

                                <option value="Drama Queen">Drama Queen</option>

                                <option value="Disappointment to Family">Disappointment to Family</option>

                                <option value="Entitled">Entitled</option>

                                <option value="Extroverted">Extroverted</option>

                                <option value="Introverted">Introverted</option>

                                <option value="Narcissist">Narcissist</option>

                                <option value="Picky Eater">Picky Eater</option>

                                <option value="Selfish">Selfish</option>

                                <option value="Untrusting">Untrusting</option>
                        </select>

                    <button className="button is-danger" type="submit">Have a Baby in the Zombie Apocalypse</button>

                </form>
            </div>
        </div>

    )
}

