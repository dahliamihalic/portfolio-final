import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import React from "react";
import style from "../styles/currentworks.module.css";
import FadeIn from "../components/FadeIn";

const CurrentWorks = () => {
  return (
    <>
      <FadeIn duration={1000} delay={100}>
        <Wrapper>
          <h1>Current Works - As of Apr. 2026</h1>
          <p>
            This page is a collection of projects I have recently completed, or
            am in the process of completing.
          </p>
        </Wrapper>
        <Wrapper>
          <h2>D3 - Spotify Data Visualization</h2>
          <p>Under Construction (Nov/Dec. 2025). Check Back Soon.</p>
          <p>
            <strong>Tools Used: </strong> Visual Studio Code, React+Vite,
            Python, Excel, HTML, CSS.{" "}
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Paradigm 411 - Solution Architect</h2>
          <p>
            Capstone project with the goal of providing a brand redesign for a
            team within Microsoft. <br />
            Expected Completion: Apr. 2026. Details will follow.
          </p>
          <p>
            <strong>Tools Used: </strong> Figma, Canva, Microsoft 365 Suite,
            Sharepoint, HTML, CSS, Javascript
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Personal Website</h2>
          <p>
            I am currently working on an early 2000's style personal website,
            but it is more of a fun passion project than anything professional.
          </p>
          <p>
            <strong>Tools Used: </strong> Visual Studio Code, HTML, CSS,
            JavaScript.{" "}
          </p>
        </Wrapper>
      </FadeIn>
    </>
  );
};
export default CurrentWorks;
