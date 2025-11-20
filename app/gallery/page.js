// app/gallery/page.jsx
"use client";

import { useState, useEffect } from "react";
import GalleryModal from "@/components/GalleryModal";
import { apiGet } from "@/lib/api";

const API_BASE =
  process.env.NEXT_PUBLIC_CMS_API_BASE || "http://localhost:5000";

// --- LOCAL LOGO ---
const imgAksharamLogo8X8Cm1 =
  "/assets/c9bd836db561a620218743a3d6eadfab75b83cec.png";

// --- FALLBACK / DECORATIVE ICONS ---
const imgArrowForward = "/gallery/icon-arrow-right.svg";

const imgUilFacebook =
  "https://www.figma.com/api/mcp/asset/33c06558-6336-4bda-89aa-65ca07f8786d";
const imgGroup =
  "https://www.figma.com/api/mcp/asset/a08d5134-a54f-47bf-a63e-59c0bdc71e1f";
const imgUilYoutube =
  "https://www.figma.com/api/mcp/asset/19460710-da7f-4b89-baba-82f0915c7df1";
const imgIonTicket =
  "https://www.figma.com/api/mcp/asset/d457437c-661b-4772-b8b5-812c6413a651";
const imgMaterialSymbolsLightMail =
  "https://www.figma.com/api/mcp/asset/cc7ec55a-d873-4c5c-9a77-5ad6430536d7";
const imgEntypoOldPhone =
  "https://www.figma.com/api/mcp/asset/fbd9c845-dfdd-411a-ad01-2d1c7191f3ac";
const imgIcomoonFreeMobile =
  "https://www.figma.com/api/mcp/asset/11e4aaf1-dc71-4b91-b069-94679c1fe753";

// Helper to build full image URL
function buildImageUrl(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_BASE}${url}`;
}

// Footer helper (same logic as before)
function ConnectWithUs({ className, variant = "Youtube" }) {
  if (variant === "Facebook") {
    return (
      <div className={className}>
        <div className="relative shrink-0 size-[24px]">
          <img alt="" src={imgUilFacebook} className="block size-full max-w-none" />
        </div>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
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
              <img alt="" src={imgGroup} className="block size-full max-w-none" />
            </div>
          </div>
        </div>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Instagram
        </p>
      </div>
    );
  }

  if (variant === "Pre-Publication") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Pre-Publication
        </p>
      </div>
    );
  }
  if (variant === "Feedback") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Feedback
        </p>
      </div>
    );
  }
  if (variant === "Bulletin") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Bulletin
        </p>
      </div>
    );
  }
  if (variant === "Return & Refund Policy") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Return &amp; Refund Policy
        </p>
      </div>
    );
  }
  if (variant === "Archives") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Archives
        </p>
      </div>
    );
  }
  if (variant === "Privacy Policy") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Privacy Policy
        </p>
      </div>
    );
  }
  if (variant === "Catalogue") {
    return (
      <div className={className}>
        <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
          Catalogue
        </p>
      </div>
    );
  }
  if (variant === "Terms & Conditions") {
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
        <img alt="" src={imgUilYoutube} className="block size-full max-w-none" />
      </div>
      <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
        Youtube
      </p>
    </div>
  );
}

export default function GalleryPage() {
  const [items, setItems] = useState([]); // list view data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // modal detail data
  const [modalLoading, setModalLoading] = useState(false);

  // Fetch paginated gallery for grid
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await apiGet("/api/public/gallery?page=1&limit=18");
        const raw = Array.isArray(data) ? data : data.items || [];

        const mapped = raw.map((g) => ({
          id: g._id,
          title: g.title || "Untitled",
          desc: g.description || "",
          category: g.category || "Image",
          thumb: buildImageUrl(g.imageUrl),
        }));

        if (!cancelled) {
          setItems(mapped);
        }
      } catch (err) {
        console.error("Failed to load gallery:", err);
        if (!cancelled) setError("Failed to load gallery.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch single gallery item for modal
  const loadDetailByIndex = async (index) => {
    if (index == null || index < 0 || index >= items.length) return;
    const baseItem = items[index];
    try {
      setModalLoading(true);
      const detail = await apiGet(
        `/api/public/gallery/${encodeURIComponent(baseItem.id)}`
      );

      const mappedDetail = {
        id: detail._id || baseItem.id,
        title: detail.title || baseItem.title,
        desc: detail.description || baseItem.desc,
        category: detail.category || baseItem.category,
        img: buildImageUrl(detail.imageUrl || baseItem.thumb),
        largeImg: buildImageUrl(detail.imageUrl || baseItem.thumb),
      };

      setSelectedItem(mappedDetail);
      setSelectedIndex(index);
    } catch (err) {
      console.error("Failed to load gallery item detail:", err);
      // Fallback to base info if detail fails
      setSelectedItem({
        ...baseItem,
        img: baseItem.thumb,
        largeImg: baseItem.thumb,
      });
      setSelectedIndex(index);
    } finally {
      setModalLoading(false);
    }
  };

  const openModal = (index) => {
    loadDetailByIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setSelectedItem(null);
  };

  const showPrev = () => {
    if (selectedIndex == null || items.length === 0) return;
    const nextIndex =
      (selectedIndex + items.length - 1) % items.length;
    loadDetailByIndex(nextIndex);
  };

  const showNext = () => {
    if (selectedIndex == null || items.length === 0) return;
    const nextIndex = (selectedIndex + 1) % items.length;
    loadDetailByIndex(nextIndex);
  };

  return (
    <div className="flex justify-center bg-[#f8fbf1]">
      {/* 1440px Figma canvas */}
      <div className="relative w-[1440px] min-h-[3600px] bg-white overflow-x-hidden">
        {/* HEADER */}
        <header className="h-[120px] w-full bg-[#f8fbf1]">
          <div className="flex items-center gap-[299px] pl-[76px] pr-[72px] pt-[14px]">
            {/* Logo */}
            <div className="relative h-[96px] w-[95.187px]">
              <img
                src={imgAksharamLogo8X8Cm1}
                alt="Aksharam Museum"
                className="absolute inset-0 h-full w-full object-contain pointer-events-none"
              />
            </div>

            {/* Nav + CTA */}
            <div className="flex items-center gap-2">
              <nav className="flex items-center">
                <a className="flex cursor-pointer items-center justify-center px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    HOME
                  </p>
                </a>
                <a className="flex cursor-pointer items-center justify-center px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    SOVENIER SHOP
                  </p>
                </a>
                <a className="flex cursor-pointer items-center justify-center px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    EXHIBITIONS &amp; EVENTS
                  </p>
                </a>
                <div className="flex items-center justify-center bg-white px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    GALLERY
                  </p>
                </div>
                <a className="flex cursor-pointer items-center justify-center px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    ABOUT US
                  </p>
                </a>
                <a className="flex cursor-pointer items-center justify-center px-4 py-2">
                  <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#1c1b1b]">
                    FEEDBACK
                  </p>
                </a>
              </nav>

              <button className="flex items-center justify-center gap-[10px] rounded-[16px] bg-[#ef3e3e] px-4 py-3">
                <div className="relative size-[24px]">
                  <img alt="" src={imgIonTicket} className="block size-full max-w-none" />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
                  BOOK TICKETS
                </p>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="px-[76px] pt-[72px]">
          {/* Tabs */}
          <div className="mt-[120px] flex items-center gap-[40px]">
            <div className="rounded-[4px] bg-[#f8fbf1] px-[16px] py-[16px]">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-[#43483f]">
                Images
              </p>
            </div>
            <div className="rounded-[4px] px-[16px] py-[16px]">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-[#43483f]">
                Videos
              </p>
            </div>
          </div>

          {/* Error / Loading */}
          {error && (
            <p className="mt-6 text-sm text-red-600">
              {error}
            </p>
          )}
          {loading && !error && (
            <p className="mt-6 text-sm text-slate-500">
              Loading gallery…
            </p>
          )}

          {/* Grid */}
          {!loading && !error && (
            <div className="mt-[41px] flex justify-between">
              <div className="grid w-[1292px] grid-cols-3 gap-x-[40px] gap-y-[72px]">
                {items.map((item, index) => (
                  <article
                    key={item.id}
                    className="flex w-[403px] cursor-pointer flex-col gap-[16px]"
                    onClick={() => openModal(index)}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[400/300]">
                      <div className="absolute inset-0 bg-[#d9d9d9]" />
                      {item.thumb && (
                        <img
                          src={item.thumb}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-['Inter',sans-serif] text-[20px] font-semibold text-[#43483f]">
                        {item.title}
                      </p>
                      {item.desc && (
                        <p className="font-['Inter',sans-serif] text-[16px] text-[#73796e]">
                          {item.desc}
                        </p>
                      )}
                      <div className="relative size-[40px]">
                        <img
                          alt=""
                          src={imgArrowForward}
                          className="block size-full max-w-none"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* FOOTER */}
        <footer className="mt-[120px] flex w-full flex-col items-center justify-center gap-[40px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px]">
          <div className="relative h-[344px] w-[1296px] text-white">
            {/* About */}
            <div className="absolute left-0 top-0 flex w-[305px] flex-col gap-[16px]">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold tracking-[0.036px]">
                About us
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px]">
                It can be said that more than 75% of the best works produced in Malayalam
                literature during the last 79 years were published by SPCS.
              </p>
            </div>

            {/* Connect with us (social) */}
            <div className="absolute left-[426px] top-0 flex w-[222px] flex-col gap-[16px] px-[8px]">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px]">
                Connect with us
              </p>
              <ConnectWithUs className="flex items-center gap-[8px]" />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Facebook"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="instagram"
              />
            </div>

            {/* Explore links */}
            <div className="absolute left-[769px] top-0 flex w-[222px] flex-col gap-[16px] px-[8px]">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px]">
                Connect with us
              </p>
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Pre-Publication"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Archives"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Bulletin"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Catalogue"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Feedback"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Return & Refund Policy"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Privacy Policy"
              />
              <ConnectWithUs
                className="flex items-center gap-[8px]"
                variant="Terms & Conditions"
              />
            </div>

            {/* Contact */}
            <div className="absolute left-[1112px] top-0 flex w-[184px] flex-col gap-[16px] px-[8px]">
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px]">
                Contact us
              </p>
              <div className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px]">
                <p className="font-extrabold">SPCS</p>
                <p className="mb-0">Kottayam, Head Office ,</p>
                <p>Kottayam - 686001.</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="relative size-[24px]">
                  <img
                    alt=""
                    src={imgMaterialSymbolsLightMail}
                    className="block size-full max-w-none"
                  />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px]">
                  spcsktm@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="relative size-[24px]">
                  <img
                    alt=""
                    src={imgEntypoOldPhone}
                    className="block size-full max-w-none"
                  />
                </div>
                <div className="flex w-[102px] flex-col gap-[8px] font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px]">
                  <p>0481- 2301812</p>
                  <p>0481- 2564111</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="relative size-[24px]">
                  <img
                    alt=""
                    src={imgIcomoonFreeMobile}
                    className="block size-full max-w-none"
                  />
                </div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px]">
                  +919048397101
                </p>
              </div>
            </div>
          </div>

          <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
            © 2025 aksharam.com, All rights reserved
          </p>
        </footer>

        {/* MODAL */}
        <GalleryModal
          item={selectedItem}
          loading={modalLoading}
          onPrev={showPrev}
          onNext={showNext}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}
