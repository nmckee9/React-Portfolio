import React from "react";
import Spacer from "../../components/Spacer/spacer";
import About from "../../components/About/about";
import ProjectIntro from "../../components/ProjectIntro/projectinfo";

function Home() {
  return (
    <div>
        <Spacer />
        <About />
        <Spacer />
        <ProjectIntro />
    </div>
  );
}

export default Home;
