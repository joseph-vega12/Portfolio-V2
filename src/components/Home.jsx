import { useEffect, useRef } from "react";
import * as home from "../home/home.md";
import { gsap, SteppedEase, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SteppedEase, TextPlugin);

export default function Home() {
  const heading = useRef();
  const subheading = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.to(heading.current, {
      text: {
        value: home.frontmatter.title,
      },
      duration: 1,
      delay: 0.5,
      ease: "none",
    });

    timeline.to(subheading.current, {
      text: {
        value: home.frontmatter.subheading,
      },
      duration: 1,
      delay: 0.5,
      ease: "none",
    });
  });

  return (
    <section className="home">
      <div className="grid-heading">
        <h1 className="heading" ref={heading}></h1>
        <h3 className="subheading" ref={subheading}></h3>
      </div>
    </section>
  );
}
