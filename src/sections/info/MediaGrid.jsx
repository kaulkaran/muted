import React from "react";
import MediaItem from "./MediaItem";
import { useSelector } from "react-redux";

const MediaGrid = () => {
  const mediaItems = useSelector((state) => state.media.items);

  if (!mediaItems.length) {
    return <div className="text-white/50 text-sm mt-6">No media yet. Upload your first file 🚀</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 pr-1 pb-4">
      {mediaItems.map((item, i) => (
        <MediaItem
          key={item._id}
          src={item.url} // backend should return url
          large={i % 5 === 0}
        />
      ))}
    </div>
  );
};

export default MediaGrid;
