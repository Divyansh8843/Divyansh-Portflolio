import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import ProfileImage from "../../../src/assets/images/Divyansh (1)-removebg-preview.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 *:not-first:"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl m:text-6xl font-bold text-white mb-2 leading-tight">
            Hi,I am
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Divyansh Agrawal
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={["Fullstack Developer", "Competitive Programmer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            <style jsx>{`
              .Typewriter__cursor {
                color: #8245ec !important;
              }
            `}</style>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed ">
            I am a Full Stack Developer with experience in the MERN stack and a
            strong interest in competitive programming. I enjoy learning new
            technologies and using them to build efficient and user-friendly web
            applications. I'm passionate about solving problems and creating
            solutions that help businesses grow.
          </p>
          <a
            href="https://drive.google.com/file/d/1Fxhy_6KTJ0So80FZlzzVPr8IN3u6iO3s/view?usp=drive_link "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 "
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7 )",
              boxShadow: " 0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download Resume
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-38 h-38 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
            tiltAngle={20}
            tiltAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionspeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImage}
              alt="Divyansh Agrawal"
              className="w-ful h-full rounded-full object-cover  drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
