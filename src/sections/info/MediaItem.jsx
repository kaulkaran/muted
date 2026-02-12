import React from "react";

const isVideoUrl = (url = "") =>
  /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(url);

const MediaItem = ({ src, large }) => {
  const video = isVideoUrl(src);

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
        large ? "col-span-2 row-span-1 h-40" : "col-span-1 h-32"
      }`}
    >
      {video ? (
        <video
          src={src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          preload="metadata"
          muted
          playsInline
          controls
        />
      ) : (
        <img
          src={src}
          alt="Media"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default MediaItem;
