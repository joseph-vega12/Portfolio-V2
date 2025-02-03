import { useEffect, useRef } from "react";
import * as home from "../home/home.md";
import { gsap, SteppedEase, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SteppedEase, TextPlugin);

export default function Home() {
  const heading = useRef();
  const subheading = useRef();

  useGSAP(() => {
    // const timeline = gsap.timeline();
    // timeline.to(heading.current, {
    //   text: {
    //     value: home.frontmatter.title,
    //   },
    //   duration: 1,
    //   delay: 0.5,
    //   ease: "none",
    // });
    // timeline.to(subheading.current, {
    //   text: {
    //     value: home.frontmatter.subheading,
    //   },
    //   duration: 1,
    //   delay: 0.5,
    //   ease: "none",
    // });
  });

  return (
    <section className="home">
      <div className="grid-heading">
        <div className="top-content">
          <div className="left-avatar-box"></div>
          <div className="right-text">
            <h1 className="heading">
              {home.frontmatter.title}{" "}
              <span className="teal-color">{home.frontmatter.name}</span>
            </h1>
            <h3 className="subheading">{home.frontmatter.subheading}</h3>
          </div>
        </div>

        <div className="bottom-description">
          <p>{home.frontmatter.welcomeText}</p>
          <br />
          <p>{home.frontmatter.aboutText}</p>
        </div>
      </div>
      <div className="tabs">
        <h3>{home.frontmatter.pagesTitle}</h3>
        {home.frontmatter.pages.map(({ title, description }) => (
          <div className="tab">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
