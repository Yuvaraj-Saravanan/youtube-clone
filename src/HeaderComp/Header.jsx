import React from "react";
import './Header.css'
import search from "../assets/YT-search.png"
import YTlogo from "../assets/a-YT-logo.png"
import menu from "../assets/YT-menu.png"
import profile from "../assets/profile.png"
import dots from "../assets/YT-3dots.png"
import mic from "../assets/YT-mic.png"
import { Link } from "react-router-dom";

export default function Header({sidebarMenuBtn}){

    function updateSidebar(){
        sidebarMenuBtn(prevState=>!prevState)
    }
    function informAvailability(){
        alert('This is feature is not accessible')
    }
    return(
        <div className="navbar-section">
            <div className="logo-section">
                    
                    <img src={menu} className="menu" onClick={updateSidebar}/>
                    <Link to="/"><img src={YTlogo} className="logo"/></Link>
            </div>
            <div className="search-container">
                <input type="text" className="search-box" placeholder="Search"/>
                <button className="search-btn">
                    <img src={search}/>
                </button>
                <img src={mic} className="voice-search" onClick={informAvailability} />
            </div>
            <div className="sign-in-section">
                    <img src={dots} className="dots" onClick={informAvailability}/>
                    <img src={profile} className="profile" onClick={informAvailability}/>
                <p className="sign-in-p" onClick={informAvailability}>sign-in</p>
            </div>
        </div>
    )
}