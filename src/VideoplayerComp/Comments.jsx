import React,{useState} from "react";
import likeNF from "../assets/YT-like.png"
import likeF from "../assets/YT-likefilled.png"
import dislikeNF from "../assets/YT-dislike.png"
import dislikeF from "../assets/YT-dislikeFilled.png"

export default function Comments(props){

    const [comLike,setComLike] = useState(false)
    const [comdislike,setComDislike] = useState(false)

    const comLikeImg = comLike ? likeF : likeNF
    const comDislikeImg = comdislike? dislikeF : dislikeNF

    function flipLike(){
        setComLike(prev=>!prev)
       if(comdislike){
        setComLike(true)
        setComDislike(false)
       }
    }
    function flipDisLike(){
        setComDislike(prev=>!prev)
        if(comLike){
            setComLike(false)
            setComDislike(true)
        }
    }

    return (
        <div className="comments">
                <img src={props.userLogo} className="user-profile" />
                <div className="comment-user">
                    <div className="user">{props.username}</div>
                    <div className="user-comment">
                        <p>{props.comment}</p>
                        <div className="com-like-dislike">
                            <div className="com-like">
                                <img src={comLikeImg} onClick={flipLike}/>
                                    {props.likes==0 ? "" : props.likes}
                            </div>
                            <img src={comDislikeImg} onClick={flipDisLike}/>
                        </div>
                    </div>
                </div>
        </div> 
    )
}