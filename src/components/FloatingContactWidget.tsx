import React from "react";

const ICONS = [
  {
    href: "https://wa.me/971558702565",
    label: "WhatsApp",
    img: "https://img.icons8.com/ios/50/000000/whatsapp--v1.png",
    tooltip: "Chat on WhatsApp",
  },
  {
    href: "https://www.instagram.com/limeswood_realestate/",
    label: "Instagram",
    img: "https://img.icons8.com/ios/50/000000/instagram-new.png",
    tooltip: "View Instagram",
  },
  {
    href: "https://www.linkedin.com/company/limeswoodrealestate/",
    label: "LinkedIn",
    img: "https://img.icons8.com/ios/50/000000/linkedin.png",
    tooltip: "Connect on LinkedIn",
  },
];

const FloatingContactWidget = () => {
  // Chatbot launcher
  const launchChat = () => {
    if (window.createChat) {
      window.createChat({
        webhookUrl: 'https://n8n.mohammedisufar.com/webhook/bb7f85cd-4187-46ea-a98f-a4e39a92b93c/chat',
        initialMessages: [
          'Hi there! 👋',
          'My name is Sophia. How can I assist you today?',
        ]
      });
    } else {
      alert('Chatbot is loading. Please try again in a moment.');
    }
  };

  return (
    <div
      className="floating-widget fixed bottom-6 right-1 w-[60px] bg-gradient-to-br from-[#181818] via-[#232323] to-[#0e0e0e] rounded-2xl p-2 z-[9999] shadow-2xl flex flex-col items-center gap-2 transition-transform hover:scale-105 group"
      aria-label="Contact widget"
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)' }}
    >
      <div className="widget-header w-full flex justify-center items-center gap-1 mb-1" aria-label="Contact header">
        <h4 className="text-white font-extrabold text-[9px] tracking-widest font-sans drop-shadow-lg">CONTACT</h4>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37]"></span>
        </span>
      </div>
      <div className="social-icons flex flex-col gap-2" aria-label="Social contact icons">
        {ICONS.map((icon) => (
          <a
            key={icon.label}
            href={icon.href}
            target="_blank"
            aria-label={icon.label}
            rel="noopener"
            className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-md relative group"
          >
            <img src={icon.img} alt={`${icon.label} icon`} className="w-5 h-5" />
          </a>
        ))}
        <button
          type="button"
          aria-label="Chatbot"
          onClick={launchChat}
          className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer border-none p-0 shadow-md relative group"
        >
          <img src="https://img.icons8.com/ios/50/000000/chat--v1.png" alt="Chatbot icon" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FloatingContactWidget; 