import React from "react";

const SketchfabEmbed2 = () => {
  return (
    <div class="sketchfab-embed-wrapper">
      {" "}
      <iframe
        title="marblemadness"
        frameborder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/d864f872cda34f23a2213956c489676b/embed?dnt=1"
        style={{ width: "100%", height: "500px" }}
      >
        {" "}
      </iframe>{" "}
      <p
        style={{
          fontSize: 13 + "px",
          fontWeight: "normal",
          margin: 5 + "px",
          color: "#4A4A4A",
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/marblemadness-d864f872cda34f23a2213956c489676b?utm_medium=embed&utm_campaign=share-popup&utm_content=d864f872cda34f23a2213956c489676b"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          {" "}
          Marble Madness{" "}
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/dahliamihalic?utm_medium=embed&utm_campaign=share-popup&utm_content=d864f872cda34f23a2213956c489676b"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          {" "}
          Dahlia{" "}
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d864f872cda34f23a2213956c489676b"
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

export default SketchfabEmbed2;
