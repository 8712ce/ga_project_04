import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";

// COMPONENTS //
import Weapon from "../../components/Weapon";

// IMAGES //
import defend from "../../assets/defend.jpg";

// STYLES //
import "./fight.css"



export default function Fight({ zombie, setZombie }) {

    return (
        <div className="body">
            <h1 className="main_text">Zombie {zombie.name} never tires from running!  Through tears, you look into their remaining, {zombie.eye_color} eye and raise your weapon...</h1>

            <img className="drawing" src={ defend } alt="Drawing of scary but cute zombie giving chase" width="75%"/>

            {/* <!-- Clicking this link should run a function with math.random() to determine whether the zombie was hit or missed. Also, if zombie was hit, direct usesr to /undeadDead.ejs.  If zombie was missed, direct user to /updatedOffspring.ejs. --> */}

            <Weapon zombie={zombie} setZombie={setZombie}/>
        </div>
    )
}
