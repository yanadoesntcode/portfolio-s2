'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'design_philo' | 'curiosity' | 'approach'>('design_philo')

  return (
    <main className="font-blackmango">
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-screen bg-cover bg-no-repeat flex flex-col justify-between px-6 md:px-20 py-10"
        style={{ backgroundImage: 'url(/images/image-3.png)' }}
      >
        {/* Logo */}
        <div className="flex flex-col gap-2 w-fit">
          <Image src="/images/Logo.svg" alt="logo" width={45} height={60} />
          <Image src="/images/Yana Spasova.svg" alt="name" width={120} height={40} />
        </div>

        {/* Title */}
        <h1 className="text-white font-blackmango text-4xl sm:text-6xl md:text-8xl lg:text-[20rem] leading-none">
          Portfolio
        </h1>
      </section>

      {/* Film Roll Visual */}
      <div
        className="absolute top-0 right-0 z-30 bg-no-repeat bg-contain hidden lg:block"
        style={{ backgroundImage: 'url(/images/Film Element.svg)', height: '225.6vh', width: '26vw' }}
      />

      {/* About Me Section */}
      <section
        id="about_me"
        className="relative bg-cover bg-no-repeat w-full py-20 px-4 md:px-12"
        style={{ backgroundImage: 'url(/images/image-4.png)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black text-4xl sm:text-6xl md:text-8xl mb-10">
            YANA SPASOVA
          </h2>

          {/* Bio Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
            <h3 className="text-base sm:text-lg font-normal">NATIONALITY: Bulgarian</h3>
            <h3 className="text-base sm:text-lg font-normal">BIRTHDAY: 2005.12.11</h3>
            <h3 className="text-base sm:text-lg font-normal">AGE: 19</h3>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { key: 'design_philo', label: 'Design Philosophy' },
              { key: 'curiosity', label: 'Creative Curiosity' },
              { key: 'approach', label: 'My Design Approach' },
            ].map(({ key, label }) => (
              <p
                key={key}
                onClick={() => setActiveTab(key as typeof activeTab)}
                className={`cursor-pointer text-lg sm:text-xl transition-colors underline-offset-4 ${
                  activeTab === key ? 'text-black underline' : 'text-gray-600 hover:underline'
                }`}
              >
                {label}
              </p>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl text-base sm:text-lg leading-relaxed">
            {activeTab === 'design_philo' && (
              <p>
                Design allows me to give shape to ideas — to translate thoughts into visuals that are both functional and expressive...
              </p>
            )}
            {activeTab === 'curiosity' && (
              <p>
                I'm constantly curious about how visual choices influence the way we interact with the world...
              </p>
            )}
            {activeTab === 'approach' && (
              <p>
                I approach design as a way of thinking — observing the world, finding patterns, and responding with thoughtful solutions...
              </p>
            )}
          </div>

          {/* Outro */}
          <p className="mt-10 max-w-xl text-sm sm:text-base">
            This portfolio represents a collection of my current explorations and the direction I'm moving toward as a designer.
          </p>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section id="learning_outcomes" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl mb-12">
            Learning Outcomes
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Interactive media', href: 'LO1.html' },
              { label: 'Dev & Version Control', href: 'LO2.html' },
              { label: 'Iterative Design', href: 'LO3.html' },
              { label: 'Professional Standard', href: 'LO4.html' },
              { label: 'Personal Leadership', href: 'LO5.html' },
            ].map(({ label, href }, idx) => (
              <button
                key={idx}
                onClick={() => (window.location.href = href)}
                className="w-full h-40 uppercase rounded-md text-[17px] font-medium bg-black/5 border-4 border-transparent transition-all duration-300 hover:bg-[#fce76f] hover:border-[#ffe26e] hover:shadow-[0_0_5px_#f7f08b,0_0_20px_#f7f08b,0_0_50px_#f7f08b,0_0_100px_#f7f08b]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
