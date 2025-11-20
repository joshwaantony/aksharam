"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../../lib/api"; // relative to project root
import { useParams } from "next/navigation";
// --- LOCAL LOGO (same as other pages) ---
const imgAksharamLogo8X8Cm1 = "/logo.png";

// --- FIGMA ASSETS FOR THIS PAGE (fallbacks) ---
const imgRectangle23 =
    "https://www.figma.com/api/mcp/asset/efc5e5ca-652c-47e2-ad78-bd1605fd7790";

const imgUilFacebook =
    "https://www.figma.com/api/mcp/asset/cd60a726-9cb7-4570-8325-a053452ecf19";
const imgGroup =
    "https://www.figma.com/api/mcp/asset/c2c3924a-179a-42c1-aeca-6cfaa1e2b7bb";
const imgUilYoutube =
    "https://www.figma.com/api/mcp/asset/e458b08b-c6f6-4beb-8b53-15e151fc750d";
const imgIonTicket =
    "https://www.figma.com/api/mcp/asset/babcc219-3da5-41c8-9b09-41237ea42698";
const imgMaterialSymbolsLightMail =
    "https://www.figma.com/api/mcp/asset/a81e5b2d-7b6d-418a-aceb-abe1c1673102";
const imgEntypoOldPhone =
    "https://www.figma.com/api/mcp/asset/4c8903b9-3028-4c99-b28b-b1aaa94857eb";
const imgIcomoonFreeMobile =
    "https://www.figma.com/api/mcp/asset/baa88610-59a4-4597-8e39-e8be2b2ef12a";
const imgLine2 =
    "https://www.figma.com/api/mcp/asset/70cdcf5c-ebfa-4f41-a2bf-f7878d0a1c1d";

const CMS_API_BASE =
    process.env.NEXT_PUBLIC_CMS_API_BASE ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://localhost:5000";

// ----------------- helpers -----------------
function ConnectWithUs({ className, property1 = "Youtube" }) {
    if (property1 === "Facebook") {
        return (
            <div className={className}>
                <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="block size-full max-w-none" src={imgUilFacebook} />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
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
                            <img alt="" className="block size-full max-w-none" src={imgGroup} />
                        </div>
                    </div>
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Instagram
                </p>
            </div>
        );
    }

    if (property1 === "Pre-Publication") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Pre-Publication
                </p>
            </div>
        );
    }

    if (property1 === "Feedback") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Feedback
                </p>
            </div>
        );
    }

    if (property1 === "Bulletin") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Bulletin
                </p>
            </div>
        );
    }

    if (property1 === "Return & Refund Policy") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Return &amp; Refund Policy
                </p>
            </div>
        );
    }

    if (property1 === "Archives") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Archives
                </p>
            </div>
        );
    }

    if (property1 === "Privacy Policy") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Privacy Policy
                </p>
            </div>
        );
    }

    if (property1 === "Catalogue") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Catalogue
                </p>
            </div>
        );
    }

    if (property1 === "Terms & Conditions") {
        return (
            <div className={className}>
                <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                    Terms &amp; Conditions
                </p>
            </div>
        );
    }

    // default: Youtube
    return (
        <div className={className}>
            <div className="relative shrink-0 size-[24px]">
                <img alt="" className="block size-full max-w-none" src={imgUilYoutube} />
            </div>
            <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
                Youtube
            </p>
        </div>
    );
}

function formatDateRange(startDate, endDate) {
    if (!startDate && !endDate) return "";

    const fmt = (iso) =>
        new Date(iso).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

    if (startDate && endDate) {
        const s = new Date(startDate);
        const e = new Date(endDate);

        const sameDay =
            s.getFullYear() === e.getFullYear() &&
            s.getMonth() === e.getMonth() &&
            s.getDate() === e.getDate();

        if (sameDay) return fmt(startDate);
        return `${fmt(startDate)} – ${fmt(endDate)}`;
    }

    if (startDate) return fmt(startDate);
    if (endDate) return fmt(endDate);
    return "";
}

function statusLabel(status) {
    if (!status) return "In Progress";
    if (status === "upcoming") return "Upcoming";
    if (status === "past" || status === "completed") return "Completed";
    return "In Progress";
}

// --------------- PAGE ---------------
export default function ExhibitionDetailsPage() {
    const params = useParams();                          // ⬅️ get params in client
    const slug = Array.isArray(params.slug)
        ? params.slug[0]
        : params.slug;                                     // `[slug]` -> string

    const [exhibition, setExhibition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError("");
                const data = await apiGet(
                    `/api/public/exhibitions/${encodeURIComponent(slug)}`
                );
                if (!cancelled) setExhibition(data);
            } catch (err) {
                console.error("Failed to load exhibition:", err);
                if (!cancelled) setError("Failed to load exhibition.");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        if (slug) load();
        return () => {
            cancelled = true;
        };
    }, [slug]);

    // computed values
    const title = exhibition?.title || "Exhibition";
    const dateLabel = formatDateRange(exhibition?.startDate, exhibition?.endDate);
    const statusText = statusLabel(exhibition?.status);
    const heroImage =
        exhibition?.bannerImage
            ? exhibition.bannerImage.startsWith("http")
                ? exhibition.bannerImage
                : `${CMS_API_BASE}${exhibition.bannerImage}`
            : imgRectangle23;
    const bodyText =
        exhibition?.longDescription || exhibition?.description || "";

    return (
        <div className="flex justify-center bg-[#f8fbf1]">
            {/* 1440px Figma canvas */}
            <div className="relative w-[1440px] min-h-[2100px] bg-white overflow-x-hidden">
                {/* HEADER */}
                <div className="absolute left-0 top-0 h-[120px] w-[1440px] bg-[#f8fbf1] overflow-clip">
                    <div className="absolute left-[76px] top-[14px] flex items-center gap-[299px]">
                        <div className="relative h-[96px] w-[95.187px]">
                            <img
                                alt="Aksharam Museum"
                                src={imgAksharamLogo8X8Cm1}
                                className="absolute inset-0 size-full max-w-none object-contain pointer-events-none"
                            />
                        </div>

                        <div className="relative flex items-center gap-[8px]">
                            {/* nav */}
                            <nav className="relative flex items-center">
                                <a className="relative box-border flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        HOME
                                    </p>
                                </a>
                                <a className="relative box-border flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        SOVENIER SHOP
                                    </p>
                                </a>
                                <div className="relative box-border flex items-center justify-center gap-[10px] bg-white px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        EXHIBITIONS &amp; EVENTS
                                    </p>
                                </div>
                                <a className="relative box-border flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        GALLERY
                                    </p>
                                </a>
                                <a className="relative box-border flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        ABOUT US
                                    </p>
                                </a>
                                <a className="relative box-border flex cursor-pointer items-center justify-center gap-[10px] px-4 py-2">
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                                        FEEDBACK
                                    </p>
                                </a>
                            </nav>

                            {/* CTA */}
                            <div className="relative flex shrink-0 items-center justify-center gap-[10px] rounded-[16px] bg-[#ef3e3e] px-4 py-3">
                                <div className="relative shrink-0 size-[24px]">
                                    <img alt="" className="block size-full max-w-none" src={imgIonTicket} />
                                </div>
                                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
                                    BOOK TICKETS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="absolute left-0 top-[1992px] flex w-[1440px] flex-col items-center justify-center gap-[40px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px]">
                    <div className="relative h-[344px] w-[1296px]">
                        {/* About */}
                        <div className="absolute left-0 top-0 flex w-[305px] flex-col items-start gap-[16px] leading-6 text-white whitespace-pre-wrap">
                            <p className="w-full font-['Inter',sans-serif] text-[24px] font-semibold tracking-[0.036px]">
                                About us
                            </p>
                            <p className="w-full font-['Inter',sans-serif] text-[14px] tracking-[0.021px]">
                                It can be said that more than 75% of the best works produced in Malayalam
                                literature during the last 79 years were published by SPCS.
                            </p>
                        </div>

                        {/* Connect with us (social) */}
                        <div className="absolute left-[426px] top-0 flex w-[222px] flex-col items-start gap-[16px] px-[8px]">
                            <p className="min-w-full w-min font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px] text-white whitespace-pre-wrap">
                                Connect with us
                            </p>
                            <ConnectWithUs className="relative flex items-center gap-[8px]" />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Facebook"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="instagram"
                            />
                        </div>

                        {/* Explore / links */}
                        <div className="absolute left-[769px] top-0 flex w-[222px] flex-col items-start gap-[16px] px-[8px]">
                            <p className="min-w-full w-min font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px] text-white whitespace-pre-wrap">
                                Connect with us
                            </p>
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Pre-Publication"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Archives"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Bulletin"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Catalogue"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Feedback"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Return & Refund Policy"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Privacy Policy"
                            />
                            <ConnectWithUs
                                className="relative flex items-center gap-[8px]"
                                property1="Terms & Conditions"
                            />
                        </div>

                        {/* Contact */}
                        <div className="absolute left-[1112px] top-0 flex w-[184px] flex-col items-start gap-[16px] px-[8px]">
                            <p className="min-w-full w-min font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px] text-white whitespace-pre-wrap">
                                Contact us
                            </p>
                            <div className="min-w-full w-min font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-white whitespace-pre-wrap">
                                <p className="mb-0 font-extrabold">SPCS</p>
                                <p className="mb-0">Kottayam, Head Office ,</p>
                                <p>Kottayam - 686001.</p>
                            </div>
                            <div className="relative flex items-center gap-[8px]">
                                <div className="relative shrink-0 size-[24px]">
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
                            <div className="relative flex items-start gap-[16px]">
                                <div className="relative shrink-0 size-[24px]">
                                    <img
                                        alt=""
                                        className="block size-full max-w-none"
                                        src={imgEntypoOldPhone}
                                    />
                                </div>
                                <div className="flex w-[102px] flex-col items-start gap-[8px] font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white whitespace-pre-wrap">
                                    <p>0481- 2301812</p>
                                    <p>0481- 2564111</p>
                                </div>
                            </div>
                            <div className="relative flex items-center gap-[16px]">
                                <div className="relative shrink-0 size-[24px]">
                                    <img
                                        alt=""
                                        className="block size-full max-w-none"
                                        src={imgIcomoonFreeMobile}
                                    />
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

                {/* BREADCRUMB */}
                <div className="absolute left-[72px] top-[192px] flex items-center gap-[8px] text-[16px]">
                    <a className="cursor-pointer font-['Inter',sans-serif] text-[16px] font-semibold text-[#295fa7]">
                        EXHIBITIONS &amp; EVENTS
                    </a>
                    <p className="font-['Inter',sans-serif] text-[16px] text-[#295fa7]">
                        {">"}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[16px] text-[#191d17]">
                        {title}
                    </p>
                </div>

                {/* HERO IMAGE */}
                <div className="absolute left-0 top-[251px] h-[581px] w-[1440px] rounded-[8px]">
                    <div className="pointer-events-none absolute inset-0 rounded-[8px]">
                        <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
                        <img
                            alt="Exhibition hero"
                            src={heroImage}
                            className="absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
                        />
                        <div className="absolute inset-0 rounded-[8px]" />
                    </div>
                </div>

                {/* HERO OVERLAY TEXT */}
                <div className="absolute left-[72px] top-[656px] flex w-[371px] flex-col items-start gap-[24px]">
                    <div className="flex items-center justify-center gap-[10px] rounded-[16px] border border-[#a5d395] bg-[#a5d395] px-[16px] py-[8px]">
                        <p className="font-['Inter',sans-serif] text-[20px] text-white">
                            {statusText}
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-start gap-[24px] text-white whitespace-pre-wrap">
                        <p className="w-full font-['Inter',sans-serif] text-[32px] font-semibold">
                            {title}
                        </p>

                    </div>
                </div>

                {/* TITLE + DATE BELOW HERO */}
                <div className="absolute left-[72px] top-[872px] flex flex-col items-start gap-[24px]">
                    <p className="w-min font-['Inter',sans-serif] text-[32px] font-semibold text-[#43483f] whitespace-pre-wrap">
                        {title}
                    </p>
                    {dateLabel && (
                        <p className="font-['Inter',sans-serif] text-[20px] text-[#191d17]">
                            {dateLabel}
                        </p>
                    )}
                </div>

                {/* BODY TEXT */}
                <div className="absolute left-[72px] top-[1024px] h-[816px] w-[770px] font-['Inter',sans-serif] text-[20px] text-[#73796e] whitespace-pre-wrap">
                    {loading && <p>Loading exhibition details…</p>}
                    {!loading && error && <p className="text-red-500">{error}</p>}
                    {!loading && !error && bodyText && <p>{bodyText}</p>}
                </div>

                {/* RIGHT SIDEBAR CARD (DATES + HOURS) */}
                <div className="absolute left-[calc(66.67%_-_30px)] top-[872px] flex w-[424px] flex-col items-center gap-[24px] rounded-[8px] bg-white px-[32px] py-[16px] shadow-[2px_-4px_10px_0px_rgba(0,0,0,0.04),17px_14px_9px_0px_rgba(0,0,0,0.01),10px_8px_7px_0px_rgba(0,0,0,0.05),4px_3px_6px_0px_rgba(0,0,0,0.09),1px_1px_3px_0px_rgba(0,0,0,0.1)]">
                    {dateLabel && (
                        <p className="font-['Inter',sans-serif] text-[20px] font-medium text-[#191d17]">
                            {dateLabel}
                        </p>
                    )}

                    {/* Book button + divider */}
                    <div className="relative flex w-[360px] flex-col items-center gap-[16px]">
                        <div className="flex items-center justify-center gap-[10px] rounded-[16px] bg-[#ef3e3e] px-[16px] py-[12px]">
                            <div className="relative shrink-0 size-[24px]">
                                <img alt="" className="block size-full max-w-none" src={imgIonTicket} />
                            </div>
                            <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
                                BOOK TICKETS
                            </p>
                        </div>
                        <div className="relative h-0 w-full">
                            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                                <img alt="" className="block size-full max-w-none" src={imgLine2} />
                            </div>
                        </div>
                    </div>

                    {/* Opening hours */}
                    <div className="flex w-[320px] flex-col items-start gap-[41px]">
                        {[
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ].map((day) => (
                            <div
                                key={day}
                                className="flex w-full items-center gap-[16px] font-['Inter',sans-serif] text-[20px] text-[#191d17] whitespace-pre-wrap"
                            >
                                <p className="w-[115px]">{day}</p>
                                <p className="w-[189px]">10:00 AM - 6:00 PM</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
