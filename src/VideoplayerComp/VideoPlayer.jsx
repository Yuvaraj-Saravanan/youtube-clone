import React, { useEffect, useState } from "react";
import VideoFrame from "./VideoFrame";
import Recommeded from "./Recommend";
import "./VideoPlayer.css";
import moment from "moment";
import { useParams } from "react-router-dom";
import { API_KEY } from "../API_keys";

export default function VideoPlayer(){

    const {id,category} = useParams()

    const [vidDetails,setVidDetails] = useState(null)

    useEffect(()=>{fetchVidDetails()},[id])

    async function fetchVidDetails(){
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        setVidDetails(data.items[0])
    }

    return(
        vidDetails &&
        <div className="videoplayer">
            <VideoFrame 
                videoId = {id}
                channelName={vidDetails.snippet.channelTitle}
                channelId = {vidDetails.snippet.channelId}
                title = {vidDetails.snippet.title}
                views={vidDetails.statistics.viewCount}
                time = {moment(vidDetails.snippet.publishedAt).fromNow()}
                likesCount={vidDetails.statistics.likeCount}
                commentsCount ={vidDetails.statistics.commentCount}
                description = {vidDetails.snippet.description}
            />
            <Recommeded 
                category = {category}
                videoId = {id}
            />
        </div>
    )
}