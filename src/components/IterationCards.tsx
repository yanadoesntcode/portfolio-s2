"use client";
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

type BlogCardsProps = {
  title: string;
  introduction: string;
  process: string;
  approach: string;
  takeaways: string;
  improvements: string;
  images: string[]; // Ensure this is always an array
};

export default function LoCards({ title, introduction, process, approach, takeaways, improvements, images }: BlogCardsProps) {
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
    if (emblaApi) {
      console.log('Embla API initialized', images); // Debug images prop
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect);
      onSelect(); // Initial call
      return () => emblaApi.off('select', onSelect); // Cleanup
    }
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
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">What did I do? First Version and First Feedback</p>
        <p className="font-normal text-sm sm:text-base">{process}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">First Iteration and Feedback</p>
        <p className="font-normal text-sm sm:text-base">{approach}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">Final Iteration and Validation</p>
        <p className="font-normal text-sm sm:text-base">{takeaways}</p>
        <p className="text-purple font-bold text-lg sm:text-xl mb-1">What I Learned – Summary</p>
        <p className="font-normal text-sm sm:text-base">{improvements}</p>
      </div>
    </div>
  );
}