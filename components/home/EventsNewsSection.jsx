"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "../../lib/api"; // adjust to "@/lib/api" if you use alias

const CMS_API_BASE =
  process.env.NEXT_PUBLIC_CMS_API_BASE ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "http://localhost:5000";

const imgClarityDateSolid =
  "https://www.figma.com/api/mcp/asset/426c0de8-1698-4acf-89e3-ce195acd9752";

function formatDateRange(startDate, endDate) {
  if (!startDate && !endDate) return "Date & time";

  const fmt = (iso) =>
    new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const isSame =
      start.getFullYear() === end.getFullYear() &&
      start.getMonth() === end.getMonth() &&
      start.getDate() === end.getDate();

    if (isSame) {
      // same day → show one date
      return fmt(startDate);
    }

    // different dates → full range
    return `${fmt(startDate)} – ${fmt(endDate)}`;
  }

  if (startDate) return fmt(startDate);
  if (endDate) return fmt(endDate);
  return "Date & time";
}

function EventCard({ event }) {
  const image = event.bannerImage || null;
  const dateLabel = formatDateRange(event.startDate, event.endDate);
  const description = event.description || "";
  const href = `/exhibitions/${event.slug || event._id}`;

  return (
    // <Link
    //   href={href}
    //   className="flex items-center gap-2 border-b border-[#c3c8bc] px-0 py-3 last:border-b-0"
    // >
    //   <div className="relative h-[99px] w-[177px] shrink-0 overflow-hidden rounded-[4px] bg-[#d9d9d9]">
    //     {image && (
    //       <img
    //         alt={event.title || "Exhibition image"}
    //         className="absolute inset-0 h-full w-full rounded-[4px] object-cover"
    //         src={image.startsWith("http") ? image : `${CMS_API_BASE}${image}`}
    //       />
    //     )}
    //   </div>

    //   <div className="flex w-[250px] flex-col gap-2">
    //     <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#43483f]">
    //       {event.title || "Event name"}
    //     </p>

    //     <div className="flex items-center gap-1">
    //       <div className="relative h-4 w-4">
    //         <img
    //           alt=""
    //           className="block h-full w-full"
    //           src={imgClarityDateSolid}
    //         />
    //       </div>
    //       <p className="font-['Inter',sans-serif] text-[12px] text-[#73796e]">
    //         {dateLabel}
    //       </p>
    //     </div>

    //     <p className="font-['Inter',sans-serif] text-[12px] text-[#73796e] line-clamp-3">
    //       {description}
    //     </p>
    //   </div>
    // </Link>

    <Link
  href={href}
  className="
    flex flex-col sm:flex-row         /* stack on mobile, row on sm+ */
    items-start sm:items-center
    gap-3 sm:gap-4
    border-b border-[#c3c8bc]
    py-3
    last:border-b-0
  "
>
  {/* IMAGE */}
  <div
    className="
      relative
      w-full sm:w-[177px]
      h-[160px] sm:h-[99px]          /* taller on mobile */
      shrink-0
      overflow-hidden rounded-[4px] bg-[#d9d9d9]
    "
  >
    {image && (
      <img
        alt={event.title || 'Exhibition image'}
        className="absolute inset-0 h-full w-full object-cover rounded-[4px]"
        src={image.startsWith('http') ? image : `${CMS_API_BASE}${image}`}
      />
    )}
  </div>

  {/* TEXT */}
  <div className="flex w-full sm:w-[250px] flex-col gap-2">
    <p className="font-['Inter',sans-serif] text-[16px] sm:text-[16px] text-[15px] font-semibold text-[#43483f]">
      {event.title || 'Event name'}
    </p>

    <div className="flex items-center gap-1">
      <div className="relative h-4 w-4">
        <img alt="" className="block h-full w-full" src={imgClarityDateSolid} />
      </div>
      <p className="font-['Inter',sans-serif] text-[12px] sm:text-[12px] text-[11px] text-[#73796e]">
        {dateLabel}
      </p>
    </div>

    <p className="font-['Inter',sans-serif] text-[12px] sm:text-[12px] text-[11px] text-[#73796e] line-clamp-3">
      {description}
    </p>
  </div>
</Link>

  );
}

export default function EventsNewsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await apiGet("/api/public/exhibitions?page=1&limit=12");
        const items = Array.isArray(data) ? data : data.items || [];
        if (!cancelled) setEvents(items);
      } catch (err) {
        console.error("Failed to load exhibitions:", err);
        if (!cancelled) setError("Failed to load events.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="h-[480px] xl:h-[530px] 2xl:h-[608px] overflow-hidden rounded-[16px] bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.25),-38px_-25px_46px_rgba(0,0,0,0.09),-4px_-8px_25px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-3">
        <p className="font-['Inter',sans-serif] text-[18px] xl:text-[24px] font-semibold text-[#43483f]">
          EVENTS &amp; NEWS
        </p>
        <button className="flex items-center justify-center gap-2 rounded-[8px] border border-[#295020] bg-white px-4 py-2 text-[14px] xl:text-[16px] font-medium text-[#295020]">
          View all&gt;&gt;
        </button>
      </div>

      {/* Scrollable list */}
      <div className="custom-scroll h-[528px] overflow-y-auto px-6 pb-4">
        {loading && (
          <p className="mt-2 text-sm text-slate-500">Loading events…</p>
        )}

        {error && !loading && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="mt-2 text-sm text-slate-500">
            No events available right now.
          </p>
        )}

        {!loading &&
          !error &&
          events.map((event) => (
            <EventCard key={event._id || event.slug} event={event} />
          ))}
      </div>
    </div>
  );
}
