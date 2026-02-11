import React from "react";

const MessageItem = ({ text, time, isSender, type, media }) => {
  const formattedTime = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isMedia = type === "media" || !!media;

  const mediaObj = typeof media === "object" ? media : null;
  const mediaUrl = mediaObj?.url || null;
  const mediaType = mediaObj?.type || null; // "image" | "video" | "file"
  const mediaFormat = mediaObj?.format || "";

  const isImage =
    !!mediaUrl &&
    (mediaType === "image" ||
      /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(mediaUrl));

  const isVideo =
    !!mediaUrl &&
    (mediaType === "video" || /\.(mp4|webm|ogg|mov|m4v)$/i.test(mediaUrl));

  const isPDF =
    !!mediaUrl &&
    (mediaFormat?.toLowerCase() === "pdf" || /\.pdf(\?|$)/i.test(mediaUrl));

  // Full-res download for Cloudinary images
  const cloudinaryImageDownloadUrl =
    isImage && mediaUrl.includes("/image/upload/")
      ? mediaUrl.replace("/image/upload/", "/image/upload/fl_attachment/")
      : mediaUrl;

  // Nice file name fallback
  const fileLabel = isPDF ? "PDF Document" : `Attachment (${mediaType || "file"} ${mediaFormat})`;

  return (
    <div className={`flex w-full mb-2 ${isSender ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[70%] px-4 py-2 text-sm rounded-2xl relative shadow-sm
          ${isSender
            ? "bg-[rgb(var(--primary))] text-white rounded-br-sm"
            : "bg-white text-[#141415] border border-black/5 rounded-bl-sm"}
        `}
      >
        {/* ✅ MEDIA */}
        {isMedia && mediaUrl ? (
          <div className="mb-1">
            {/* IMAGE */}
            {isImage && (
              <>
                <img
                  src={mediaUrl}
                  alt="attachment"
                  className="max-w-full rounded-xl"
                  loading="lazy"
                  onError={() => console.error("❌ Image failed to load:", mediaUrl)}
                />

                <div className="mt-2 flex justify-end">
                  <a
                    href={cloudinaryImageDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className={`text-xs font-semibold underline ${
                      isSender ? "text-white/90" : "text-[rgb(var(--primary))]"
                    }`}
                  >
                    Download
                  </a>
                </div>
              </>
            )}

            {/* VIDEO */}
            {isVideo && (
              <video
                src={mediaUrl}
                className="max-w-full rounded-xl"
                controls
                playsInline
                preload="metadata"
                onError={() => console.error("❌ Video failed to load:", mediaUrl)}
              />
            )}

            {/* PDF */}
            {isPDF && (
              <div className="rounded-xl overflow-hidden border border-black/10 bg-white">
                {/* Preview (works if browser allows PDF) */}
                <iframe
                  title="pdf-preview"
                  src={mediaUrl}
                  className="w-full h-64"
                />
                <div className="p-2 flex items-center justify-between">
                  <span className="text-xs text-gray-600">{fileLabel}</span>
                  <a
                    href={mediaUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="text-xs font-semibold underline text-[rgb(var(--primary))]"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}

            {/* FILE (fallback) */}
            {!isImage && !isVideo && !isPDF && (
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs opacity-90">{fileLabel}</div>
                <a
                  href={mediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className={`text-xs font-semibold underline ${
                    isSender ? "text-white/90" : "text-[rgb(var(--primary))]"
                  }`}
                >
                  Download
                </a>
              </div>
            )}
          </div>
        ) : null}

        {/* ✅ TEXT */}
        {text ? <p className="mb-1">{text}</p> : null}

        {/* ✅ If media exists but no url */}
        {isMedia && !mediaUrl ? (
          <p className="text-xs opacity-80 mb-1">Attachment received (missing URL)</p>
        ) : null}

        <div className={`text-[10px] text-right ${isSender ? "text-white/70" : "text-gray-400"}`}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
