// // components/Navbar.jsx

// import { imgAksharamLogo8X8Cm1, imgIonTicket } from "@/lib/assets";

// export default function Navbar() {
//   return (
//     <div className="absolute bg-[#f8fbf1] h-[120px] left-0 top-0 w-[1440px] z-50">
//       <div className="absolute left-[76px] top-[14px] flex items-center gap-[299px]">

//         {/* Logo */}
//         <div className="relative h-[96px] w-[95.187px]">
//           <img
//             alt="Aksharam Museum"
//             className="absolute inset-0 size-full max-w-none object-contain pointer-events-none"
//             src={imgAksharamLogo8X8Cm1}
//           />
//         </div>

//         {/* NAVIGATION + CTA BUTTON */}
//         <div className="flex items-center gap-2">

//           {/* Navigation Links */}
//           <div className="flex items-center">
//             {[
//               "HOME",
//               "SOVENIER SHOP",
//               "EXHIBITIONS & EVENTS",
//               "GALLERY",
//               "ABOUT US",
//               "FEEDBACK",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-center gap-2 px-4 py-2 cursor-pointer"
//               >
//                 <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* BOOK TICKETS BUTTON */}
//           <div className="flex items-center justify-center gap-2 rounded-[16px] bg-[#ef3e3e] px-4 py-3 cursor-pointer">
//             <div className="relative size-[24px]">
//               <img
//                 alt=""
//                 className="block size-full max-w-none"
//                 src={imgIonTicket}
//               />
//             </div>
//             <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
//               BOOK TICKETS
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








"use client";

import { useState } from "react";
import { imgAksharamLogo8X8Cm1, imgIonTicket } from "@/lib/assets";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "HOME",
    "SOVENIER SHOP",
    "EXHIBITIONS & EVENTS",
    "GALLERY",
    "ABOUT US",
    "FEEDBACK",
  ];

  return (
    <header className="w-full bg-[#f8fbf1] fixed top-0 left-0 z-50 border-b border-[#e5e5e5]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-12 sm:h-[80px] lg:h-[120px] flex items-center justify-between">

        {/* Logo */}
        <div className="h-[60px] w-[60px] lg:h-[96px] lg:w-[95px] py-2 flex-shrink-0">
          <img
            src={imgAksharamLogo8X8Cm1}
            alt="Aksharam Museum"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className="font-['Inter'] text-[12px] xl:text-[14px] font-semibold text-[#1c1b1b] px-3 py-1 xl:py-2 hover:text-[#ef3e3e] transition"
            >
              {item}
            </button>
          ))}

          {/* BOOK TICKETS */}
          <button className="flex items-center gap-2 bg-[#ef3e3e] px-4 py-3 rounded-[16px] text-white text-[14px] font-medium">
            <img src={imgIonTicket} className="size-[24px]" alt="ticket" />
            BOOK TICKETS
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md "
        >
          {!open ? (
            // menu icon
            <svg width="26" height="20" fill="none" stroke="#000" strokeWidth="2">
              <path d="M3 4h20M3 10h20M3 16h20" />
            </svg>
          ) : (
            // close icon
            <svg width="26" height="20" fill="none" stroke="#000" strokeWidth="2">
              <path d="M4 4l18 12M22 4L4 16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#f8fbf1] border-t border-[#ddd] overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item}
              className="py-2 text-left font-['Inter'] text-[15px] font-medium text-[#1c1b1b] hover:text-[#ef3e3e] transition"
            >
              {item}
            </button>
          ))}

          {/* Book Tickets (Mobile) */}
          <button className="mt-3 flex items-center gap-2 bg-[#ef3e3e] px-4 py-3 rounded-[16px] text-white text-[14px] font-medium justify-center">
            <img src={imgIonTicket} className="size-[24px]" alt="ticket" />
            BOOK TICKETS
          </button>
        </div>
      </div>
    </header>
  );
}
