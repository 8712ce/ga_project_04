import { Link } from "react-router-dom";
import { useStat, useEffect } from "react";

// COMPONENTS //
import EditZombie from "../../components/EditZombie";

// STYLES //
import "./styles.css";

// IMAGES //
import newBaby from "../../assets/new_baby.jpg";

export default function ShowZombie({ zombie, setZombie }) {

   

    return (
        <div className="body">
            <div>
                <h1 className="main_text">Congratulations, you have a baby named {zombie.name}!  Cherish this time because the years in the zombie apocalypse fly by.</h1>
            </div>
            
            <div>
                <img className="drawing" src={ newBaby } alt="Cute drawing of baby" width="75%"/>
            </div>

            <div className="component">
                <EditZombie zombie={zombie} setZombie={setZombie}/>
            </div>
        </div>
    )
}
