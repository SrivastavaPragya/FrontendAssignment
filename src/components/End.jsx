import React from "react";

const End = () => {
  return (
    <div className="end-container">
      <div className="end-title">
        <h2>How It Works</h2>
        <h1>How is our tutoring service?</h1>
      </div>
      <div className="end-cards">
        <div className="end-card">
          <div className="end-icon" style={{ backgroundColor: "#8A2BE2" }}>
            {" "}
          </div>
          <h3>One On One Teaching</h3>
          <p>
            All of our special education experts have a degree in special
            education
          </p>
          <button className="readmore">Read More</button>
        </div>
        <div className="end-card">
          <div className="end-icon" style={{ backgroundColor: "#32CD32" }}>
            {" "}
          </div>
          <h3>24/7 Tutor Availability</h3>
          <p>
            24/7 tutor availability assured at MyGinau matched to your learning
            style
          </p>
          <button className="readmore">Read More</button>
        </div>
        <div className="end-card">
          <div className="end-icon" style={{ backgroundColor: "#FF69B4" }}>
            {" "}
          </div>
          <h3>Interactive Whiteboard</h3>
          <p>Our digital whiteboard equipped with audio-video-chat features</p>
          <button className="readmore">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default End;
