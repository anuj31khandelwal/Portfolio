import { Container } from "./styles";
import VinayakSingh from "../../assets/Anuj.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import javaIcon from "../../assets/java.png";
import springIcon from "../../assets/spring.png";
import sqlIcon from "../../assets/mysql-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
              Hi there! I'm Anuj, I am a final-year Bachelor of Technology (BTech) student specializing in Electronics & Communication Engineering at IIIT Bhopal, with a passion for software development and problem-solving. My technical expertise spans programming languages like C++, Java, and JavaScript, along with hands-on experience in web development frameworks such as React and Spring Boot. I have a solid understanding of SQL for effective data management and manipulation.
          </p>
          <p>
              As a competitive programmer, I hold a Specialist rating on Codeforces (Max. Rating: 1566) and am a 3-Star coder on CodeChef (Max. Rating: 1760). These experiences have enhanced my problem-solving abilities and strengthened my algorithmic thinking.
          </p>


        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I’ve applied my skills in real-world settings, including an internship as a Data Engineer at Book Premium Cabins, where I conducted an in-depth analysis of 30+ properties and optimized data acquisition processes. Additionally, I developed Salon-It, a full-stack web platform that allows users to book salon services across multiple locations, utilizing ReactJS, MySQL, and Spring Boot.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
         <p>I’m always eager to tackle new challenges and explore innovative solutions in software development. I am looking forward to opportunities where I can continue growing as a software developer and contribute to impactful projects.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={springIcon} alt="spring" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
                      <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                        <img src={sqlIcon} alt="Mysql" />
                      </ScrollAnimation>
               </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
