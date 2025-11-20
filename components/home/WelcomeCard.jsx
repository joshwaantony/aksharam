// // components/WelcomeCard.jsx
// import { imgLine1, imgIonTicket, imgJamAlert } from "@/lib/assets";

// export default function WelcomeCard() {
//   return (
//     <div className="rounded-[16px] border border-[#73796e] bg-[#191d17]">
//       <div className="flex items-center gap-6 p-4 xl:p-8">
//         <div className="w-[351px] text-white font-['Inter'] flex flex-col gap-6">
//           <p className="text-[16px] 2xl:text-[20px]">WELCOME TO AKSHARAM MUSEUM</p>
//           <p className="text-[12px] 2xl:text-[16px]">The museum is open today</p>
//           <p className="text-[16px] 2xl:text-[20px]">10:00 AM to 6:00 PM</p>
//         </div>

//         <div className="flex h-[1px] w-[115px] justify-center">
//           <img src={imgLine1} className="rotate-90" alt="" />
//         </div>

//         <div className="flex flex-col gap-[19px]">
//           <Button red icon={imgIonTicket} label="Book a ticket" />
//           <Button white icon={imgJamAlert} label="Prepare your visit" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Button({ red, white, icon, label }) {
//   return (
//     <div
//       className={`${red ? "bg-[#ef3e3e]" : "bg-white"}  flex items-center gap-2 px-4 py-3 rounded-[16px] md:w-[240px] 2xl:w-[304px]`}
//     >
//       <img src={icon} className="size-[24px]" alt="" />
//       <p className={`text-[12px] 2xl:text-[16px] ${red ? "text-white font-semibold" : "text-[#191d17] font-medium"}`}>
//         {label}
//       </p>
//     </div>
//   );
// }


// components/WelcomeCard.jsx
import { imgLine1, imgIonTicket, imgJamAlert } from "@/lib/assets";

export default function WelcomeCard() {
  return (
    <div className="rounded-[16px] border border-[#73796e] bg-[#191d17]">
      <div
        className="
          flex flex-col sm:flex-row 
          items-start sm:items-center 
          gap-6 sm:gap-8 
          p-4 xl:p-8
        "
      >
        {/* LEFT TEXT */}
        <div className="text-white font-['Inter'] flex flex-col gap-4 sm:gap-6 w-full sm:w-[351px]">
          <p className="text-[14px] sm:text-[16px] 2xl:text-[20px]">
            WELCOME TO AKSHARAM MUSEUM
          </p>
          <p className="text-[12px] sm:text-[12px] 2xl:text-[16px]">
            The museum is open today
          </p>
          <p className="text-[14px] sm:text-[16px] 2xl:text-[20px]">
            10:00 AM to 6:00 PM
          </p>
        </div>

        {/* DIVIDER - hidden on mobile */}
        <div className="hidden sm:flex h-[1px] w-[115px] justify-center">
          <img src={imgLine1} className="rotate-90" alt="" />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4 sm:gap-[19px] w-full sm:w-auto">
          <Button red icon={imgIonTicket} label="Book a ticket" />
          <Button white icon={imgJamAlert} label="Prepare your visit" />
        </div>
      </div>
    </div>
  );
}

function Button({ red, white, icon, label }) {
  return (
    <div
      className={`
        ${red ? "bg-[#ef3e3e]" : "bg-white"}  
        flex items-center gap-2 
        px-4 py-3 rounded-[16px] 
        w-full sm:w-[240px] 2xl:w-[304px]
      `}
    >
      <img src={icon} className="size-[20px] sm:size-[24px]" alt="" />

      <p
        className={`
          text-[12px] sm:text-[12px] 2xl:text-[16px] 
          ${red ? "text-white font-semibold" : "text-[#191d17] font-medium"}
        `}
      >
        {label}
      </p>
    </div>
  );
}
