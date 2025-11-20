// // components/Footer.jsx
// import {
//   imgMaterialSymbolsLightMail,
//   imgEntypoOldPhone,
//   imgIcomoonFreeMobile
// } from "@/lib/assets";

// import ConnectWithUs from "./ConnectWithUs";

// export default function Footer() {
//   return (
//     <div className="absolute w-full top-[3356px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px] text-white">
//       <div className="relative h-[344px] w-[1296px]">
//         {/* About */}
//         <div className="absolute left-0 top-0 w-[305px]">
//           <p className="text-[24px] font-semibold">About us</p>
//           <p className="text-[14px] mt-4">
//             It can be said that more than 75%…
//           </p>
//         </div>

//         {/* Social */}
//         <div className="absolute left-[426px] top-0 w-[222px]">
//           <p className="text-[24px] font-semibold">Connect with us</p>
//           <ConnectWithUs className="flex mt-4" />
//           <ConnectWithUs className="flex" property1="Facebook" />
//           <ConnectWithUs className="flex" property1="instagram" />
//         </div>

//         {/* Explore */}
//         <div className="absolute left-[769px] top-0 w-[222px]">
//           <p className="text-[24px] font-semibold">Explore</p>
//           {[
//             "Pre-Publication",
//             "Archives",
//             "Bulletin",
//             "Catalogue",
//             "Feedback",
//             "Return & Refund Policy",
//             "Privacy Policy",
//             "Terms & Conditions"
//           ].map((item) => (
//             <ConnectWithUs key={item} className="flex" property1={item} />
//           ))}
//         </div>

//         {/* Contact */}
//         <div className="absolute left-[1112px] top-0 w-[184px]">
//           <p className="text-[24px] font-semibold">Contact us</p>

//           <p className="mt-4 font-semibold">SPCS</p>
//           <p>Kottayam, Head Office</p>
//           <p>Kottayam - 686001.</p>

//           <div className="flex items-center gap-2 mt-4">
//             <img src={imgMaterialSymbolsLightMail} className="size-[24px]" />
//             <p>spcsktm@gmail.com</p>
//           </div>

//           <div className="flex items-start gap-2 mt-2">
//             <img src={imgEntypoOldPhone} className="size-[24px]" />
//             <div>
//               <p>0481-2301812</p>
//               <p>0481-2564111</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 mt-2">
//             <img src={imgIcomoonFreeMobile} className="size-[24px]" />
//             <p>+919048397101</p>
//           </div>
//         </div>
//       </div>

//       <p className="mt-8 text-[14px]">© 2025 aksharam.com, All rights reserved</p>
//     </div>
//   );
// }





import {
  imgMaterialSymbolsLightMail,
  imgEntypoOldPhone,
  imgIcomoonFreeMobile
} from "@/lib/assets";

import ConnectWithUs from "./ConnectWithUs";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] text-white px-[72px] py-[72px]">

      {/* 4 Column Grid */}
      <div className="max-w-[1296px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <p className="text-[24px] font-semibold mb-4">About us</p>
          <p className="text-[14px] leading-6 text-[#d0d0d0] w-[260px]">
            It can be said that more than 75% of the best works produced in
            Malayalam literature during the last 79 years were published by SPCS.
          </p>
        </div>

        {/* CONNECT WITH US */}
        <div>
          <p className="text-[24px] font-semibold mb-4">Connect with us</p>
          <div className="flex flex-col gap-2">
            <ConnectWithUs property1="Youtube" />
            <ConnectWithUs property1="Facebook" />
            <ConnectWithUs property1="Instagram" />
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <p className="text-[24px] font-semibold mb-4">Connect with us</p>
          <div className="flex flex-col gap-2 text-[#d0d0d0]">
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
              <ConnectWithUs key={item} property1={item} />
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-[24px] font-semibold mb-4">Contact us</p>

          <p className="font-semibold">SPCS</p>
          <p>Kottayam, Head Office</p>
          <p>Kottayam - 686001.</p>

          {/* Email */}
          <div className="flex items-center gap-2 mt-4">
            <img src={imgMaterialSymbolsLightMail} className="w-6 h-6" />
            <p>spcsktm@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-2 mt-2">
            <img src={imgEntypoOldPhone} className="w-6 h-6" />
            <div>
              <p>0481-2301812</p>
              <p>0481-2564111</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 mt-2">
            <img src={imgIcomoonFreeMobile} className="w-6 h-6" />
            <p>+919048397101</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="mt-12 text-center text-[14px] text-[#d0d0d0]">
        © 2025 aksharam.com, All rights reserved
      </p>
    </footer>
  );
}
