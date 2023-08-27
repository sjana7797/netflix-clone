import ReactPlayer from "react-player/youtube";

function YoutubePlayer({ videoId }: { videoId: string }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="100%"
        height="100%"
      />
    </div>
  );
}
