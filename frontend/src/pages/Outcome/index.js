import { Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// STYLES //
import "./styles.css";

// IMAGES //
import undeadDead from "../../assets/undead_dead.jpg";



export default function Outcome() {

    return (
        <div className="body">
            <h1 className="main_text">You are devestated when the laser hits its mark.  You collapse from the onset of insanity.  But don't be too sad.  Just have another baby in the zombie apocalypse!</h1>

            <img className="drawing" src={ undeadDead } alt="Parent Holding Zombie Kid in Arms" width="75%"/>
            
            <Link className="button is-danger" to="/createzombie">Have another Baby in the Zombie Apocalypse</Link>

            {/* <p>Feeling angry at the world for losing your family to zombies?  <Link to="/killZombies">Kill Some Zombies!</Link></p> */}

        </div>
    )
}
