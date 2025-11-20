// components/Footer.jsx
import {
  imgMaterialSymbolsLightMail,
  imgEntypoOldPhone,
  imgIcomoonFreeMobile
} from "@/lib/assets";

import ConnectWithUs from "./ConnectWithUs";

export default function Footer() {
  return (
    <div className="absolute w-full top-[3356px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px] text-white">
      <div className="relative h-[344px] w-[1296px]">
        {/* About */}
        <div className="absolute left-0 top-0 w-[305px]">
          <p className="text-[24px] font-semibold">About us</p>
          <p className="text-[14px] mt-4">
            It can be said that more than 75%…
          </p>
        </div>

        {/* Social */}
        <div className="absolute left-[426px] top-0 w-[222px]">
          <p className="text-[24px] font-semibold">Connect with us</p>
          <ConnectWithUs className="flex mt-4" />
          <ConnectWithUs className="flex" property1="Facebook" />
          <ConnectWithUs className="flex" property1="instagram" />
        </div>

        {/* Explore */}
        <div className="absolute left-[769px] top-0 w-[222px]">
          <p className="text-[24px] font-semibold">Explore</p>
          {[
            "Pre-Publication",
            "Archives",
            "Bulletin",
            "Catalogue",
            "Feedback",
            "Return & Refund Policy",
            "Privacy Policy",
            "Terms & Conditions"
          ].map((item) => (
            <ConnectWithUs key={item} className="flex" property1={item} />
          ))}
        </div>

        {/* Contact */}
        <div className="absolute left-[1112px] top-0 w-[184px]">
          <p className="text-[24px] font-semibold">Contact us</p>

          <p className="mt-4 font-semibold">SPCS</p>
          <p>Kottayam, Head Office</p>
          <p>Kottayam - 686001.</p>

          <div className="flex items-center gap-2 mt-4">
            <img src={imgMaterialSymbolsLightMail} className="size-[24px]" />
            <p>spcsktm@gmail.com</p>
          </div>

          <div className="flex items-start gap-2 mt-2">
            <img src={imgEntypoOldPhone} className="size-[24px]" />
            <div>
              <p>0481-2301812</p>
              <p>0481-2564111</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src={imgIcomoonFreeMobile} className="size-[24px]" />
            <p>+919048397101</p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-[14px]">© 2025 aksharam.com, All rights reserved</p>
    </div>
  );
}
