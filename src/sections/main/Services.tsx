import { useState, useEffect, useRef } from "react";

type Translations = typeof import("../../i18n/en").default;
type ServicesContent = Translations["main"]["services"];

interface ServicesProps {
  content: ServicesContent;
}

export default function Services({ content }: ServicesProps) {
  const [currentItem, setCurrentItem] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  // Observer para el header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observer para el detail
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDetailVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (detailRef.current) {
      observer.observe(detailRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .services-header {
          opacity: 0;
        }

        .services-header.active {
          animation: fadeDown 1s ease-out forwards;
        }

        .services-detail {
          opacity: 0;
        }

        .services-detail.active {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
      <section className="w-full max-w-screen xl:max-w-7xl px-5 xl:px-0 py-20 md:py-30 flex flex-col justify-center items-center gap-8 md:gap-16">
        <div
          ref={headerRef}
          className={`w-full flex flex-col justify-center items-center gap-8 md:gap-16 services-header ${isHeaderVisible ? "active" : ""}`}
        >
          <div className="flex flex-col justify-center items-start gap-4 w-full">
            <div className="flex justify-start items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div>
              <p className="text-paragraph text-[14px] md:text-[16px] font-normal leading-[143%] md:leading-[150%] uppercase">
                {content.description}
              </p>
            </div>
            <h2 className="text-primary text-[28px] md:text-[56px] font-semibold leading-[129%] md:leading-[114%] max-w-180">
              {content.title}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 w-full">
            {content.items.map((item, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 flex flex-col justify-center items-center gap-18 md:aspect-411/252 py-4 md:py-0 px-6 lg:px-0 lg:pt-26 lg:pb-6 rounded-2xl transition-all duration-300 ease-in-out relative group overflow-hidden ${
                  currentItem === index
                    ? ""
                    : "cursor-pointer bg-primary hover:bg-transparent"
                }`}
                onClick={() => setCurrentItem(index)}
              >
                <img
                  src={`/images/${item.image}.webp`}
                  alt="Fondo de soluciones"
                  width="2500"
                  height="1563"
                  className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 ease-in-out transform ${
                    currentItem === index
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-0"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={`absolute w-full h-full bg-black/70 md:bg-black/50 top-0 left-0 rounded-2xl z-1 transition-transform duration-300 ease-in-out transform ${
                    currentItem === index
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-0"
                  }`}
                ></div>
                <h3 className="text-white text-[20px] md:text-[24px] font-semibold leading-[133%] z-5 text-center">
                  {item.title}
                </h3>
                <p className="text-white text-[14px] font-normal leading-[143%] z-5 hidden lg:block">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={detailRef}
          className={`w-full flex justify-center items-end rounded-2xl aspect-343/348 md:aspect-1282/584 relative overflow-hidden services-detail ${isDetailVisible ? "active" : ""}`}
          key={currentItem}
        >
          <img
            src={`/images/${content.items[currentItem].image}.webp`}
            alt="Fondo de soluciones"
            width="1282"
            height="584"
            className={`absolute inset-0 w-full h-full object-cover -z-20 object-bottom`}
            loading="lazy"
            decoding="async"
          />
          <div
            className="
              absolute inset-0 z-10
              gradient-overlay
            "
          ></div>
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center p-4 lg:p-8 z-20 relative gap-4 md:gap-0">
            <p className="text-white text-[14px] md:text-[16px] font-normal leading-[143%] md:leading-[150%] text-start max-w-none md:max-w-[75%] lg:max-w-154.75">
              {content.items[currentItem].description2}
            </p>
            <a
              href={content.items[currentItem].href}
              className="bg-white px-7 py-3.5 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer hover:bg-white/90 transition-shadow duration-300 ease-in-out"
            >
              <p className="text-paragraph text-[16px] font-semibold leading-[150%]">
                {content.button}
              </p>
              <img
                src="/images/arrow-r.svg"
                alt="arrow right"
                width="18"
                height="14"
                className="w-6.5 h-3.5"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
