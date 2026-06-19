import React from "react";

const VideoBackground = ({ videoSrc, children, className, overlayColor, overlayOpacity,fixed }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Video Background */}
      <video
        className= {`${fixed?"fixed":"absolute"} top-0 left-0 w-full h-full object-cover ${fixed?"scale-110":" "}`}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional Overlay */}
      {overlayColor && (
        <div
          className={`${fixed?"fixed":"absolute"} top-0 left-0 w-full h-full`}
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity || 0.5,
          }}
        ></div>
      )}
      {/* Wrapped Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default VideoBackground;
