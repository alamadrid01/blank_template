import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const guestLinks = [
    {title: "Blog", link: "/blog"},
    {title: "Events", link: "/pricing"},
    {title: "Press", link: "/contact"},
    {title: "Privacy", link: "/about"},
    {title: "Terms", link: "/terms"},
    {title: "Contact", link: "/contact"},
  ]

  return (
    <div className='py-20 container flex justify-between max-w-7xl'>
      <div className="flex flex-col gap-40">
        <div className="flex flex-col gap-3">
        <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
            <h1 className="text-3xl text-text-header font-[family-name:var(--font-nav)] -ml-2 font-semibold">Threadamp</h1>
          </div>
          <p className="text-xs text-text-secondary">© 2025 Threadamp.com, Inc.</p>
        </div>

        <div className="flex items-center gap-7">
          <FaXTwitter className="text-2xl text-text-header" />
          <FaInstagram className="text-2xl text-text-header" />
          <FaTiktok className="text-2xl text-text-header" />
          <FaFacebook className="text-2xl text-text-header" />
          <FaLinkedin className="text-2xl text-text-header" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-32">
        <div className="flex flex-col gap-6">
          <h1 className="text-text-paragraph text-xs mb-4 uppercase font-bold">Guest Links</h1>
          {guestLinks.map(({title, link}, index) => (
            <Link key={index} href={link}>
              <p className="text-text-header hover:underline">{title}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-text-paragraph text-xs mb-4 uppercase font-bold">Guest Links</h1>
          {guestLinks.map(({title, link}, index) => (
            <Link key={index} href={link}>
              <p className="text-text-header hover:underline">{title}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-text-paragraph text-xs mb-4 uppercase font-bold">Guest Links</h1>
          {guestLinks.map(({title, link}, index) => (
            <Link key={index} href={link}>
              <p className="text-text-header hover:underline">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
