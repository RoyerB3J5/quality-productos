import { useEffect, useRef, useState } from "react";
import Button from "../components/Button.astro";
import { Icon } from "astro-icon/components";

type Translations = typeof import("../i18n/en").default;
type ServicesContent = Translations["services"]["items"];

interface ServicesProps {
  content: ServicesContent;
  hash?: string;
}

export default function Services({ content, hash }: ServicesProps) {
  // Mapeo de hash a índice
  const hashToIndex: Record<string, number> = {
    "portable-toilet-rental": 0,
    "dumpster-rental": 1,
    "septic-rv-pump-out": 2,
  };

  // Estado inicial siempre es 0 para evitar hydration mismatch
  const [currentItem, setCurrentItem] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Marcar como hidratado y actualizar currentItem basado en URL
  useEffect(() => {
    setIsHydrated(true);

    // Leer el hash de la URL después de la hidratación
    if (typeof window !== "undefined") {
      const urlHash =
        new URL(window.location.href).searchParams.get("section") || "";

      // Si hay un hash válido, usar su índice, si no, usar 1 por defecto
      const newIndex =
        urlHash && hashToIndex[urlHash] !== undefined
          ? hashToIndex[urlHash]
          : 0; // Valor por defecto es 1

      setCurrentItem(newIndex);

      // Scroll suave al elemento después de un pequeño delay (solo si hay hash)
      if (urlHash && hashToIndex[urlHash] !== undefined) {
        setTimeout(() => {
          const element = document.getElementById(urlHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 500);
      }
    }
  }, []);

  // Marcar como hidratado después del primer render
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Observer para el header
  useEffect(() => {
    if (!isHydrated) return;

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
  }, [isHydrated]);

  // Observer para el detail
  useEffect(() => {
    if (!isHydrated) return;

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
  }, [isHydrated]);

  return (
    <>
      <section className="w-full flex justify-center items-center bg-white dark:bg-back-dark">
        <div className="w-full max-w-screen xl:max-w-7xl px-5 xl:px-0 flex flex-col justify-center items-center py-20 md:py-30 gap-8 md:gap-16">
          <div
            className={`flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 lg:gap-6 w-full services-detail ${isHydrated && isHeaderVisible ? "active" : ""}`}
            ref={headerRef}
          >
            {content.map((item, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 flex flex-col justify-center items-center gap-18 md:aspect-411/252 py-4 px-6 lg:px-0 lg:pt-26 lg:pb-6 rounded-2xl  transition-all duration-300 ease-in-out relative group overflow-hidden ${
                  currentItem === index
                    ? ""
                    : "cursor-pointer bg-primary dark:bg-secondary-dark hover:scale-95"
                }`}
                onClick={() => setCurrentItem(index)}
              >
                <img
                  src={`/images/${item.section.image}.webp`}
                  alt="Fondo de soluciones"
                  width="2500"
                  height="1563"
                  className={`absolute inset-0 w-auto md:w-full h-full object-cover z-0 transition-transform duration-300 ease-in-out transform hidden sm:block ${
                    currentItem === index ? "translate-y-0" : "translate-y-full"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={`absolute w-full h-full bg-secondary  sm:bg-black/70 md:bg-black/50 top-0 left-0 rounded-2xl z-1 transition-transform duration-300 ease-in-out transform ${
                    currentItem === index ? "translate-y-0" : "translate-y-full"
                  }`}
                ></div>
                <h3 className="text-white dark:text-paragraph-dark text-[14px] md:text-[24px] font-semibold leading-[143%] md:leading-[133%] z-5 text-center">
                  {item.title}
                </h3>
                <p className=" hidden lg:block text-white dark:text-paragraph-dark text-[14px] font-normal leading-[143%] z-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div
            ref={detailRef}
            key={currentItem}
            className={`w-full flex flex-col justify-center items-center gap-8 md:gap-16 services-detail ${isHydrated && isDetailVisible ? "active" : ""}`}
            id={content[currentItem].id}
          >
            <div
              className={`w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0`}
            >
              <div className="flex  md:hidden justify-start items-center gap-2">
                <div className="w-2 h-2 bg-accent"></div>
                <p className="text-paragraph dark:text-paragraph-dark text-[14px] md:text-[16px] font-normal leading-[150%] uppercase">
                  {content[currentItem].section.subtitle}
                </p>
              </div>
              <h4 className="text-primary dark:text-paragraph-dark text-[28px] md:text-[56px] font-semibold leading-[129%] md:leading-[114%] max-w-none md:max-w-131">
                {content[currentItem].section.title}
              </h4>
              <div className="flex flex-col justify-center items-start gap-4 max-w-156.75">
                <div className="md:flex justify-start items-center gap-2 hidden ">
                  <div className="w-2 h-2 bg-primary dark:bg-primary-dark"></div>
                  <p className="text-paragraph dark:text-paragraph-dark text-[14px] md:text-[16px] font-normal leading-[150%] uppercase">
                    {content[currentItem].section.subtitle}
                  </p>
                </div>
                <p className="text-paragraph dark:text-paragraph-dark text-[14px] md:text-[16px] font-normal leading-[143%] md:leading-[150%]">
                  {content[currentItem].section.description}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 lg:gap-16.75">
              <div className="aspect-995/584 w-full md:w-[70%] lg:w-[80%] h-auto rounded-2xl relative overflow-hidden order-2 md:order-1">
                <img
                  src={`/images/${content[currentItem].section.image}.webp`}
                  alt="Fondo de soluciones"
                  width="1282"
                  height="584"
                  className={`absolute inset-0 w-full h-full object-cover -z-20 object-bottom`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-full md:w-[30%] lg:w-[20%] flex flex-col justify-center items-start gap-10 order-1 md:order-2">
                <ul className="flex flex-col justify-center items-start gap-4">
                  {content[currentItem].section.list.map((point, idx) => (
                    <li className="flex items-start gap-2" key={idx}>
                      <img
                        src="/images/check-2.svg"
                        alt="Check"
                        width="24"
                        height="24"
                        decoding="async"
                        loading="lazy"
                        className="w-6 h-6"
                      />
                      <p className="text-paragraph dark:text-paragraph-dark text-[16px] font-normal leading-[150%]">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13212179445"
                  className="flex justify-center items-center py-3.5 cursor-pointer gap-2.5 hover:-translate-y-0.5 transition-all duration-300 ease-in-out z-10 px-7 hover:scale-[1.02] rounded-lg bg-accent hover:bg-accent/90 text-white font-medium leading-[150%] text-[16px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
