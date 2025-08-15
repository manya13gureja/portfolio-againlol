"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"


import {
  Phone,
  Mail,
  Instagram,
  Twitter,
  Star,
  Check,
} from "lucide-react"


export default function ContactPage() {
  
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+91 70279 13149"

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }


  const CONTACT_INFO = [
    {
      icon: <Phone className="w-6 h-6 p-1 text-zinc-600 shrink-0 bg-slate-200 rounded-md" />,
      label: "",
      value: (
        <div
          onClick={handleCopy}
          className="relative group cursor-pointer flex items-center gap-2"
        >
          <span>{phoneNumber}</span>
          {copied && <Check className="w-4 h-4 text-green-500" />}
          <span className="absolute -top-6 left-0 bg-zinc-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {copied ? "Copied!" : "Click to copy"}
          </span>
        </div>
      ),
    },
    {
      icon: <Mail className="w-6 h-6 p-1 text-zinc-600 shrink-0 bg-slate-200 rounded-md" />,
      label: "",
      value: (
        <a
          href="mailto:manyaagureja13@gmail.com"
          className="hover:underline underline-offset-4"
          aria-label="Email"
        >
          manyaagureja13@gmail.com
        </a>
      ),
    },
    {
      icon: <Twitter className="w-6 h-6 p-1 text-zinc-600 shrink-0 bg-slate-200 rounded-md" />,
      label: "",
      value: (
        <a
          href="https://x.com/milkfuggler"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          Twitter
        </a>
      ),
    },
    {
      icon: <Star className="w-6 h-6 p-1 text-zinc-600 shrink-0 bg-slate-200 rounded-md" />,
      label: "",
      value: (
        <a
          href="https://www.are.na/manya-gureja/channels"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          are.na
        </a>
      ),
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <main id="main-content" className="relative max-w-4xl mx-auto py-52">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="relative w-24 h-24 min-w-[6rem] sm:w-28 sm:h-28 rounded-full overflow-hidden border border-zinc-700">
              <Image
                src="/avatar.jpg"
                alt="Manya Gureja"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold leading-tight flex items-center gap-2">
                Manya Gureja{" "}
                <span className="text-sm text-gray-400">she/her</span>
              </h1>
              <p className="text-zinc-400 mt-1 text-sm tracking-wide">
                Design Engineer
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-32">
            {CONTACT_INFO.map(({ icon, label, value }, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {icon}
                <div>
                  {label && <span className="font-medium">{label} </span>}
                  {value}
                </div>
              </div>
            ))}
          </div>

              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden inline-block mt-48 w-[820px]">
          {/* Map Section */}
          <div className="relative">
           <iframe
            src="https://leafletmapcomponent.vercel.app/"
            className="w-full block"
            style={{
              border: "none",
              height: "320px",
              display: "block",
            }}
            scrolling="no"
            title="Leaflet Map"
          />
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              mapbox
            </div>
          </div>

          {/* Text Section */}
          <div className="p-2 text-center text-white">
            
            <p className="text-gray-400 mt-3">
             
              <a
                href="mailto:manyaagureja13@gmail.com"
                className="underline hover:text-white transition-colors"
              >
               Let's connect
              </a>{" "}
              
            </p>
          </div>
        </div>
        </main>
      </div>
    </PageTransition>
  )
}