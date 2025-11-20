// import React from "react";
// import EventsNewsSection from "./EventsNewsSection";
// import VirtualTour from "./VirtualTour";
// import WelcomeCard from "./WelcomeCard";

// function Section() {
//   return (
//     <div className="flex px-[72px] py-4 gap-6">
//       <div className="min-h-max max-h-max 2/5 flex justify-start items-start">
//         <EventsNewsSection />
//       </div>
//       <div className="w-3/5 flex flex-nowrap flex-col justify-end overflow-visible">
//         <WelcomeCard />
//         <VirtualTour />
//       </div>
//     </div>
//   );
// }

// export default Section;



import React from "react";
import EventsNewsSection from "./EventsNewsSection";
import VirtualTour from "./VirtualTour";
import WelcomeCard from "./WelcomeCard";

function Section() {
  return (
    <div className="flex flex-col lg:flex-row  py-4 gap-6">
      
      {/* LEFT SIDE → Controls container height */}
      <div className="lg:w-2/5 flex-shrink-0 relative" id="left ">
        <EventsNewsSection />
      </div>

      {/* RIGHT SIDE → Same height as left (because parent takes left height) */}
      <div className="lg:w-3/5 relative flex flex-col justify-end overflow-visible">
        
        {/* WelcomeCard should overflow upward but align bottom with EventsNewsSection */}
        <div className="w-full lg:absolute -top-[150px]  pb-4 lg:pb-0 left-0">
          <WelcomeCard />
        </div>

        {/* VirtualTour stays at the bottom */}
        <VirtualTour />
      </div>
    </div>
  );
}

export default Section;
