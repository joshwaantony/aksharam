// components/ConnectWithUs.jsx
import {
  imgUilFacebook,
  imgGroup,
  imgUilYoutube,
} from "@/lib/assets";

export default function ConnectWithUs({ className, property1 = "Youtube" }) {
  const icons = {
    Youtube: imgUilYoutube,
    Facebook: imgUilFacebook,
    instagram: imgGroup,
  };

  if (property1 === "Pre-Publication" ||
      property1 === "Feedback" ||
      property1 === "Bulletin" ||
      property1 === "Return & Refund Policy" ||
      property1 === "Archives" ||
      property1 === "Privacy Policy" ||
      property1 === "Catalogue" ||
      property1 === "Terms & Conditions") {
    return (
      <div className={className}>
        <p className="font-['Inter'] text-[14px] text-[#7e7577]  hover:text-white cursor-pointer leading-6">
          {property1}
        </p>
      </div>
    );
  }

  return (
    <div className={className} >
   <div className="flex gap-2">
       {icons[property1] && (
        <div className=" shrink-0 size-[24px]">
          <img src={icons[property1]} className="w-full h-full" alt="" />
        </div>
      )}
      <p className="font-['Inter'] text-[14px] text-[#7e7577] hover:text-white cursor-pointer leading-6">
        {property1 === "instagram" ? "Instagram" : property1}
      </p>
   </div>
    </div>
  );
}
