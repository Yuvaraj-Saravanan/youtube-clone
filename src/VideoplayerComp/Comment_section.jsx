import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import viewsCalc from "../sidebarEl";
import { API_KEY_ComSec } from "../API_keys";
import { useParams } from "react-router-dom";

export default function CommentSection(props){

    const {id} = useParams()

    const [comments,setComments] = useState()

    async function fetchComments(){
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=22&videoId=${props.videoId}&key=${API_KEY_ComSec}`
        await fetch(url).then(res=>res.json()).then(data=>setComments(data.items))
    }

    useEffect(()=>{fetchComments()},[id])

    function displayComments(){
        if(comments){
        const userComments = comments.map((item,index)=>{
            return (
                <Comments
                    key = {index}
                    userLogo = {item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                    username = {item.snippet.topLevelComment.snippet.authorDisplayName}
                    comment = {item.snippet.topLevelComment.snippet.textOriginal}
                    likes = {item.snippet.topLevelComment.snippet.likeCount}
                />
            )
            })
            return userComments
        }else{
            return 
        }
    }

    const commentDisplay = comments ? displayComments() : "loading"


    return(
        <div className="comments-section">
                <p style={{fontWeight:"500"}}>{viewsCalc(props.commentsCount)} Comments</p>
                
                {commentDisplay}
            </div>
    )
}