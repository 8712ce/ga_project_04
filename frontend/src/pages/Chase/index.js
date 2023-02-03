// PACKAGES //
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// IMAGES //
import chase from "../../assets/chase.jpg";

// STYLES //
import "./chase.css"



export default function Chase({ zombie, user }) {
    const [zombieAge, setZombieAge] = useState(zombie.age)

    useEffect(() => {
        setZombieAge(zombie.age)
      }, [zombie])
    
    return (
        <div className="body">
            <h1 className="main_text">It's been {zombieAge} years, but tragically, {zombie.name} was bitten by a zombie!  Now zombie {zombie.name} is chasing you through the ruins of {user.location}!</h1>

            <div className="drawing">
                <img src={ chase } alt="Zombie Kid Chasing Parent" width="75%"/>
            </div>

            <h2>Should you use your neuro-blaster to liberate {zombie.name}’s consciousness to the cloud, or should you wake up from this nightmare?</h2>

            <Link className="button is-danger" to="/fight">Use my Neuro-Blaster</Link>

        </div>
    )
};