import React, { useEffect, useState } from "react";
import CommentSection from "./Comment_section";
import likeNF from "../assets/YT-like.png";
import likeF from "../assets/YT-likefilled.png";
import dislikeNF from "../assets/YT-dislike.png";
import dislikeF from "../assets/YT-dislikeFilled.png";
import share from "../assets/YT-share.png";
import viewsCalc from "../sidebarEl";
import { API_KEY_ComSec } from "../API_keys";

export default function VideoFrame(props) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [longDes, setLongDes] = useState(false);
  const [channelInfo, setChannelInfo] = useState(null);

  async function fetchChannel() {
    const channel_fetch_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.channelId}&key=${API_KEY_ComSec}`;
    const response = await fetch(channel_fetch_url);
    const data = await response.json();
    setChannelInfo(data.items[0]);
  }

  useEffect(() => {
    fetchChannel();
  }, [props.videoId, props.channelId]);

  function likeCalc(val) {
    if (val > 1000000) {
      return (val / 1000000).toFixed(1) + "M";
    } else if (val > 100000) {
      return (val / 100000).toFixed(1) + "L";
    } else if (val > 1000) {
      return (val / 1000).toFixed(1) + "K";
    } else {
      return val;
    }
  }

  function descriptionChanger() {
    if (!longDes) {
      const descriptWordCount = props.description.split(" ");
      if (descriptWordCount.length > 30) {
        return descriptWordCount.slice(0, 30).join(" "); // Use slice instead of splice
      } else {
        return props.description;
      }
    } else {
      return props.description;
    }
  }

  const likeImg = like ? likeF : likeNF;
  const dislikeImg = dislike ? dislikeF : dislikeNF;

  function flipLike() {
    setLike((prev) => !prev);
    if (dislike) {
      setLike(true);
      setDislike(false);
    }
  }

  function flipDisLike() {
    setDislike((prev) => !prev);
    if (like) {
      setLike(false);
      setDislike(true);
    }
  }

  function inform() {
    alert("This feature is not accessible");
  }

  return (
    <div className="frame-comment-section">
      <iframe
        className="video-frame"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className="Title">{props.title}</p>
      <div className="channel-interaction">
        <div className="channel">
          <img
            src={channelInfo ? channelInfo.snippet.thumbnails.high.url : ""}
            className="channel-Logo"
          />
          <div className="channel-Info">
            <div className="channel-Name">{props.channelName}</div>
            <div className="subscriber-count">
              {channelInfo
                ? viewsCalc(channelInfo.statistics.subscriberCount)
                : ""}{" "}
              Subscribers
            </div>
          </div>
        </div>
        <button className="subscribe-btn" onClick={inform}>
          Subscribe
        </button>
        <div className="like-dislike">
          <label
            htmlFor="like"
            className="likeData"
            onClick={() => {
              flipLike();
            }}
          >
            <img src={likeImg} id="like" />
            {likeCalc(props.likesCount)}
          </label>
          <div
            className="dislike-btn"
            onClick={() => {
              flipDisLike();
            }}
          >
            <img src={dislikeImg} />
          </div>
        </div>
        <div className="share" onClick={inform}>
          <img src={share} />
          Share
        </div>
      </div>
      <div className="description">
        <div className="views-time">
          {props.views} views...{" "}
          {props.time === "a day ago" ? "1 day ago" : props.time} {/* Use strict equality check */}
        </div>
        <p className="descript">
          {descriptionChanger()}
          {props.description.split(" ").length > 100 && (
            <span onClick={() => setLongDes((prev) => !prev)}>
              {longDes ? "  Show less" : "...more"}
            </span>
          )}
        </p>
      </div>
      <CommentSection
        commentsCount={props.commentsCount}
        videoId={props.videoId}
      />
    </div>
  );
}
