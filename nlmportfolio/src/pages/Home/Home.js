import React from "react";
import Hero from "../../components/Hero/hero";
import Spacer from "../../components/Spacer/spacer";
import About from "../../components/About/about";
import Icons from "../../components/Icons/icons";
import List from "../../components/List/list";
import ProjectIntro from "../../components/ProjectIntro/projectintro";

function Home() {
  return (
    <div>
      <Hero />
      <Spacer />
      <Icons />
      <List />
      <Spacer />
      <About />
      <Spacer />
      <ProjectIntro />
    </div>
  );
}

export default Home;
