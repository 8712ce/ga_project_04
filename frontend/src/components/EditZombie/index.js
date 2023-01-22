// DEPENDENCIES //
import { updateOffspring } from '../../utils/api';
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// STYLES //
import "./editZombie.css"

export default function EditZombie({ zombie, setZombie }) {

    // STATE //
    const navigate = useNavigate()
    const { _id } = zombie



    function handleChange(event) {
        setZombie({ ...zombie, "age": event.target.value })
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateOffspring(zombie);
        await navigate("/chase");
    };


    return (
        <div>
            <form className="edit_form" onSubmit={handleSubmit}>
                    <label>How many years fly by?</label>
                        <select
                            id="age"
                            name="age"
                            type="number"
                            onChange={handleChange}
                            value={zombie.age}
                            required>
                                <option>...</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                        </select>

                <button className="button is-danger" type="submit">Age My Baby</button>
            </form>
        </div>
    )
};