"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phone = "+923242046426",
  message = "Hello Muhammad Umer! I found your portfolio and want to get in touch.",
}) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        {/* Glow effect */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <FaWhatsapp className="text-white text-3xl relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;