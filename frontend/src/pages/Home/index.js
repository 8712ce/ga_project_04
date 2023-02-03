// PACKAGES //
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// IMAGES //
import logo from "../../assets/logo.jpg";

// STYLES //
import "./styles.css";


export default function Home({}) {
    return (
        <div className="body">
            <img className="drawing" src={ logo } alt="Drawing of zombie kid" width="75%"/>

            <p className="warning">WARNING: You will battle cute, cartoon zombie kids in this game.  Should you find this subject matter triggering, please do not go any further.  Otherwise, welcome to the year 2201...</p>
        </div>
    )
};