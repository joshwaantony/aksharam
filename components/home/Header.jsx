// components/Header.jsx
import {
  imgAksharamLogo8X8Cm1,
  imgIonTicket
} from "@/lib/assets";

export default function Header() {
  return (
    <div className="absolute bg-[#f8fbf1] h-[120px] left-0 top-0 w-full">
      <div className="absolute left-[76px] top-[14px] flex items-center gap-[299px]">
        <div className="relative h-[96px] w-[95px]">
          <img
            src={imgAksharamLogo8X8Cm1}
            alt="Aksharam"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[
              "HOME",
              "SOVENIER SHOP",
              "EXHIBITIONS & EVENTS",
              "GALLERY",
              "ABOUT US",
              "FEEDBACK"
            ].map((item) => (
              <div key={item} className="px-4 py-2">
                <p className="font-['Inter'] text-[14px] font-semibold">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-[16px] bg-[#ef3e3e] px-4 py-3">
            <img src={imgIonTicket} className="size-[24px]" alt="" />
            <p className="text-white text-[14px] font-medium">BOOK TICKETS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
