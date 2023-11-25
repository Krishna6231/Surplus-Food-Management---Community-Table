// HomeScreen.js

import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import FoodComponent from "./FoodComponent";
import './HomeScreen.css'; // Import the CSS file

function HomeScreen() {
    const history = useNavigate();

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "val")
            history('/');
        });
    };

    return (
        <div className="container">
            <div className="header">
                <h1>CommunityTable</h1>
                <button className="signout-button" onClick={handleClick}>SignOut</button>
            </div>
            <div className="content">
                <FoodComponent />
            </div>
        </div>
    );
}

export default HomeScreen;
