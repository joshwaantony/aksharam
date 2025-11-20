// // components/PlanVisit.jsx
// import {
//   imgRectangle18,
//   imgRectangle19,
//   imgRectangle20
// } from "@/lib/assets";

// export default function PlanVisit() {
//   return (
//     <>
//       <div className="">
//         <p className="text-[24px] font-semibold text-[#43483f]">PLAN YOUR VISIT</p>
//       </div>

//       <div className="absolute left-[76px] top-[2792px] flex gap-[60px]">
//         <div className="relative h-[492px] w-[629px]">
//           {/* layered rotated cards */}
//           <img src={imgRectangle18} className="absolute rotate-[330deg] top-0 left-0 w-[383px] h-[239px] rounded-md shadow-xl" />
//           <img src={imgRectangle19} className="absolute rotate-[330deg] top-[30px] left-[132px] w-[383px] h-[239px]" />
//           <img src={imgRectangle20} className="absolute rotate-[330deg] top-[62px] left-[298px] w-[383px] h-[239px]" />
//         </div>

//         <p className="w-[602px] text-[#43483f] leading-8">
//             Step into a world where words, stories, and culture come alive! Plan your visit to explore interactive exhibits, guided tours, and inspiring collections that celebrate the power of language. Whether you’re a student, traveler, or curious explorer, every corner of the museum promises a new discovery. Make your visit memorable—plan your day with us and experience language like never before!
//         </p>
//       </div>
//     </>
//   );
// }

// components/PlanVisit.jsx



// import { imgRectangle18, imgRectangle19, imgRectangle20 } from "@/lib/assets";

// export default function PlanVisit() {
//   return (
//     <div className="w-full flex flex-col gap-6 mt-8">
//       {/* HEADING */}
//       <p className="text-[24px] font-semibold text-[#43483f]">
//         PLAN YOUR VISIT
//       </p>

//       {/* RESPONSIVE WRAPPER */}
//       <div
//         className="
//         flex flex-col xl:flex-row 
//         gap-10 xl:gap-[60px]
//         items-center xl:items-start
//       "
//       >
//         {/* LEFT — ROTATED LAYER IMAGES */}
//         <div
//           className="
//     relative 
//     w-full sm:w-[480px] md:w-[550px] xl:w-1/2
//     h-[360px] sm:h-[420px] xl:h-[492px]
//     flex justify-center
//     pt-10
//   "
//         >
//           {/* CARD 1 */}
//           <img
//             src={imgRectangle18}
//             className="
//       absolute
//       rotate-[330deg]
//       w-[260px] sm:w-[320px] md:w-[350px] xl:w-[383px]
//       h-[160px] sm:h-[200px] md:h-[220px] xl:h-[239px]
//       top-0 left-1/2 -translate-x-1/2
//       xl:top-[100px] xl:left-0 xl:translate-x-0
//       rounded-md shadow-xl
//     "
//           />

//           {/* CARD 2 */}
//           <img
//             src={imgRectangle19}
//             className="
//       absolute
//       rotate-[330deg]
//       w-[260px] sm:w-[320px] md:w-[350px] xl:w-[383px]
//       h-[160px] sm:h-[200px] md:h-[220px] xl:h-[239px]
//       top-[20px] sm:top-[25px] md:top-[30px] xl:top-[100px]
//       left-1/2 -translate-x-1/2 rounded-md shadow-xl
//       xl:left-[132px] xl:translate-x-0
//     "
//           />

//           {/* CARD 3 */}
//           <img
//             src={imgRectangle20}
//             className="
//       absolute
//       rotate-[330deg]
//       w-[260px] sm:w-[320px] md:w-[350px] xl:w-[383px]
//       h-[160px] sm:h-[200px] md:h-[220px] xl:h-[239px]
//       top-[50px] sm:top-[55px] md:top-[60px] xl:top-[100px]
//       left-1/2 -translate-x-1/2
//       xl:left-[298px] xl:translate-x-0
//       rounded-md shadow-xl
//     "
//           />
//         </div>

//         {/* RIGHT — TEXT */}
//         <p
//           className="
//           w-full 
//           xl:w-1/2 
//           text-[#43483f] 
//           leading-7 sm:leading-8
//           text-[14px] sm:text-[16px]
//           px-2  ps-20 
//         "
//         >
//           Step into a world where words, stories, and culture come alive! Plan
//           your visit to explore interactive exhibits, guided tours, and
//           inspiring collections that celebrate the power of language. Whether
//           you’re a student, traveler, or curious explorer, every corner of the
//           museum promises a new discovery. Make your visit memorable—plan your
//           day with us and experience language like never before!
//         </p>
//       </div>
//     </div>
//   );
// }






import { imgRectangle18, imgRectangle19, imgRectangle20 } from "@/lib/assets";

export default function PlanVisit() {
  return (
    <div className="w-full flex flex-col gap-8 mt-8">
      
      {/* HEADING */}
      <p className="text-[24px] font-semibold text-[#43483f] mb-10">
        PLAN YOUR VISIT
      </p>

      {/* MAIN FLEX WRAPPER */}
      <div
        className="
          flex flex-col xl:flex-row 
          gap-10 xl:gap-[60px]
          items-center xl:items-start
          w-full
        "
      >

        {/* LEFT — ROTATED IMAGE STACK */}
        <div
          className="
            relative 
            w-full sm:w-[420px] md:w-[500px] xl:w-[620px]
            h-[240px] sm:h-[340px]  xl:h-[492px]
            flex justify-center
            pt-6 sm:pt-10
          "
        >
          {/* CARD 1 */}
          <img
            src={imgRectangle18}
            className="
              absolute
              rotate-[330deg]
              w-[240px] sm:w-[300px] md:w-[330px] xl:w-[383px]
              h-[150px] sm:h-[180px] md:h-[200px] xl:h-[239px]
              top-0 sm:top-2 md:top-4 
              left-1/2 -translate-x-1/2

              xl:top-[80px] xl:left-0 xl:translate-x-0
              rounded-md shadow-xl
            "
          />

          {/* CARD 2 */}
          <img
            src={imgRectangle19}
            className="
              absolute
              rotate-[330deg]
              w-[240px] sm:w-[300px] md:w-[330px] xl:w-[383px]
              h-[150px] sm:h-[180px] md:h-[200px] xl:h-[239px]
              top-[20px] sm:top-[25px] md:top-[30px] 
              left-1/2 -translate-x-1/2

              xl:top-[80px] xl:left-[132px] xl:translate-x-0
              rounded-md shadow-xl
            "
          />

          {/* CARD 3 */}
          <img
            src={imgRectangle20}
            className="
              absolute
              rotate-[330deg]
              w-[240px] sm:w-[300px] md:w-[330px] xl:w-[383px]
              h-[150px] sm:h-[180px] md:h-[200px] xl:h-[239px]
              top-[45px] sm:top-[55px] md:top-[60px] 
              left-1/2 -translate-x-1/2

              xl:top-[80px] xl:left-[298px] xl:translate-x-0
              rounded-md shadow-xl
            "
          />
        </div>

        {/* RIGHT — TEXT */}
        <p
          className="
            w-full 
            xl:w-1/2
            text-[#43483f] 
            leading-7 sm:leading-8
            text-[14px] sm:text-[16px]
            px-2 md:px-6 xl:ps-40
          "
        >
          Step into a world where words, stories, and culture come alive! Plan
          your visit to explore interactive exhibits, guided tours, and
          inspiring collections that celebrate the power of language. Whether
          you’re a student, traveler, or curious explorer, every corner of the
          museum promises a new discovery. Make your visit memorable—plan your
          day with us and experience language like never before!
        </p>

      </div>
    </div>
  );
}
