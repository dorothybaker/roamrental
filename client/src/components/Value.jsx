import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import accordionData from "../Utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";

export default function Value() {
  return (
    <section>
      <div className="px-6 max-w-7xl w-full mx-auto flex items-end justify-between gap-5 md:flex-nowrap flex-wrap ">
        <div className="flex items-center justify-center md:flex-1">
          <div className="lg:w-[27rem] md:w-[25rem] sm:h-[30rem] h-[25rem]  overflow-hidden rounded-tr-[15rem] rounded-tl-[15rem] border-4 border-black/30">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              alt="valueBanner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-start flex-col justify-center gap-3 md:flex-1">
          <div className="flex flex-col gap-[2px]">
            <span className="font-semibold text-orange-400 text">
              Our Value
            </span>
            <span className="font-bold text-blue-950 text-xl">
              Feel At Home
            </span>
            <span className="text-black/60 text-sm font-semibold">
              We believe a world where people feel at home no matter where they
              are, can make life better.
            </span>
          </div>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="w-full"
          >
            {accordionData.map((data, i) => {
              const [className, setClassName] = useState(null);

              return (
                <AccordionItem key={i} uuid={i} className={`my-3 ${className}`}>
                  <AccordionItemHeading className="border-b py-2">
                    <AccordionItemButton className="flex items-center gap-2 justify-between">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("shadow-lg")
                            : setClassName("")
                        }
                      </AccordionItemState>

                      <span className="text-blue-950 text-base font-bold">
                        {data.heading}
                      </span>
                      <div className="border h-7 w-7 flex justify-center items-center text-gray-600 rounded-sm">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="text-sm font-semibold text-black/60">
                      {data.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
