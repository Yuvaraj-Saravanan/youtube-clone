import React, { useState ,useEffect } from 'react';
import { API_KEY } from '../API_keys';
import RecommendVideo from './RecommedVideo';

export default function Recommeded(props){

    const [recommended,setRecommended] = useState()

    function random(){
        const arr = [20,10,22,0]
        let random = Math.floor(Math.random()*3)
        return arr[random]
    }

    async function fetchRecomVid(){
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${random()}&key=${API_KEY}`
        await fetch(videoList_url).then(res=>res.json()).then(data=>setRecommended(data.items))
   }

   useEffect(()=>{
        fetchRecomVid()
    },[props.videoId])

   function recommendedVideos(){
    if(recommended){
        const vidRecommendation = recommended.map((item,index)=>{
            return(
                <RecommendVideo 
                    key = {index}
                    category={props.category}
                    id = {item.id}
                    thumbnail = {item.snippet.thumbnails.high.url}
                    duration = {item.contentDetails.duration}
                    title = {item.snippet.title}
                    channelName = {item.snippet.channelTitle}
                    views = {item.statistics.viewCount}
                    time = {item.snippet.publishedAt}
                />
            )
        })
        return vidRecommendation
    }
   }

    return(
        <div className="recommened">
            {recommendedVideos()}
        </div>
    )
}