// components/GalleryModal.jsx
"use client";

const imgArrowLeft = "/gallery/icon-arrow-left.svg";
const imgArrowRight = "/gallery/icon-arrow-right.svg";
const imgClose = "/gallery/icon-close.svg";

export default function GalleryModal({ item, onPrev, onNext, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      {/* White modal frame */}
      <div className="relative h-[640px] w-[1360px] rounded-[8px] bg-white px-[40px] py-[40px]">
        {/* Close */}
        <button
          type="button"
          className="absolute right-[16px] top-[16px] flex size-[32px] items-center justify-center"
          aria-label="Close"
          onClick={onClose}
        >
          <img
            src={imgClose}
            alt="Close"
            className="block h-[24px] w-[24px]"
          />
        </button>

        <div className="flex h-full w-full items-center gap-[40px]">
          {/* Left arrow */}
          <button
            type="button"
            className="flex h-full w-[24px] items-center justify-center"
            aria-label="Previous artwork"
            onClick={onPrev}
          >
            <img
              src={imgArrowLeft}
              alt="Previous"
              className="block h-[32px] w-[32px]"
            />
          </button>

          {/* Main artwork */}
          <div className="relative h-[544px] w-[700px] overflow-hidden rounded-[4px]">
            <div className="absolute inset-0 bg-[#d9d9d9]" />
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Right: text + right arrow */}
          <div className="flex h-[544px] w-[420px] flex-col">
            <h1 className="mb-[24px] font-['Inter',sans-serif] text-[32px] font-semibold leading-[38px] text-[#191d17]">
              {item.title}
            </h1>

            <p className="flex-1 font-['Inter',sans-serif] text-[20px] leading-[28px] text-[#43483f]">
              {item.longDesc ??
                `Lorem ipsum dolor sit amet consectetur. Facilisis tortor tellus sed
                leo ornare venenatis tellus egestas. Neque adipiscing nullam ipsum
                fermentum malesuada volutpat amet rutrum. Turpis ac faucibus
                facilisis faucibus vitae urna. Massa molestie convallis mattis
                diam id pharetra.
                Dictum mattis metus tellus nunc porttitor viverra et sit. Vel in
                eget a ligula. Egestas velit gravida tincidunt et blandit vel nisl
                luctus lectus. Sit in tortor eu nibh non. Sit justo proin nunc
                commodo duis.`}
            </p>

            <div className="mt-[24px] flex justify-end">
              <button
                type="button"
                className="flex items-center justify-center"
                aria-label="Next artwork"
                onClick={onNext}
              >
                <img
                  src={imgArrowRight}
                  alt="Next"
                  className="block h-[32px] w-[32px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
