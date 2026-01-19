import React from "react";
import MediaItem from "./MediaItem";

const MediaGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-1 pb-4 scrollbar-hide">
      <MediaItem large={true} src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" />
      <MediaItem src="https://images.unsplash.com/photo-1519076976366-0a0684df6445?q=80&w=400&auto=format&fit=crop" />
      <MediaItem src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop" />
      <MediaItem src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop" />
      <MediaItem src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop" />
      <MediaItem large={true} src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" />
    </div>
  );
};

export default MediaGrid;