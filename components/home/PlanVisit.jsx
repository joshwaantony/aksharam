// components/PlanVisit.jsx
import {
  imgRectangle18,
  imgRectangle19,
  imgRectangle20
} from "@/lib/assets";

export default function PlanVisit() {
  return (
    <>
      <div className="absolute left-[72px] top-[2747px]">
        <p className="text-[24px] font-semibold text-[#43483f]">PLAN YOUR VISIT</p>
      </div>

      <div className="absolute left-[76px] top-[2792px] flex gap-[60px]">
        <div className="relative h-[492px] w-[629px]">
          {/* layered rotated cards */}
          <img src={imgRectangle18} className="absolute rotate-[330deg] top-0 left-0 w-[383px] h-[239px] rounded-md shadow-xl" />
          <img src={imgRectangle19} className="absolute rotate-[330deg] top-[30px] left-[132px] w-[383px] h-[239px]" />
          <img src={imgRectangle20} className="absolute rotate-[330deg] top-[62px] left-[298px] w-[383px] h-[239px]" />
        </div>

        <p className="w-[602px] text-[#43483f] leading-8">
            Step into a world where words, stories, and culture come alive! Plan your visit to explore interactive exhibits, guided tours, and inspiring collections that celebrate the power of language. Whether you’re a student, traveler, or curious explorer, every corner of the museum promises a new discovery. Make your visit memorable—plan your day with us and experience language like never before!
        </p>
      </div>
    </>
  );
}
