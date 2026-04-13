import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import SketchfabEmbed1 from "../components/SketchfabEmbed1";
import SketchfabEmbed2 from "../components/SketchfabEmbed2";
import style from "../styles/otherprojects.module.css";
import FadeIn from "../components/FadeIn";
const PastProjects = () => {
  return (
    <>
      <FadeIn duration={1000} delay={100}>
        <Wrapper>
          <h1>Other Projects</h1>
          <p>
            This section is for any relevant past projects, whether it be from
            my studies at Purdue or on my own personal time.
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Autodesk Maya - 3D Modeling</h2>
          <p>
            Part of my coursework at Purdue involved taking Intro to 3D
            Modeling. Here are some works I am proud to display.
          </p>
        </Wrapper>
        <Wrapper>
          <SketchfabEmbed1 />
          <p className={style.caption}>
            Fiddle Leaf Fig <br /> I modeled it after my cousin's houseplant. It
            is the work I am most proud of from a class I struggled in. This
            piece taught me that I love detailed work.
          </p>
        </Wrapper>
        <Wrapper>
          <SketchfabEmbed2 />
          <p className={style.caption}>
            Monaco Marble Madness <br /> a fictional marble track in the shape
            of the Circuit de Monaco. This was earlier in the course and I was
            struggling to find inspiration, but bringing in my passion for
            Formula 1 helped get my creativity flowing!
          </p>
        </Wrapper>
      </FadeIn>
    </>
  );
};
export default PastProjects;
