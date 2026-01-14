"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FiTool } from "react-icons/fi"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MaintenancePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, subheadingRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30,
      })
      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 20,
      })
      gsap.set(badgeRef.current, {
        opacity: 0,
        y: -10,
      })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.5,
      })
        .to(badgeRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center bg-background px-4 opacity-0"
      style={{
        backgroundImage: "url('grid-pattern-dark.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <div ref={badgeRef} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 border-2 border-primary bg-primary/10 px-4 py-1.5">
            <FiTool className="text-lg text-primary" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              System Offline
            </span>
          </div>
        </div>

        <h1
          ref={headingRef}
          className="mb-4 font-mono text-5xl font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl"
        >
          Under Maintenance
        </h1>

        <p ref={subheadingRef} className="mb-6 font-sans text-xl font-semibold text-muted-foreground sm:text-2xl">
          We&apos;re making improvements
        </p>

        <p
          ref={descriptionRef}
          className="mb-10 font-sans text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Our system is currently undergoing scheduled maintenance to enhance performance and security. We apologize for
          any inconvenience and will be back online shortly.
        </p>

        <div ref={buttonsRef} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary bg-transparent font-mono hover:bg-primary/10 sm:w-auto sm:px-8"
              >
                Why We&apos;re Down
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-none border-2 sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-mono text-2xl">Technical Details</DialogTitle>
                <DialogDescription className="sr-only">Reasons for the maintenance downtime</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-semibold text-foreground">1. Framework Migration</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Upgrading to a more efficient framework to ensure the page remains using the best technologies always.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-semibold text-foreground">2. Major style recode</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Making our website look more realistic and include more features.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-semibold text-foreground">3. Going OSS</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    After a whole year being Closed Source, we are releasing the ability to contribute, clone and create your own instance! Enjoy this new stage.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full border-2 border-primary bg-primary font-mono hover:bg-primary/90 sm:w-auto sm:px-8"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
