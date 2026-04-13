import React from "react";

const SketchfabEmbed1 = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Fiddle Leaf Fig"
        frameBorder="0"
        allowFullScreen
        mozallowFullScreen="true"
        webkitallowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/7689508dc9d9481c934a412255e8de67/embed?dnt=1"
        style={{ width: "100%", height: "500px" }}
      >
        {" "}
      </iframe>
      <p
        style={{
          fontSize: 13 + "px",
          fontWeight: "normal",
          margin: 5 + "px",
          color: "#4A4A4A",
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/fiddle-leaf-fig-7689508dc9d9481c934a412255e8de67?utm_medium=embed&utm_campaign=share-popup&utm_content=7689508dc9d9481c934a412255e8de67"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          {" "}
          Fiddle Leaf Fig{" "}
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/dahliamihalic?utm_medium=embed&utm_campaign=share-popup&utm_content=7689508dc9d9481c934a412255e8de67"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          {" "}
          Dahlia{" "}
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7689508dc9d9481c934a412255e8de67"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed1;
