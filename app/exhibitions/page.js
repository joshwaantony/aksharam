// app/exhibitions/page.js

// --- LOCAL LOGO (same as home page) ---
const imgAksharamLogo8X8Cm1 =
    "logo.png";

// --- FIGMA MCP IMAGE ASSETS FOR THIS PAGE ---
const imgRectangle21 =
    "https://www.figma.com/api/mcp/asset/3794c975-544d-4ec5-8a81-db76e7b24d3c"; // left exhibition
const imgRectangle22 =
    "https://www.figma.com/api/mcp/asset/9e7ab436-4cdf-46e9-af29-30b421b1a307"; // right exhibition

// Arrow icon on each card
const imgArrowForward =
    "https://www.figma.com/api/mcp/asset/29b6c54f-be3e-46aa-a2bb-1360506d2cd8";

// Header / footer icons (from this Figma page)
const imgUilFacebook =
    "https://www.figma.com/api/mcp/asset/b00e8e0a-77cc-45f7-ba80-c583bdc89278";
const imgGroup =
    "https://www.figma.com/api/mcp/asset/d3f63437-f7b2-4547-b24d-014e5438a376";
const imgUilYoutube =
    "https://www.figma.com/api/mcp/asset/60f4f150-fde5-4d9e-8176-f454797a7d81";
const imgIonTicket =
    "https://www.figma.com/api/mcp/asset/1d9b9452-6f6d-4659-920a-0060efbdead5";
const imgMaterialSymbolsLightMail =
    "https://www.figma.com/api/mcp/asset/a7271bb0-f775-49f6-aafc-2fb677ea4205";
const imgEntypoOldPhone =
    "https://www.figma.com/api/mcp/asset/f0d931d2-0d15-487f-bbd9-09cd62f30cd2";
const imgIcomoonFreeMobile =
    "https://www.figma.com/api/mcp/asset/7edd9937-3df1-4950-af36-f3c7321bc747";

// Footer link rows (same component logic as on home page)
function ConnectWithUs({ className, variant = "Youtube" }) {
    if (variant === "Facebook") {
        return (
            <div className={className}>
                <div className="relative shrink-0 size-[24px]">
                    <img alt="" src={imgUilFacebook} className="block size-full" />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Facebook
                </p>
            </div>
        );
    }
    if (variant === "instagram") {
        return (
            <div className={className}>
                <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute inset-[10.42%]">
                        <div className="absolute inset-[-3.95%]">
                            <img alt="" src={imgGroup} className="block size-full" />
                        </div>
                    </div>
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Instagram
                </p>
            </div>
        );
    }
    if (variant === "Pre-Publication") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Pre-Publication
                </p>
            </div>
        );
    }
    if (variant === "Feedback") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Feedback
                </p>
            </div>
        );
    }
    if (variant === "Bulletin") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Bulletin
                </p>
            </div>
        );
    }
    if (variant === "Return & Refund Policy") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Return &amp; Refund Policy
                </p>
            </div>
        );
    }
    if (variant === "Archives") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Archives
                </p>
            </div>
        );
    }
    if (variant === "Privacy Policy") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Privacy Policy
                </p>
            </div>
        );
    }
    if (variant === "Catalogue") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Catalogue
                </p>
            </div>
        );
    }
    if (variant === "Terms & Conditions") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                    Terms &amp; Conditions
                </p>
            </div>
        );
    }

    // default: Youtube
    return (
        <div className={className}>
            <div className="relative shrink-0 size-[24px]">
                <img alt="" src={imgUilYoutube} className="block size-full" />
            </div>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#7e7577] leading-6">
                Youtube
            </p>
        </div>
    );
}

export default function ExhibitionsPage() {
    return (
        <div className="flex justify-center bg-[#f8fbf1]">
            {/* fixed Figma canvas width */}
            <div className="relative w-[1440px] min-h-[900px] bg-white overflow-x-hidden">
                {/* HEADER (same as home, with EXHIBITIONS active) */}
                <header className="absolute left-0 top-0 h-[120px] w-[1440px] bg-[#f8fbf1]">
                    <div className="absolute left-[76px] top-[14px] flex items-center gap-[299px]">
                        {/* Logo */}
                        <div className="relative h-[96px] w-[95.187px]">
                            <img
                                src={imgAksharamLogo8X8Cm1}
                                alt="Aksharam Museum"
                                className="absolute inset-0 size-full object-contain"
                            />
                        </div>

                        {/* Nav + CTA */}
                        <div className="flex items-center gap-2">
                            <nav className="flex items-center">
                                <a className="flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        HOME
                                    </p>
                                </a>
                                <a className="flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        SOVENIER SHOP
                                    </p>
                                </a>
                                <div className="flex items-center justify-center gap-[10px] px-4 py-2 bg-white">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        EXHIBITIONS &amp; EVENTS
                                    </p>
                                </div>
                                <a className="flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        GALLERY
                                    </p>
                                </a>
                                <a className="flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        ABOUT US
                                    </p>
                                </a>
                                <a className="flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        FEEDBACK
                                    </p>
                                </a>
                            </nav>

                            <button className="flex items-center justify-center gap-[10px] rounded-[16px] bg-[#ef3e3e] px-4 py-3">
                                <div className="relative size-[24px]">
                                    <img
                                        alt=""
                                        src={imgIonTicket}
                                        className="block size-full max-w-none"
                                    />
                                </div>
                                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
                                    BOOK TICKETS
                                </p>
                            </button>
                        </div>
                    </div>
                </header>

                {/* PAGE TITLE */}
                <p className="absolute left-[72px] top-[192px] font-['Inter',sans-serif] text-[24px] font-semibold text-[#43483f]">
                    EXHIBITIONS &amp; EVENTS
                </p>

                {/* MAIN EXHIBITION ROW (2 cards, 636px each, exactly as Figma) */}
                <section className="absolute left-[72px] top-[264px] flex w-[1296px] gap-[24px]">
                    {/* Left card */}
                    <article className="relative h-[666px] w-[636px]">
                        {/* Image */}
                        <div className="absolute left-0 top-0 h-[477px] w-[636px] rounded-[8px]">
                            <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
                            <img
                                src={imgRectangle21}
                                alt="Exhibition at the museum"
                                className="absolute inset-0 size-full rounded-[8px] object-cover"
                            />
                        </div>

                        {/* Status badge (In Progress) */}
                        <div className="absolute left-[27px] top-[408px] flex items-center justify-center rounded-[16px] border border-[#a5d395] bg-[#a5d395] px-4 py-2">
                            <p className="font-['Inter',sans-serif] text-[20px] text-white">
                                In Progress
                            </p>
                        </div>

                        {/* Text block */}
                        <div className="absolute left-0 top-[501px] flex w-[287px] flex-col gap-[8px]">
                            <div className="font-['Inter',sans-serif] text-[20px] text-[#43483f]">
                                <p className="mb-0">Exhibition at the museum</p>
                                <p>Until January 11th, 2026</p>
                            </div>
                            <p className="font-['Inter',sans-serif] text-[32px] font-semibold text-[#43483f]">
                                Exhibition Name
                            </p>
                            <div className="relative size-[40px]">
                                <img
                                    alt=""
                                    src={imgArrowForward}
                                    className="block size-full max-w-none"
                                />
                            </div>
                        </div>
                    </article>

                    {/* Right card */}
                    <article className="relative h-[666px] w-[636px]">
                        <div className="absolute left-0 top-0 h-[477px] w-[636px] rounded-[8px]">
                            <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
                            <img
                                src={imgRectangle22}
                                alt="Exhibition at the museum"
                                className="absolute inset-0 size-full rounded-[8px] object-cover"
                            />
                        </div>

                        <div className="absolute left-0 top-[501px] flex w-[287px] flex-col gap-[8px]">
                            <div className="font-['Inter',sans-serif] text-[20px] text-[#43483f]">
                                <p className="mb-0">Exhibition at the museum</p>
                                <p>Until January 11th, 2026</p>
                            </div>
                            <p className="font-['Inter',sans-serif] text-[32px] font-semibold text-[#43483f]">
                                Exhibition Name
                            </p>
                            <div className="relative size-[40px]">
                                <img
                                    alt=""
                                    src={imgArrowForward}
                                    className="block size-full max-w-none"
                                />
                            </div>
                        </div>
                    </article>
                </section>

                {/* FOOTER (same look as home) */}
                <footer className="absolute left-0 top-[900px] flex w-[1440px] flex-col items-center gap-[40px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px] text-white">
                    <div className="relative h-[344px] w-[1296px]">
                        {/* About */}
                        <div className="absolute left-0 top-0 flex w-[305px] flex-col gap-4">
                            <p className="font-['Inter',sans-serif] text-[24px] font-semibold">
                                About us
                            </p>
                            <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px]">
                                It can be said that more than 75% of the best works produced in
                                Malayalam literature during the last 79 years were published by
                                SPCS.
                            </p>
                        </div>

                        {/* Connect with us */}
                        <div className="absolute left-[426px] top-0 flex w-[222px] flex-col gap-4 px-2">
                            <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-6">
                                Connect with us
                            </p>
                            <ConnectWithUs className="flex items-center gap-2" />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Facebook"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="instagram"
                            />
                        </div>

                        {/* Explore */}
                        <div className="absolute left-[769px] top-0 flex w-[222px] flex-col gap-4 px-2">
                            <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-6">
                                Explore
                            </p>
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Pre-Publication"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Archives"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Bulletin"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Catalogue"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Feedback"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Return & Refund Policy"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Privacy Policy"
                            />
                            <ConnectWithUs
                                className="flex items-center gap-2"
                                variant="Terms & Conditions"
                            />
                        </div>

                        {/* Contact */}
                        <div className="absolute left-[1112px] top-0 flex w-[184px] flex-col gap-4 px-2">
                            <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-6">
                                Contact us
                            </p>
                            <div className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px]">
                                <p className="font-extrabold mb-0">SPCS</p>
                                <p className="mb-0">Kottayam, Head Office ,</p>
                                <p>Kottayam - 686001.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative size-[24px]">
                                    <img
                                        alt=""
                                        src={imgMaterialSymbolsLightMail}
                                        className="block size-full"
                                    />
                                </div>
                                <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px]">
                                    spcsktm@gmail.com
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="relative size-[24px]">
                                    <img
                                        alt=""
                                        src={imgEntypoOldPhone}
                                        className="block size-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 text-[14px] font-medium leading-6 tracking-[0.021px]">
                                    <p>0481- 2301812</p>
                                    <p>0481- 2564111</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative size-[24px]">
                                    <img
                                        alt=""
                                        src={imgIcomoonFreeMobile}
                                        className="block size-full"
                                    />
                                </div>
                                <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px]">
                                    +919048397101
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px]">
                        © 2025 aksharam.com, All rights reserved
                    </p>
                </footer>
            </div>
        </div>
    );
}
