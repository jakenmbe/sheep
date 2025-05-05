"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

  return (
    <div className="mb-4 space-y-8 px-4 sheep-watermark">
      <h1 className="font-bubbles text-center text-4xl">Welcome to the SHEEP game</h1>
      <p className="mx-auto max-w-xl text-center text-lg">
        Many sheep are about to be released into the wild, but the wolves are on the prowl. Can you help the sheep survive? Or will you be the wolf that catches them?
      </p>

      <ul className="flex flex-col items-center justify-center gap-5 sm:flex-row md:text-[20px]">
        <li>
          <Link
            href="/sheep"
            className="sheep-button"
          >
            Get SHEEP
          </Link>
        </li>
        <li>
          <Link
            href="/wolf-nft"
            className="sheep-button"
          >
            Get Wolf
          </Link>
        </li>
        <li>
          <Link
            href="/audit"
            aria-label="Audit Report"
            target="_blank"
            rel="norefferer noopener"
            className="muted-button"
          >
            Audit
          </Link>
        </li>
      </ul>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-1 flex-col lg:items-center">
          <h2 className="text-3xl font-semibold lg:text-center">Watch an explainer video</h2>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={videoDialogOpen}
            data-state={videoDialogOpen ? "open" : "closed"}
            data-slot="dialog-trigger"
            className="group relative max-w-max cursor-pointer"
            onClick={() => setVideoDialogOpen(true)}
          >
            <Image
              alt="YouTube thumbnail"
              className="aspect-video object-contain"
              width={528}
              height={297}
              src="/youtube_thumbnail.png"
              priority
            />
            <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
              <div className="flex size-24 items-center justify-center rounded-full backdrop-blur-sm">
                <div className="relative flex size-16 scale-100 items-center justify-center rounded-full shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play size-8 scale-100 fill-red-500 text-red-500 transition-transform duration-200 ease-out group-hover:scale-105"
                    style={{
                      filter: "drop-shadow(rgba(0, 0, 0, 0.07) 0px 4px 3px) drop-shadow(rgba(0, 0, 0, 0.06) 0px 2px 2px)"
                    }}
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {videoDialogOpen && (
            <>
              {/* 背景遮罩 */}
              <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={() => setVideoDialogOpen(false)}
              ></div>

              {/* 对话框 */}
              <div
                role="dialog"
                aria-describedby="dialog-description"
                aria-labelledby="dialog-title"
                data-state="open"
                data-slot="dialog-content"
                className="bg-sheep data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-xl aspect-video"
                style={{ pointerEvents: "auto" }}
              >
                <div data-slot="dialog-header" className="flex flex-col gap-2 text-center sm:text-left">
                  <h2 id="dialog-title" data-slot="dialog-title" className="text-lg leading-none font-semibold">
                    Understand Sheep
                  </h2>
                  <p id="dialog-description" data-slot="dialog-description" className="text-muted-foreground text-sm">
                    Watch this video to understand the sheep better.
                  </p>
                </div>

                <iframe
                  width="528"
                  height="297"
                  src="https://www.youtube.com/embed/YwEGWxUQ24c?si=i5cEnMav6BkMXoQh"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <button
                  type="button"
                  className="ring-offset-sheep focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                  onClick={() => setVideoDialogOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="text-3xl font-semibold mb-4 lg:text-center py-2 px-4 rounded-lg inline-block lg:self-center">Play it safe</h2>
          <div className="flex flex-grow flex-col justify-center lg:items-center">
            <div className="relative w-[256px] h-[143px]">
              <Image
                src="/spearbit.svg"
                alt="spearbit logo"
                fill
                className="object-contain"
                sizes="256px"
              />
            </div>
            <p className="max-w-[528px] lg:text-center">
              Smart contracts audited and verified by Spearbit — the gold standard in Web3 security
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
