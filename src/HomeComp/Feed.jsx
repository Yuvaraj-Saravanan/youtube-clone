import React, { useEffect, useState } from "react";
import loading from "../assets/loading.png"
import VideoDisplay from "./videoDisplay";
import "./Feed.css"
import { API_KEY_ComSec} from "../API_keys";

export default function Feed({category,sidebarState}){

     const [data,setData] = useState([])

   async function fetchData(){
     try{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${category}&key=${API_KEY_ComSec}`
        await fetch(videoList_url)
        .then(res=>res.json()).then(data=>setData(data.items))
     }catch(error){
          console.log(error)
     }
   }

   useEffect(()=>{
          fetchData()
     },[category])

     const feedData = data.map((item,index)=>{
        return(
                <VideoDisplay 
                    categoryId={item.snippet.categoryId}
                    videoId = {item.id}
                    key = {index}
                    thumbnail={item.snippet.thumbnails.high.url}
                    channelLogo={item.snippet.channelId.url}
                    channelName = {item.snippet.channelTitle}
                    title = {item.snippet.title}
                    views = {item.statistics.viewCount}
                    time = {item.snippet.publishedAt}
                    channelId = {item.snippet.channelId}
                    duration = {item.contentDetails.duration}
                    />
        )
   })

   function loadingPage(){
     return (
          <div className="loadingPage">
               <img src={loading}/>
               <p>data forbidden 403</p>
          </div>
     )
   }

    const stylesForSidebar = {marginLeft:sidebarState ? "175px" : "50px"}

    return(
        <div className="feed" style={stylesForSidebar}>
               {data ? feedData : loadingPage() }
        </div>
    )
}
