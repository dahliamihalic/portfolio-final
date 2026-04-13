import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import React from "react";
import style from "../styles/currentworks.module.css";
import FadeIn from "../components/FadeIn";

const Reviews = () => {
  return (
    <>
      <FadeIn duration={1000} delay={100}>
        <Wrapper>
          <h1>Reviews</h1>
          <p>
            This page is a collection of quotes from past teammates or managers
            at American Airlines on the Customer Profile and Preferences team
            (CPP). Their names are currently hidden until I gain their approval.
          </p>
          <p>
            <strong>My Role: </strong> Software Development Intern using Java,
            Springboot, HTML, CSS, JavaScript, IntelliJ, SoapUI, Github, and
            more.
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Team Lead - American Airlines</h2>
          <p>
            "It's been a real pleasure working with you this summer. As I've
            said before,{" "}
            <strong>
              you've truly impressed me.
              <br />
            </strong>{" "}
            Your
            <strong> thoughtfulness and dedication</strong> have made a
            significant impact.
            <br /> I have no doubt that you'll thrive in whatever you pursue
            next.
            Come back and visit us anytime. You'll be missed!"
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Manager - American Airlines</h2>
          <p>
            "CPP is so pleased with your{" "}
            <strong>passionate approach towards learning</strong> and being
            accountable to deliver assignments{" "}
            <strong>on time and with quality</strong>. You are top university
            talent and AA recruited you into its internship program to provide
            important development experience that can hopefully be used by you
            in the future as an AA IT engineer. Keep in touch!"
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Teammate - American Airlines</h2>
          <p>
            "Although I was only able to see you work for a short period, I am
            very impressed by your passion, focus and hard work!"
          </p>
          <p></p>
        </Wrapper>
      </FadeIn>
    </>
  );
};
export default Reviews;
