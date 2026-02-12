import React from "react";
import MediaItem from "./MediaItem";
import { useSelector } from "react-redux";

const MediaGrid = () => {
  const mediaItems = useSelector((state) => state.media.items);

  if (!mediaItems.length) {
    return <div className="text-white/50 text-sm mt-6">No media shared yet.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-1 pb-4 scrollbar-hide">
      {mediaItems.map((item, i) => (
        <MediaItem key={item._id || i} src={item.url || item.secure_url} large={i % 5 === 0} />
      ))}
    </div>
  );
};

export default MediaGrid;
