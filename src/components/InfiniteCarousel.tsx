import React, { useState, useRef, useCallback } from "react";

interface CarouselItem {
  id: number;
  title: string;
  date: string;
  description: string;
  rating?: number;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  arrowIcon?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function InfiniteCarousel({
  items,
  arrowIcon = "/images/arrow-move.svg",
  buttonText = "Learn More",
  onButtonClick,
}: InfiniteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [phase, setPhase] = useState<"idle" | "transitioning">("idle");
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);

  const totalItems = items.length;

  if (!items || totalItems === 0) return null;

  const mod = (n: number) => ((n % totalItems) + totalItems) % totalItems;

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (animating) return;

      setDirection(dir);
      setPhase("transitioning");
      setAnimating(true);

      // After transition ends, update index and go back to idle
      setTimeout(() => {
        setCurrentIndex((prev) => mod(dir === "next" ? prev + 1 : prev - 1));
        setPhase("idle");
        setAnimating(false);
      }, 400);
    },
    [animating, totalItems],
  );

  const goNext = () => navigate("next");
  const goPrev = () => navigate("prev");

  const goToSlide = (target: number) => {
    if (animating || target === currentIndex) return;
    navigate(target > currentIndex ? "next" : "prev");
    // Override the index after timeout
    setTimeout(() => {
      setCurrentIndex(target);
    }, 400);
  };

  // Drag handlers using refs to avoid stale state
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (animating) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    dragDelta.current = 0;
    isDragging.current = true;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragDelta.current = clientX - dragStartX.current;

    // Move track visually during drag
    if (trackRef.current && phase === "idle") {
      const slideW = trackRef.current.parentElement?.offsetWidth ?? 0;
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(-${slideW}px + ${dragDelta.current * 0.5}px))`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(dragDelta.current) > 50) {
      navigate(dragDelta.current < 0 ? "next" : "prev");
    } else {
      // Snap back
      if (trackRef.current) {
        const slideW = trackRef.current.parentElement?.offsetWidth ?? 0;
        trackRef.current.style.transition = "transform 0.3s ease";
        trackRef.current.style.transform = `translateX(-${slideW}px)`;
      }
    }

    dragStartX.current = null;
    dragDelta.current = 0;
  };

  // Build slides array: always render prev, current, next
  const prevIndex = mod(currentIndex - 1);
  const nextIndex = mod(currentIndex + 1);

  const slides =
    phase === "transitioning"
      ? [items[prevIndex], items[currentIndex], items[nextIndex]]
      : [items[prevIndex], items[currentIndex], items[nextIndex]];

  // Track translateX:
  // idle → centered on middle slide (-100%)
  // transitioning next → animate to -200%
  // transitioning prev → animate to 0%
  let trackTranslate = "-100%";
  if (phase === "transitioning") {
    trackTranslate = direction === "next" ? "-200%" : "0%";
  }

  const slideW = 100; // percent

  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-6"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      style={{
        userSelect: "none",
        cursor: isDragging.current ? "grabbing" : "grab",
      }}
    >
      {/* Carousel Content */}
      <div className="flex justify-center items-center gap-10 w-full">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="shrink-0 hover:opacity-70 transition-opacity hidden md:block"
          aria-label="Previous slide"
        >
          <img
            src={arrowIcon}
            alt="Previous"
            width="13"
            height="23"
            className="w-3.25 h-auto "
            draggable={false}
          />
        </button>

        {/* Track wrapper — clips overflow */}
        <div className="flex-1 overflow-hidden shadow-solution rounded-2xl">
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: `${slides.length * 100}%`,
              transform: `translateX(calc(${trackTranslate} / ${slides.length}))`,
              transition:
                phase === "transitioning"
                  ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "none",
            }}
            className="rounded-2xl overflow-hidden h-full"
          >
            {slides.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                style={{ width: `${100 / slides.length}%`, flexShrink: 0 }}
              >
                <div className="flex flex-col justify-center items-start gap-2.5 w-full bg-[#F9F8FD] border border-[#e6e6e6] rounded-2xl px-4 py-10 md:p-10 grow h-full">
                  <h3 className="text-primary text-[18px] font-bold leading-[155%]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#808080] font-normal leading-[155%]">
                    {item.date}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex justify-center items-center gap-2">
                    {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                      <img
                        key={idx}
                        src="/images/star-2.svg"
                        alt="Rating star"
                        width="20"
                        height="20"
                        decoding="async"
                        loading="lazy"
                        className="inline-block w-5 h-auto"
                        draggable={false}
                      />
                    ))}
                  </div>

                  <p className="text-[19px] md:text-[20px] text-paragraph font-normal leading-[155%] text-center md:text-start">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="shrink-0 hover:opacity-70 transition-opacity hidden md:block"
          aria-label="Next slide"
        >
          <img
            src={arrowIcon}
            alt="Next"
            width="13"
            height="23"
            className="w-3.25 h-auto rotate-180"
            draggable={false}
          />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 rounded-full transition-all duration-300 ${
              index === mod(currentIndex)
                ? "w-6 bg-primary"
                : "w-4 bg-black/15 hover:bg-black/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
