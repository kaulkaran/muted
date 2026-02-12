import React from "react";

const MediaItem = ({ src, large }) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
        large ? "col-span-2 row-span-1 h-40" : "col-span-1 h-32"
      }`}
    >
      <img
        src={src}
        alt="Media"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default MediaItem;
