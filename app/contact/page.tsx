"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scareImageRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = new Audio("/contact/scream2.mp3")
    audioRef.current = audio

    const ctx = gsap.context(() => {
      gsap.set(scareImageRef.current, {
        opacity: 0,
        scale: 0.8,
      })

      const tl = gsap.timeline({ delay: 0.5 })

      tl.call(() => {
        if (audioRef.current) {
          audioRef.current.volume = 1
          audioRef.current.play().catch((e) => console.error("Audio play failed:", e))
        }
      })

      tl.to(scareImageRef.current, {
        opacity: 1,
        scale: 1.1,
        duration: 0.1,
        ease: "power4.out",
      })

      tl.to(
        containerRef.current,
        {
          x: -15,
          duration: 0.05,
          repeat: 15,
          yoyo: true,
        },
        "-=0.1",
      )

      tl.to(
        scareImageRef.current,
        {
          scale: 1.3,
          duration: 1,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        "-=0.5",
      )

      tl.to(
        containerRef.current,
        {
          x: () => gsap.utils.random(-10, 10),
          y: () => gsap.utils.random(-10, 10),
          duration: 0.1,
          repeat: -1,
        },
        "-=0.5",
      )
    }, containerRef)

    return () => {
      ctx.revert()
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  return (
    <main ref={containerRef} className="relative flex min-h-screen items-center justify-center bg-black px-4">
      <div ref={scareImageRef} className="fixed inset-0 flex items-center justify-center">
        <Image src="/contact/scare.jpg" alt="" fill className="object-cover" priority />
      </div>
    </main>
  )
}
