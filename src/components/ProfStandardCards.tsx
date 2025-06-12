"use client";
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

type BlogCardsProps = {
  title: string;
  introduction: string;
  method: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
  approach: string;
  takeaways: string;
  improvements: string;
  images: string[]; // Ensure this is always an array
};

export default function LoCards({ title, introduction, method, photo1, photo2, photo3, photo4, photo5, approach, takeaways, improvements, images }: BlogCardsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0); // Track active slide

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Update selected index when emblaApi changes
  useEffect(() => {
    if (!emblaApi) return;
  
    console.log('Embla API initialized', images);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
  
    emblaApi.on('select', onSelect);
    onSelect(); // Initial set
  
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, images]);

  return (
    <div className="rounded-[1.25rem] bg-[#adadad] my-[3rem]  w-full sm:max-w-sm md:max-w-md lg:ml-80 lg:max-w-4xl h-auto flex flex-col overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <div className="min-w-0 flex-[0_0_100%]" key={index}>
                  <Image
                    src={image}
                    alt={`${introduction} - Image ${index + 1}`}
                    width={0}
                    height={0}
                    layout="responsive"
                    objectFit="cover"
                    className="w-full h-auto"
                  />
                </div>
              ))
            ) : (
              <div>No images available</div>
            )}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" // Increased padding
        >
          &lt; {/* Left arrow */}
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" // Increased padding
        >
          &gt; {/* Right arrow */}
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {images && images.length > 0 ? (
          images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${selectedIndex === index ? 'bg-white' : 'bg-gray-500'}`} // Use state instead of emblaApi
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))
        ) : null}
      </div>
      <div className="text-purple px-4 sm:px-6 lg:px-9 pb-2 mt-2 mb-6">

        <p className="text-[#3f3f3f] font-bold text-lg sm:text-xl mb-1">{title}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">Introduction - What are you looking at?</p>
        <p className="font-normal text-sm sm:text-base">{introduction}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">What did I do? – Describe the method</p>
        <p className="font-normal text-sm sm:text-base">{method}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">How did I do it? – Per photo</p>
        <ul className="font-normal text-sm sm:text-base">
            <li>{photo1}</li>
            <li>{photo2}</li>
            <li>{photo3}</li>
            <li>{photo4}</li>
            <li>{photo5}</li>
        </ul>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">Reflection – Why this matters</p>
        <p className="font-normal text-sm sm:text-base">{approach}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">What I learned? - Key takeaways</p>
        <p className="font-normal text-sm sm:text-base">{takeaways}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">Improvements for the future</p>
        <p className="font-normal text-sm sm:text-base">{improvements}</p>


      </div>
    </div>
  );
}