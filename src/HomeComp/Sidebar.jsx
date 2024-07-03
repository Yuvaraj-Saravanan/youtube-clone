import React from "react";
import {sidebarElementsList} from "../sidebarEl";
import { Link } from "react-router-dom";
import "./Sidebar.css"
 
export default function Sidebar({sidebarState,category,setCategory}){
 
    const sidebarElements = sidebarElementsList.map((element,index)=>{
        return <Link to="/" key={index} 
                        className={`sidebar-link ${category == element.categoryID ? "active" : ""}`}
                        onClick={()=>setCategory(element.categoryID)}
                        style={{textDecorationLine:"none"}}>
                    <img src={element.src} className="sidebar-icons"/>
                    <p className="sidebar-element">
                        {element.Name}
                    </p>
                </Link>
    })
 
    return (
        <div className={`side-bar ${sidebarState ? "" : "sm"}`}>
            <div className="side-bar-main">
                {sidebarElements}
            </div>
        </div>
    )
}