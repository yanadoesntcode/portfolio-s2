'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="flex ml-8 items-center h-[17vh] w-[90rem] sticky top-0 z-[6]">
      <button
        onClick={() => router.push('/')}
        className="text-sm hover:cursor-default p-2 glow-button"
        style={{
          fontFamily: "'Black Mango'",
        }}
      >
        <Image
          src="/images/Logo_LO.svg"
          alt="Logo"
          width={45}
          height={45}
          className="hover:cursor-default"
          priority
        />
      </button>

      <div>
        <ul className="flex gap-8 list-none text-[1.5rem] nav_links">
          <button className="glow-button" onClick={() => router.push('/Lo1')}>
            1: Interactive Media products
          </button>
          <button className="glow-button" onClick={() => router.push('/Lo2')}>
            2: Dev & Version Control
          </button>
          <button className="glow-button" onClick={() => router.push('/Lo3')}>
            3: Iterative Design
          </button>
          <button className="glow-button" onClick={() => router.push('/Lo4')}>
            4: Professional Standard
          </button>
          <button className="glow-button" onClick={() => router.push('/Lo5')}>
            5: Personal Leadership
          </button>
        </ul>
      </div>
    </nav>
  )
}
