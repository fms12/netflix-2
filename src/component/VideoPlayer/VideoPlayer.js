import React from 'react'

function VideoPlayer() {
  return (
    <div>
      <video
        src="https://d2a4ei7putoo8k.cloudfront.net/video.mp4"
        autoPlay={false}
        loop
        controls
      />
    </div>
  );
}

export default VideoPlayer