import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Image from 'next/image';

import { ThemeContext } from '../../contexts/theme-context';
import { contactsData } from '../../data/contacts-data';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            id="contacts"
            className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-20 py-10"
            style={{ backgroundColor: theme.secondary }}
        >

            {/* 🔥 TOP HEADING */}
            <h1
                className="text-3xl sm:text-3xl md:text-5xl font-bold mb-8 text-center"
                style={{ color: theme.primary }}
            >
                Contact Me
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full max-w-6xl">

                {/* RIGHT SIDE CARD */}
                <div className="flex-1 bg-[#1a222f] rounded-2xl p-5 sm:p-6 md:p-10 shadow-lg w-full">

                    <h2
                        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
                        style={{ color: theme.primary }}
                    >
                        Get In Touch
                    </h2>

                    {/* EMAIL */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-5 mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl bg-[#334155] text-white">
                            <FiAtSign />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-400">Email</p>
                            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium break-words">
                                {contactsData.email}
                            </p>
                        </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-5 mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl bg-[#334155] text-white">
                            <FiPhone />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium">
                                {contactsData.phone}
                            </p>
                        </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-5 mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl bg-[#334155] text-white">
                            <HiOutlineLocationMarker />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-400">Location</p>
                            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium break-words">
                                {contactsData.address}
                            </p>
                        </div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 sm:gap-6 mt-4 text-xl sm:text-2xl md:text-3xl">
                        <a href={contactsData.github} target="_blank" rel="noreferrer"
                            className="p-2 sm:p-3 rounded-full bg-[#334155] hover:bg-blue-500 transition">
                            <FaGithub className="text-white" />
                        </a>

                        <a href={contactsData.linkedIn} target="_blank" rel="noreferrer"
                            className="p-2 sm:p-3 rounded-full bg-[#334155] hover:bg-blue-500 transition">
                            <FaLinkedin className="text-white" />
                        </a>

                        <a href={contactsData.facebook} target="_blank" rel="noreferrer"
                            className="p-2 sm:p-3 rounded-full bg-[#334155] hover:bg-blue-500 transition">
                            <FaFacebook className="text-white" />
                        </a>
                    </div>
                </div>

                {/* LEFT SIDE IMAGE */}
                <div className="flex-1 flex justify-center mt-6 md:mt-0">
                    <Image
                        src={theme.contactsimg}
                        alt="contact"
                        width={450}
                        height={450}
                        className="object-contain w-[250px] sm:w-[300px] md:w-[450px]"
                    />
                </div>

            </div>
        </div>
    );
}

export default Contacts;