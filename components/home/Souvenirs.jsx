// components/Souvenirs.jsx
import {
  imgRectangle14,
  imgRectangle15,
  imgRectangle16,
  imgRectangle17
} from "@/lib/assets";

export default function Souvenirs() {
  return (
    // <div className=" w-[1296px] flex flex-col gap-[27px]">
    //   <div className="flex justify-between">
    //     <p className="text-[24px] text-[#43483F] font-semibold">SOUVENIERS</p>
    //     <button className="border border-[#295020] rounded-[8px] px-4 py-2 text-[#295020]">
    //       View all&gt;&gt;
    //     </button>
    //   </div>

    //   <div className="flex gap-[47px]">
    //     <p className="w-[283px] leading-8 text-[#43483f]">
    //       Before you leave, take a piece of the museum with you! Explore our exclusive range of souvenirs — from handcrafted mementos and art-inspired keepsakes to books and collectibles that celebrate the beauty of language and culture. Each item tells its own story, letting you carry home a lasting memory of your visit.
    //     </p>

    //     <div className="flex items-center gap-6">
    //       {[imgRectangle14, imgRectangle15, imgRectangle16, imgRectangle17].map((img, i) => (
    //         <div key={i} className="h-[296px] w-[223px] border rounded-[8px] overflow-hidden">
    //           <img src={img} className="w-full h-full object-cover" alt="" />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex flex-col gap-[27px] mt-8">

  {/* HEADER */}
  <div className="flex justify-between flex-wrap gap-4">
    <p className="text-[20px] sm:text-[24px] text-[#43483F] font-semibold">
      SOUVENIERS
    </p>

    <button className="border border-[#295020] rounded-[8px] px-4 py-2 text-[#295020]">
      View all &gt;&gt;
    </button>
  </div>

  {/* CONTENT */}
  <div className="flex flex-col xl:flex-row gap-[24px] xl:gap-[47px]">

    {/* TEXT */}
    <p className="w-full xl:w-[25%] leading-7 text-[#43483f] text-[14px] sm:text-[16px]">
      Before you leave, take a piece of the museum with you! Explore our
      exclusive range of souvenirs — from handcrafted mementos and
      art-inspired keepsakes to books and collectibles that celebrate the
      beauty of language and culture. Each item tells its own story,
      letting you carry home a lasting memory of your visit.
    </p>

    {/* IMAGES */}
    <div
      className="
      xl:w-[75%]
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        xl:flex
        xl:flex-nowrap
        items-center
        justify-between 
        gap-4 
        xl:gap-6
      "
    >
      {[imgRectangle14, imgRectangle15, imgRectangle16, imgRectangle17].map(
        (img, i) => (
          <div
            key={i}
            className="
              h-[200px] sm:h-[240px] lg:h-[280px] xl:h-[296px]
              w-full xl:w-[223px]
              border rounded-[8px] overflow-hidden
            "
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        )
      )}
    </div>

  </div>
</div>

  );
}
