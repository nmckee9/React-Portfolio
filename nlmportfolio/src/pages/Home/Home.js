import React from "react";
import Hero from "../../components/Hero/hero";
import Spacer from "../../components/Spacer/spacer";
import About from "../../components/About/about";
import Intro from "../../components/Intro/intro";
import Logo from "../../components/logo/logo";
import ProjectIntro from "../../components/ProjectIntro/projectinfo";

function Home() {
  return (
    <div>
        <Hero />
        <Intro />
        <Spacer />
        <About />
        <Spacer />
        <ProjectIntro />
    </div>
  );
}

export default Home;
