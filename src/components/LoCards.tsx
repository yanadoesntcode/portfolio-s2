"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type BlogCardsProps = {
  title: string;
  introduction: string;
  process: string;
  approach: string;
  takeaways: string;
  improvements: string;
  images: string[];
  hrefs?: { href: string; label: string;  }[] | undefined; 
};

export default function LoCards({
  title,
  introduction,
  process,
  approach,
  takeaways,
  improvements,
  images,
  hrefs,
}: BlogCardsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    console.log("Embla API initialized", images);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, images]);

  console.log("hrefs prop:", hrefs);

  return (
    <div className="rounded-[1.25rem] bg-[#adadad] my-[2rem] w-full sm:max-w-sm md:max-w-md lg:ml-80 lg:max-w-4xl h-auto flex flex-col overflow-hidden">
      {/* Image Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <div className="min-w-0 flex-[0_0_100%]" key={index}>
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    width={0}
                    height={0}
                    layout="responsive"
                    objectFit="cover"
                    className="w-full h-auto"
                  />
                </div>
              ))
            ) : (
              <div className="p-4 text-center">No images available</div>
            )}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {images && images.length > 0
          ? images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  selectedIndex === index ? "bg-gray-100" : "bg-gray-500"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))
          : null}
      </div>

      {/* Text Content */}
      <div className="text-purple px-4 sm:px-6 lg:px-9 pb-2 mt-2 mb-6">
        <p className="text-[#3f3f3f] font-bold text-lg sm:text-xl mb-1">
          {title}
        </p>
        <p className="text-purple font-bold text-lg sm:text-base mb-1">
          Introduction - What are you looking at?
        </p>
        <p className="font-normal text-sm sm:text-base">{introduction}</p>
        <p className="text-purple font-bold text-lg sm:text-base mb-1">
          What did I do? - Document the process
        </p>
        <p className="font-normal text-sm sm:text-base">{process}</p>
        <p className="text-purple font-bold text-lg sm:text-base mb-1">
          How did it go? - Reflect on my approach
        </p>
        <p className="font-normal text-sm sm:text-base">{approach}</p>
        <p className="text-purple font-bold text-lg sm:text-base mb-1">
          What did I learn? - Key takeaways
        </p>
        <p className="font-normal text-sm sm:text-base">{takeaways}</p>
        <p className="text-purple font-bold text-lg sm:text-base mb-1">
          What would I do differently next time? - Improvements for the future
        </p>
        <p className="font-normal text-sm sm:text-base">{improvements}</p>
      </div>

      {/* Links Section */}
      <div className="px-4 sm:px-6 lg:px-9 pb-4">
        <h3 className="text-purple font-bold text-lg sm:text-base mb-2">
          Related Links
        </h3>
        {hrefs && hrefs.length > 0 ? (
          <ul className="flex flex-wrap gap-4">
            {hrefs.map((link, index) => (
              <li key={index}>
                {link.href ? (
                  <Link
                    href={link.href}
                    target={"_blank"}
                    className="block text-center text-white font-semibold bg-gray-800 rounded-lg px-6 py-3 min-w-[120px] hover:bg-gray-700 transition-colors duration-200"
                  >
                    {link.label || "Unnamed Link"}
                  </Link>
                ) : (
                  <p className="text-sm text-red-500">Invalid link at index {index}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">No links available</p>
        )}
      </div>
    </div>
  );
}