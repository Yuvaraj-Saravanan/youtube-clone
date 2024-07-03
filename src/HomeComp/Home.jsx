import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

export default function Home(props){

    const [category,setCategory] = useState(0)
    
    return (
        <div className="home" style={{display:'flex'}}>
            <Sidebar 
                sidebarState = {props.sidebarState}
                setCategory = {setCategory}
                category = {category}
            />
            <Feed 
                sidebarState = {props.sidebarState}
                category = {category}
            />
        </div>
    )
}