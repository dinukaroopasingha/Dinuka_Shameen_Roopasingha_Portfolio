import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className=" absolute  h-full w-full left-0 z-[1] object-cover bottom-0 m-0 p-0 scale-x-[-1]"
      >
        <source src="/clip.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
