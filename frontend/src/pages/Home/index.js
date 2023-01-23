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
        </div>
    )
};