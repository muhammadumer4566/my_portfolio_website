import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/theme-context';
import { headerData } from '../../data/header-data';
import { socialsData } from '../../data/socials-data';

function Landing() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-[600px] md:min-h-screen text-center px-6 py-10"
            style={{ backgroundColor: theme.quaternary }}
        >
            {/* TITLE */}
            <h4
                className="text-xl md:text-2xl mb-3 font-medium"
                style={{ color: theme.primary }}
            >
                {headerData.title}
            </h4>

            {/* NAME */}
            <h1
                className="text-3xl md:text-6xl font-extrabold mb-4 tracking-wide"
                style={{ color: theme.tertiary }}
            >
                {headerData.name}
            </h1>

            {/* DESIGNATION */}
            <Typed
                strings={[
                    'Frontend Developer',
                    'React Js Developer',
                    'Full Stack Next Js Developer'
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
                className="text-xl md:text-3xl mb-6 font-semibold"
                style={{ color: theme.primary }}
            />

            {/* DESCRIPTION */}
            <p
                className="max-w-4xl text-md md:text-xl leading-relaxed mb-8"
                style={{ color: theme.tertiary }}
            >
                I specialize in developing high-quality, scalable, and user-focused web applications.
                Passionate about clean code, performance optimization, and delivering seamless digital experiences.
            </p>

            {/* RESUME BUTTON */}
            <a
                href={headerData.resumePdf}
                target="_blank"
                rel="noreferrer"
            >
                <button className="px-8 py-4 text-lg rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
                    View Resume
                </button>
            </a>

            {/* SOCIAL LINKS */}
            <div className="flex gap-8 mt-8 text-3xl md:text-4xl">
                {socialsData.github && (
                    <a href={socialsData.github} target="_blank" rel="noreferrer">
                        <FaGithub style={{ color: theme.primary }} />
                    </a>
                )}
                {socialsData.linkedIn && (
                    <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                        <FaLinkedin style={{ color: theme.primary }} />
                    </a>
                )}
                {socialsData.facebook && (
                    <a href={socialsData.facebook} target="_blank" rel="noreferrer">
                        <FaFacebook style={{ color: theme.primary }} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default Landing;