import React, { useRef } from "react";
import "./VideoPlay.css";
import video from "../../assests/Bg_v.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <section
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </section>
  );
};

export default VideoPlayer;
