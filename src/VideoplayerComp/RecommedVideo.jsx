import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import viewsCalc,{parseDuration} from "../sidebarEl";

export default function RecommendVideo(props){

    const videoTime = moment(props.time).fromNow()
    
    return (
        <Link to= {`/video/${props.category}/${props.id}`} className="recommend-video" style={{textDecorationLine:"none",color:"black"}}>
            <div className="thumb-time">
                <img src={props.thumbnail} className="Thumbnail"/>
                <p className="time">{parseDuration(props.duration)}</p>
            </div>
            <div className="vid-title">
                <p className="titel">{props.title}</p>
                <div className="channel-time">
                    <p>{props.channelName}</p>
                    <p>{viewsCalc(props.views)} views &bull; 
                        {videoTime=="a day ago" ? "1 day ago" : videoTime}
                    </p>
                </div>
            </div>
        </Link>
    )
}