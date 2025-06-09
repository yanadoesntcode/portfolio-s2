import { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link'

type BlogCardsProps = {
  introduction: string;
  process: string;
  approach: string;
  takeaways: string;
  improvements: string;
  image: string;
  href: string;
}
export default function LoCards({ introduction, process, approach, takeaways, improvements, image, href }: BlogCardsProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="rounded-[1.25rem_0rem] bg-blue w-full  sm:max-w-sm md:max-w-md lg:max-w-3xl h-auto flex flex-col overflow-hidden"
    >
      <Image
        src={image}
        alt={introduction}
        width={388}
        height={541}
        className="p-4 sm:p-6 object-cover"
      />
      <div className="text-purple px-4 sm:px-6 pb-6">
        <p className="text-purple font-bold text-lg sm:text-xl">Introduction - What are you looking at?</p>
        <p className="font-normal text-sm sm:text-base mt-1">{introduction}</p>
        <p className="text-purple font-bold text-lg sm:text-xl">What did I do? - Document the process</p>
        <p className="font-normal text-sm sm:text-base mt-1">{process}</p>
        <p className="text-purple font-bold text-lg sm:text-xl">How did it go? - Reflect on my approach</p>
        <p className="font-normal text-sm sm:text-base mt-1">{approach}</p>
        <p className="text-purple font-bold text-lg sm:text-xl">What did I learn? - Key takeaways</p>
        <p className="font-normal text-sm sm:text-base mt-1">{takeaways}</p>
        <p className="text-purple font-bold text-lg sm:text-xl">What would I do differently next time? - Improvements for the future</p>
        <p className="font-normal text-sm sm:text-base mt-1">{improvements}</p>
      </div>
    </Link>
  );
}
