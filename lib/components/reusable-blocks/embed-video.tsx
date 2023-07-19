import React from "react";

export default function EmbedVideo(video: any) {
  const videoId = video.video.split("v=")[1].split("&")[0];
  return (
    <div className="flex embed-responsive embed-responsive-16by9 sm:h-[800px] h-[400px]">
      <iframe
        title="Embeds Page"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
}
