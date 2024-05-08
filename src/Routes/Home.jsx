import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Departments from "../components/Departments";
import OurTeam from "../components/OurTeam";
import Ads from "../components/Ads";
import OurPlans from "../components/OurPlans";
import MoveUpBtn from '../components/MoveUpBtn';

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Departments />
      <OurTeam />
      <Ads />
      <OurPlans/>
      <MoveUpBtn/>
      </div>
  );
};

export default Home;
