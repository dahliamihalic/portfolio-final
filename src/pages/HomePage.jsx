import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import style from "../styles/homepage.module.css";
import seniorphoto from "../assets/senior-photo.jpg";
import camera from "../assets/camera.jpg";
import smirk from "../assets/IMG_2052.jpg";
import FadeIn from "../components/FadeIn";

const HomePage = () => {
  return (
    <Wrapper>
      <Wrapper>
        <div className={style.colBox}>
          <div className={style.col1}>
            <div className={style.head}>
              <FadeIn duration={2000} delay={250}>
                <h1>
                  Hi,
                  <FadeIn duration={2000} delay={750}>
                    I'm Dahlia Mihalic.
                  </FadeIn>
                </h1>
              </FadeIn>
            </div>
            <FadeIn duration={2000} delay={1250}>
              <p>
                I am a senior majoring in both Data Visualization and Web
                Programming & Design at Purdue University.
              </p>
              <p>
                This website serves as both a portfolio of my academic work and
                a dynamic resume, highlighting the skills I have acquired and
                continue to develop. With the ever-evolving nature of the
                technology industry, I am committed to continuous learning and
                growth.
              </p>
              <p>
                Use the navigation bar above to view my works, both past and
                present; and to get in touch!
              </p>
            </FadeIn>
          </div>
          <div className={style.imageContainer}>
            <FadeIn duration={1000} delay={1250}>
              <div className={style.col2}>
                <img
                  src={smirk}
                  alt="Smile"
                  className={style.homepagepicture}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};
export default HomePage;
