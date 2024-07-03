import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../API_keys";
import moment from "moment";
import viewsCalc,{parseDuration} from "../sidebarEl";

export default function VideoDisplay(props){
    
    useEffect(()=>{
        fetchChannel()
    })

    const [channelLogo,setChannelLogo] = useState("")

    async function fetchChannel(){
        const channel_fetch_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.channelId}&key=${API_KEY}`
        await fetch(channel_fetch_url).then(res=>res.json())
        .then(data=>setChannelLogo(data.items[0].snippet.thumbnails.high.url))
    }

    const videoTime = moment(props.time).fromNow()

    return (
        <Link className="video-display" to= {`/video/${props.categoryId}/${props.videoId}`}
                style={{textDecorationLine:"none", color:"black"}} 
        >
            <div className="video-thumbnail">
                <img src={props.thumbnail} className="thumbnail"/>
                <span className="timestamp">{parseDuration(props.duration)}</span>
            </div>
            <div className="channel-info">
                <img src={channelLogo} className="channel-logo"/>
                <p className="video-title">{props.title}</p>
                <p className="channel-name">{props.channelName}</p>
                <p className="views-data">{viewsCalc(props.views)} views 
                    &bull; {videoTime=="a day ago" ? "1 day ago" : videoTime}
                </p>
            </div>
        </Link>
    )
}