import React from "react";
function PodcastContent() {
  return (
    <>
      <div className="smallContainer">
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-radio"></i>
          </div>
          <p>Radio</p>
        </div>
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-music"></i>
          </div>

          <p>Music</p>
        </div>
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-podcast"></i>
          </div>
          <p>Podcast</p>
        </div>
        <div className="small-container">
          <div className="icons">
            <i className="fa-solid fa-video"></i>
          </div>
          <p>Video</p>
        </div>
      </div>
    </>
  );
}
export default PodcastContent;