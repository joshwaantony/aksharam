// components/VirtualTour.jsx
import { imgImg202509301106451 } from "@/lib/assets";

export default function VirtualTour() {
  return (
  //   <div className="relative h-[450px] 2xl:h-[528px] rounded-[16px] overflow-clip bg-[#828282]">
  //     <img
  //       src={imgImg202509301106451}
  //       className="absolute inset-0 w-full h-full object-cover"
  //       alt=""
  //     />
  // <div className="absolute inset-0 bg-[#00000070]"></div>


  //     <div className="absolute left-[151px] top-[34px] border border-white rounded-[32px] px-10 py-4">
  //       <p className="text-white text-[40px] font-semibold">360 VIRTUAL TOUR</p>
  //     </div>
  //   </div>


//   <div
//   className="relative h-[450px] 2xl:h-[528px] rounded-[16px] overflow-clip bg-[#828282] bg-cover bg-center"
//   style={{
//     backgroundImage: `url(${imgImg202509301106451})`,
//   }}
// >
//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-[#00000070]"></div>

//   {/* Text box */}
//   <div className="flex justify-center pt-[34px] z-50">
//     <span className="text-white text-[40px] font-semibold  border border-white  rounded-[32px] px-10 py-4">360 VIRTUAL TOUR</span>
//   </div>
// </div>


<div
  className="relative h-[280px] sm:h-[450px] 2xl:h-[528px] rounded-[16px] overflow-clip bg-[#828282] bg-cover bg-center"
  style={{
    backgroundImage: `url(${imgImg202509301106451})`,
  }}
>
  {/* Dark overlay — give it z-10 */}
  <div className="absolute inset-0 bg-[#00000070] z-10"></div>

  {/* Text box — must be positioned + higher z-index */}
  <div className="flex justify-center pt-[34px] relative z-20">
    <span className="text-white text-[16px] sm:text-[28px] xl:text-[30px] 2xl:text-[40px] font-semibold border border-white rounded-[32px] px-10 py-4">
      360 VIRTUAL TOUR
    </span>
  </div>
</div>


  );
}
