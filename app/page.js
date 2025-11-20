// app/page.js
import EventsNewsSection from "@/components/home/EventsNewsSection";

// --- LOCAL ASSETS (from your previous Next.js code) ---
const imgAksharamLogo8X8Cm1 =
  "/logo.png";
const imgRectangle3 =
  "/assets/bdb755f62c915a8dccff0af5a61ffcb1ba904244.png";
const imgRectangle4 =
  "/assets/67083be49282f47372d5eb7c4d90d2a8450176d8.png";
const imgRectangle5 =
  "/assets/96d67a1b3c93e738758868a04cd06581ea68a3b4.png";
const imgRectangle6 =
  "/assets/85d7dfa3b4ba10f32119aea7a0291f5084842561.png";
// 360° virtual tour hero image (served from Figma MCP, like other images)
// 360° virtual tour hero image
const imgImg202509301106451 =
  "https://www.figma.com/api/mcp/asset/03058e63-4b49-486d-a2bb-46d41b199d49";

// --- MCP FIGMA ASSETS (direct from Figma) ---
const imgImg202507271809472 =
  "https://www.figma.com/api/mcp/asset/03058e63-4b49-486d-a2bb-46d41b199d49";

const imgRectangle7 =
  "https://www.figma.com/api/mcp/asset/8e429964-c00e-44cb-b172-7794adef7ffa";
const imgRectangle8 =
  "https://www.figma.com/api/mcp/asset/3d8a67c1-3df2-4285-838c-de7e53be2f77";
const imgRectangle9 =
  "https://www.figma.com/api/mcp/asset/948033ec-b400-4571-b470-fe27c16c992e";
const imgRectangle10 =
  "https://www.figma.com/api/mcp/asset/4c14b773-b591-471b-8690-4e6742eeef65";
const imgRectangle11 =
  "https://www.figma.com/api/mcp/asset/94581a75-ff92-4e6e-aee8-cc14bd7723cc";
const imgRectangle12 =
  "https://www.figma.com/api/mcp/asset/8b1e8850-b1e8-4d2e-8d5c-7d7845867fd3";
const imgRectangle13 =
  "https://www.figma.com/api/mcp/asset/fa77aed0-be17-4373-b715-de917fbba640";
const imgRectangle14 =
  "https://www.figma.com/api/mcp/asset/b9b461d9-f366-4cc9-b654-00eb4801b5b5";
const imgRectangle15 =
  "https://www.figma.com/api/mcp/asset/2f211827-c2a8-485b-91cd-28b375cd5f0a";
const imgRectangle16 =
  "https://www.figma.com/api/mcp/asset/3eaac6c9-ad3f-427f-ba1d-cb96c8e96534";
const imgRectangle17 =
  "https://www.figma.com/api/mcp/asset/0f07faeb-693e-4744-90c4-5720a34e28e8";
const imgRectangle18 =
  "https://www.figma.com/api/mcp/asset/8b1e8850-b1e8-4d2e-8d5c-7d7845867fd3"; // reuse
const imgRectangle19 =
  "https://www.figma.com/api/mcp/asset/13fa7d23-859e-49bc-8428-ec706c862741";
const imgRectangle20 =
  "https://www.figma.com/api/mcp/asset/8e429964-c00e-44cb-b172-7794adef7ffa"; // reuse

const imgUilFacebook =
  "https://www.figma.com/api/mcp/asset/3d4a82e0-98d2-4263-b8fb-bf4912bc9d30";
const imgGroup =
  "https://www.figma.com/api/mcp/asset/75711c4d-eb61-467c-9fc4-1a15c77476a3";
const imgUilYoutube =
  "https://www.figma.com/api/mcp/asset/9a0ee866-883e-42b9-acdd-dde6590bd313";
const imgIonTicket =
  "https://www.figma.com/api/mcp/asset/b70fa3cf-d442-4f2f-8259-b7be922ccebd";
const imgLine1 =
  "https://www.figma.com/api/mcp/asset/6de89d3b-49df-4aa0-b672-9d88f816dc5c";
const imgJamAlert =
  "https://www.figma.com/api/mcp/asset/0b25c23d-ca6d-4a88-bc8b-b559c4ed2e5d";
const imgClarityDateSolid =
  "https://www.figma.com/api/mcp/asset/426c0de8-1698-4acf-89e3-ce195acd9752";
const imgMaterialSymbolsLightMail =
  "https://www.figma.com/api/mcp/asset/2230e15b-b7e3-4667-9e40-c535120b5fc3";
const imgEntypoOldPhone =
  "https://www.figma.com/api/mcp/asset/5c26e2ea-f918-4176-96f2-bce5f5311e63";
const imgIcomoonFreeMobile =
  "https://www.figma.com/api/mcp/asset/758bf0b9-b57e-4e95-a992-7e3cf13c27ed";

// ------------------------------------------------------------------
// ConnectWithUs component (from Figma, simplified to match variants)
// ------------------------------------------------------------------
function ConnectWithUs({ className, property1 = "Youtube" }) {
  if (property1 === "Facebook") {
    return (
      <div className={className}>
        <div className="relative shrink-0 size-[24px]">
          <img alt="" className="block max-w-none size-full" src={imgUilFacebook} />
        </div>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Facebook
        </p>
      </div>
    );
  }
  if (property1 === "instagram") {
    return (
      <div className={className}>
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[10.42%]">
            <div className="absolute inset-[-3.95%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Instagram
        </p>
      </div>
    );
  }
  if (property1 === "Pre-Publication") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Pre-Publication
        </p>
      </div>
    );
  }
  if (property1 === "Feedback") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Feedback
        </p>
      </div>
    );
  }
  if (property1 === "Bulletin") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Bulletin
        </p>
      </div>
    );
  }
  if (property1 === "Return & Refund Policy") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Return &amp; Refund Policy
        </p>
      </div>
    );
  }
  if (property1 === "Archives") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Archives
        </p>
      </div>
    );
  }
  if (property1 === "Privacy Policy") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Privacy Policy
        </p>
      </div>
    );
  }
  if (property1 === "Catalogue") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Catalogue
        </p>
      </div>
    );
  }
  if (property1 === "Terms & Conditions") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
          Terms &amp; Conditions
        </p>
      </div>
    );
  }

  // Default: Youtube
  return (
    <div className={className}>
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full" src={imgUilYoutube} />
      </div>
      <p className="font-['Inter',sans-serif] font-normal leading-6 text-[#7e7577] text-[14px]">
        Youtube
      </p>
    </div>
  );
}

// ------------------------------------------------------------------
// PAGE: pixel-accurate layout from Figma (1440px fixed, centered)
// ------------------------------------------------------------------
export default function Home() {
  return (
    <div className="flex justify-center bg-[#f8fbf1]">
      <div className="relative w-[1440px] min-h-[3800px] bg-white overflow-hidden">
        {/* Background hero image */}
        <div className="absolute h-[1072px] left-0 top-[-224px] w-[1440px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img
              alt=""
              className="absolute max-w-none size-full object-cover"
              src={imgImg202507271809472}
            />
            <div className="absolute inset-0" />
          </div>
        </div>

        {/* HEADER */}
        <div className="absolute bg-[#f8fbf1] h-[120px] left-0 top-0 w-[1440px]">
          <div className="absolute left-[76px] top-[14px] flex items-center gap-[299px]">
            <div className="relative h-[96px] w-[95.187px]">
              <img
                alt="Aksharam Museum"
                className="absolute inset-0 size-full max-w-none object-contain pointer-events-none"
                src={imgAksharamLogo8X8Cm1}
              />
            </div>

            {/* Nav + CTA */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center gap-2 px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    HOME
                  </p>
                </div>
                <a className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    SOVENIER SHOP
                  </p>
                </a>
                <div className="flex items-center justify-center gap-2 px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    EXHIBITIONS &amp; EVENTS
                  </p>
                </div>
                <a className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    GALLERY
                  </p>
                </a>
                <a className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    ABOUT US
                  </p>
                </a>
                <a className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    FEEDBACK
                  </p>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-[16px] bg-[#ef3e3e] px-4 py-3">
                <div className="relative size-[24px]">
                  <img alt="" className="block size-full max-w-none" src={imgIonTicket} />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
                  BOOK TICKETS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HERO TITLE + SUBTITLE */}
        <div className="absolute left-[72px] top-[552px] flex w-[748px] flex-col gap-4 text-white font-['Inter',sans-serif] font-medium">
          <p className="text-[96px] leading-none">AKSHARAM</p>
          <div className="text-[24px] leading-normal">
            <p className="mb-0">
              Discover how language shaped our past and connects our future.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>Explore the voices that built civilizations.</p>
          </div>
        </div>

        {/* WELCOME CARD */}
        <div className="absolute left-[calc(33.33%+106px)] top-[733px] w-[785px] rounded-[16px] border border-solid border-[#73796e] bg-[#191d17]">
          <div className="flex w-[785px] items-center justify-center gap-6 overflow-clip rounded-[inherit] p-10">
            <div className="flex w-[351px] flex-col gap-6 text-white font-['Inter',sans-serif] font-medium whitespace-pre-wrap">
              <p className="text-[20px]">WELCOME TO AKSHARAM MUSEUM</p>
              <p className="text-[16px]">The museum is open today</p>
              <p className="text-[20px]">10:00 AM to 6:00 PM</p>
            </div>

            <div className="flex h-[1px] w-[115px] items-center justify-center">
              <div className="flex-none rotate-90">
                <div className="relative h-0 w-[115px]">
                  <div className="absolute inset-x-0 bottom-0 top-[-2px]">
                    <img alt="" className="block size-full max-w-none" src={imgLine1} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[19px]">
              <div className="flex w-[304px] items-center justify-center gap-2 rounded-[16px] bg-[#ef3e3e] px-4 py-3">
                <div className="relative size-[24px]">
                  <img alt="" className="block size-full max-w-none" src={imgIonTicket} />
                </div>
                <p className="text-[16px] font-semibold text-white">
                  Book a ticket
                </p>
              </div>
              <div className="flex w-[304px] items-center justify-center gap-2 rounded-[16px] bg-white px-4 py-3">
                <div className="relative size-[24px]">
                  <img alt="" className="block size-full max-w-none" src={imgJamAlert} />
                </div>
                <p className="text-[16px] font-medium text-[#191d17]">
                  Prepare your visit
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* EVENTS & NEWS – dynamic from API */}
        <EventsNewsSection />


        {/* 360 VIRTUAL TOUR PANEL */}
        <div className="absolute left-[calc(33.33%+106px)] top-[1025px] h-[528px] w-[782px] overflow-clip rounded-[16px] bg-[#828282]">
          <div className="absolute left-0 top-0 h-[593.25px] w-[791px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute size-full max-w-none object-cover"
                src={imgImg202509301106451}
              />
              <div className="absolute inset-0" />
            </div>
          </div>
          <div className="absolute left-[151px] top-[34px] flex items-center justify-center gap-2 rounded-[32px] border border-solid border-white px-10 py-4">
            <p className="text-center font-['Inter',sans-serif] text-[40px] font-semibold text-white">
              360 VIRTUAL TOUR
            </p>
          </div>
        </div>

        {/* GALLERY HEADING */}
        <div className="absolute left-[72px] top-[1552px] flex w-[1292px] items-center justify-between">
          <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-[#43483f]">
            GALLERY
          </p>
          <div className="flex items-center justify-center gap-2 rounded-[8px] border border-solid border-[#295020] bg-white px-4 py-2">
            <p className="font-['Inter',sans-serif] text-[16px] font-medium text-[#295020]">
              View all&gt;&gt;
            </p>
          </div>
        </div>

        {/* GALLERY GRID (absolute positions matching Figma) */}
        <div className="absolute left-[76px] top-[1611px] h-[634px] w-[1292px]">
          <div className="absolute left-0 top-0 h-[328px] w-[218px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle7}
              />
            </div>
          </div>
          <div className="absolute left-[244px] top-[72px] h-[256px] w-[259px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle8}
              />
            </div>
          </div>
          <div className="absolute left-[522px] top-0 h-[228px] w-[326px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle9}
              />
            </div>
          </div>
          <div className="absolute left-[876px] top-[6px] h-[306px] w-[416px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle10}
              />
            </div>
          </div>
          <div className="absolute left-[876px] top-[368px] h-[218px] w-[416px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle11}
              />
            </div>
          </div>
          <div className="absolute left-[522px] top-[256px] h-[378px] w-[326px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle12}
              />
            </div>
          </div>
          <div className="absolute left-[67px] top-[352px] h-[256px] w-[389px] rounded-[8px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8px] object-cover"
                src={imgRectangle13}
              />
            </div>
          </div>
        </div>

        {/* SOUVENIERS SECTION */}
        <div className="absolute left-[72px] top-[2317px] flex w-[1296px] flex-col gap-[27px]">
          <div className="flex w-full items-end justify-between">
            <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-[#43483f]">
              SOVENIERS
            </p>
            <div className="flex items-center justify-center gap-2 rounded-[8px] border border-solid border-[#295020] bg-white px-4 py-2">
              <p className="font-['Inter',sans-serif] text-[16px] font-medium text-[#295020]">
                View all&gt;&gt;
              </p>
            </div>
          </div>

          <div className="flex w-full items-end gap-[47px]">
            <p className="font-['Inter',sans-serif] h-[294px] w-[283px] text-[16px] leading-8 text-[#43483f] whitespace-pre-wrap">
              Before you leave, take a piece of the museum with you! Explore our
              exclusive range of souvenirs — from handcrafted mementos and
              art-inspired keepsakes to books and collectibles that celebrate
              the beauty of language and culture. Each item tells its own story,
              letting you carry home a lasting memory of your visit.
            </p>
            <div className="flex items-center gap-6">
              {[imgRectangle14, imgRectangle15, imgRectangle16, imgRectangle17].map(
                (img, idx) => (
                  <div
                    key={idx}
                    className="relative h-[296px] w-[223px] shrink-0 rounded-[8px] border border-solid border-[#73796e]"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 size-full max-w-none rounded-[8px] object-cover pointer-events-none"
                      src={img}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* PLAN YOUR VISIT HEADING */}
        <div className="absolute left-[72px] top-[2747px] flex w-[1296px] items-end justify-between">
          <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-[#43483f]">
            PLAN YOUR VISIT
          </p>
        </div>

        {/* PLAN YOUR VISIT CONTENT */}
        <div className="absolute left-[76px] top-[2792px] flex gap-[60px]">
          <div className="relative h-[492.492px] w-[629.688px]">
            <div className="absolute left-0 top-0 flex items-center justify-center">
              <div className="flex-none rotate-[330deg] skew-x-[333.435deg]">
                <div className="relative h-[238.992px] w-[383px] rounded-[6.128px] shadow-[0_0_19.303px_#406836,0_0_11.03px_#406836,0_0_6.434px_#406836,0_0_3.217px_#406836,0_0_0.919px_#406836,0_0_0.46px_#406836]">
                  <img
                    alt=""
                    className="absolute inset-0 size-full max-w-none rounded-[6.128px] object-cover pointer-events-none"
                    src={imgRectangle18}
                  />
                </div>
              </div>
            </div>
            <div className="absolute left-[132px] top-[30px] flex items-center justify-center">
              <div className="flex-none rotate-[330deg] skew-x-[333.435deg]">
                <div className="relative h-[238.992px] w-[383px] rounded-[6.128px] shadow-[0_0_19.303px_#406836,0_0_11.03px_#406836,0_0_6.434px_#406836,0_0_3.217px_#406836,0_0_0.919px_#406836,0_0_0.46px_#406836]">
                  <img
                    alt=""
                    className="absolute inset-0 size-full max-w-none rounded-[6.128px] object-cover pointer-events-none"
                    src={imgRectangle19}
                  />
                </div>
              </div>
            </div>
            <div className="absolute left-[298px] top-[62px] flex items-center justify-center">
              <div className="flex-none rotate-[330deg] skew-x-[333.435deg]">
                <div className="relative h-[238.992px] w-[383px] rounded-[6.128px] shadow-[0_0_19.303px_#406836,0_0_11.03px_#406836,0_0_6.434px_#406836,0_0_3.217px_#406836,0_0_0.919px_#406836,0_0_0.46px_#406836]">
                  <img
                    alt=""
                    className="absolute inset-0 size-full max-w-none rounded-[6.128px] object-cover pointer-events-none"
                    src={imgRectangle20}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="font-['Inter',sans-serif] h-[206px] w-[602px] text-[16px] leading-8 text-[#43483f] whitespace-pre-wrap">
            Step into a world where words, stories, and culture come alive! Plan
            your visit to explore interactive exhibits, guided tours, and
            inspiring collections that celebrate the power of language. Whether
            you’re a student, traveler, or curious explorer, every corner of the
            museum promises a new discovery. Make your visit memorable—plan your
            day with us and experience language like never before!
          </p>
        </div>

        {/* FOOTER */}
        <div className="absolute left-0 top-[3356.49px] w-[1440px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px] flex flex-col gap-[40px] box-border">
          <div className="relative h-[344px] w-[1296px]">
            {/* About */}
            <div className="absolute left-0 top-0 w-[305px] flex flex-col gap-4 text-white leading-6 whitespace-pre-wrap">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold tracking-[0.036px]">
                About us
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] font-normal tracking-[0.021px]">
                It can be said that more than 75% of the best works produced in
                Malayalam literature during the last 79 years were published by
                SPCS.
              </p>
            </div>

            {/* Social */}
            <div className="absolute left-[426px] top-0 w-[222px] flex flex-col gap-4 px-2">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-white tracking-[0.036px]">
                Connect with us
              </p>
              <ConnectWithUs className="flex items-center gap-2" />
              <ConnectWithUs className="flex items-center gap-2" property1="Facebook" />
              <ConnectWithUs className="flex items-center gap-2" property1="instagram" />
            </div>

            {/* Explore */}
            <div className="absolute left-[769px] top-0 w-[222px] flex flex-col gap-4 px-2">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-white tracking-[0.036px]">
                Explore
              </p>
              <ConnectWithUs className="flex items-center gap-2" property1="Pre-Publication" />
              <ConnectWithUs className="flex items-center gap-2" property1="Archives" />
              <ConnectWithUs className="flex items-center gap-2" property1="Bulletin" />
              <ConnectWithUs className="flex items-center gap-2" property1="Catalogue" />
              <ConnectWithUs className="flex items-center gap-2" property1="Feedback" />
              <ConnectWithUs
                className="flex items-center gap-2"
                property1="Return & Refund Policy"
              />
              <ConnectWithUs
                className="flex items-center gap-2"
                property1="Privacy Policy"
              />
              <ConnectWithUs
                className="flex items-center gap-2"
                property1="Terms & Conditions"
              />
            </div>

            {/* Contact */}
            <div className="absolute left-[1112px] top-0 w-[184px] flex flex-col gap-4 px-2">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-white tracking-[0.036px]">
                Contact us
              </p>
              <div className="font-['Inter',sans-serif] text-[14px] font-normal leading-6 tracking-[0.021px] text-white whitespace-pre-wrap">
                <p className="font-extrabold mb-0">SPCS</p>
                <p className="mb-0">Kottayam, Head Office ,</p>
                <p>Kottayam - 686001.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative size-[24px]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={imgMaterialSymbolsLightMail}
                  />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
                  spcsktm@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative size-[24px]">
                  <img alt="" className="block size-full max-w-none" src={imgEntypoOldPhone} />
                </div>
                <div className="flex flex-col gap-2 font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white whitespace-pre-wrap w-[102px]">
                  <p>0481- 2301812</p>
                  <p>0481- 2564111</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative size-[24px]">
                  <img alt="" className="block size-full max-w-none" src={imgIcomoonFreeMobile} />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
                  +919048397101
                </p>
              </div>
            </div>
          </div>

          <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
            © 2025 aksharam.com, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}




