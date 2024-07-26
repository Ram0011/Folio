"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaPaperPlane } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="pb-20 pt-36" id="home">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />

                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.025] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>

                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest text-sm md:text-lg text-center text-blue-100 max-w-80">
                            {" "}
                            <TextGenerateEffect
                                words={`Hello  World!`}
                                className="uppercase tracking-widest text-lg md:text-2xl text-center text-blue-100 max-w-80"
                            />
                        </h2>
                        <h2 className="text-center tracking-wide text-4xl md:text-5xl lg:text-6xl mb-8 font-bold max-w-md md:max-w-3xl leading-snug">
                            I&apos;m Ramprakash Ramtekkar
                        </h2>

                        <p className="text-center text-base md:text-xl max-w-[90%] leading-[1.7rem] font-extralight">
                            I am a{" "}
                            <span className="text-purple">
                                Full Stack Developer,
                            </span>{" "}
                            with experience in React.js, Node.js, and MongoDB,
                            along with cross-platform app development using
                            React Native.
                        </p>
                        <Link
                            href={"https://ramprakash-resume.tiiny.site/"}
                            target="_blank"
                        >
                            <MagicButton
                                title="My Resume"
                                icon={<FaPaperPlane />}
                                position="left"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
