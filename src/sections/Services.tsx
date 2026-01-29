import { useState } from "react";
import Button from "../components/Button.astro";
import { Icon } from "astro-icon/components";

type Translations = typeof import("../i18n/en").default;
type ServicesContent = Translations["services"]["items"];

interface ServicesProps {
  content: ServicesContent;
}

export default function Services({ content }: ServicesProps) {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <section className="w-full max-w-scree xl:max-w-7xl px-5 xl:px-0 flex flex-col justify-center itmes-center py-30 gap-16">
      <div className="flex justify-center items-center gap-6 w-full">
        {content.map((item, index) => (
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
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <div className="w-full flex justify-between items-start ">
          <h4 className="text-primary text-[56px] font-semibold leading-[114%] max-w-131">
            {content[currentItem].section.title}
          </h4>
          <div className="flex flex-col justify-center items-start gap-4 max-w-156.75">
            <div className="flex justify-start items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div>
              <p className="text-paragraph text-[16px] font-normal leading-[150%] uppercase">
                {content[currentItem].section.subtitle}
              </p>
            </div>
            <p className="text-paragraph text-[16px] font-normal leading-[150%]">
              {content[currentItem].section.description}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-start gap-16.75">
          <div className="bg-primary-intense aspect-995/584 w-[70%] h-auto rounded-2xl"></div>
          <div className="w-[30%] flex flex-col justify-center items-start gap-10">
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
                  <p className="text-paragraph text-[16px] font-normal leading-[150%]">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
            <a
              href="tel:+1234567890"
              className="flex justify-center items-center py-3.5 cursor-pointer gap-2.5 hover:-translate-y-0.5 transition-all duration-300 ease-in-out z-10 px-7 hover:scale-[1.02] rounded-lg bg-accent hover:bg-accent/90 text-paragraph font-medium leading-[150%] text-[16px]"
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
                  fill="#303030"
                />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
