import Home from "./assets/YT-home.png"
import Gaming from "./assets/YT-gaming.png"
import News from './assets/YT-news.png'
import Movies from "./assets/YT-movies&tv.png"
import Trending from './assets/YT-trending.png'
import Music from "./assets/YT-music.png"
import Podcast from "./assets/YT-podcasts.png"
import Sports from "./assets/YT-sports.png"

export const sidebarElementsList = [
    {src:Home,Name:"Home",categoryID:0},
    {src:Gaming,Name:"Gaming",categoryID:20},
    {src:Music,Name:"Music",categoryID:10},
    {src:Podcast,Name:"Blogs",categoryID:22},
    {src:News,Name:"News",categoryID:25},
    {src:Sports,Name:"Sports",categoryID:17},
    {src:Movies,Name:"Comedy",categoryID:23},
    {src:Trending,Name:"Entertainment",categoryID:24},
]

export default function viewsCalc(val){
    if(val > 1000000){
        return (val/1000000).toFixed(2)+"M"
    }
    else if(val > 100000){
        return (val/100000).toFixed(2) + "lakhs"
    }
    else if(val > 1000){
        return Math.floor(val/1000)+"K"
    }
    else{
        return val
    }
}

export function parseDuration(duration) {

    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);
  
    const hours = matches[1] ? parseInt(matches[1]) : 0;
    const minutes = matches[2] ? parseInt(matches[2]) : 0;
    const seconds = matches[3] ? parseInt(matches[3]) : 0;

    let readableDuration = '';
    if (hours > 0) readableDuration += hours + ':';
    if (minutes > 0){
         readableDuration += `${hours>0 ? String(minutes).padStart(2,"0"): minutes}` + ':';
    }else readableDuration += "0:"
    if (seconds > 0 || (!hours && !minutes)){
        readableDuration += String(seconds).padStart(2,"0") + '';
    }else readableDuration += "00"

    return readableDuration.trim();
}