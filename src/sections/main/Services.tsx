import { useState } from "react";

type Translations = typeof import("../../i18n/en").default;
type ServicesContent = Translations["main"]["services"];

interface ServicesProps {
  content: ServicesContent;
}

export default function Services({ content }: ServicesProps) {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <section className="w-full max-w-screen xl:max-w-7xl px-5 xl:px-0 py-30 flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-start gap-4 w-full">
        <div className="flex justify-start items-center gap-2">
          <div className="w-2 h-2 bg-primary"></div>
          <p className="text-paragraph text-[16px] font-normal leading-[150%] uppercase">
            {content.description}
          </p>
        </div>
        <h2 className="text-primary text-[56px] font-normal leading-[114%] max-w-180">
          {content.title}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-6 w-full">
        {content.items.map((item, index) => (
          <div
            key={index}
            className={`w-1/3 flex flex-col justify-center items-center gap-18 aspect-411/252 pt-26 pb-6 rounded-2xl  transition-all duration-300 ease-in-out relative group overflow-hidden ${
              currentItem === index
                ? ""
                : "cursor-pointer bg-primary hover:bg-transparent"
            }`}
            onClick={() => setCurrentItem(index)}
          >
            <div
              className={`absolute w-full h-full bg-black/30 top-0 left-0 rounded-2xl z-1 transition-transform duration-300 ease-in-out transform ${
                currentItem === index
                  ? "translate-y-0"
                  : "translate-y-full group-hover:translate-y-0"
              }`}
            ></div>
            <h3 className="text-white text-[24px] font-semibold leading-[133%] z-5">
              {item.title}
            </h3>
            <p className="text-white text-[14px] font-normal leading-[143%] z-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-end rounded-2xl aspect-1282/584 relative overflow-hidden bg-[#FAFAFA]">
        <div className="w-full flex justify-between items-center p-8">
          <p className="text-paragraph text-[16px] font-normal leading-[150%] text-start max-w-154.75">
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
              className="w-6.5 h-.3.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
