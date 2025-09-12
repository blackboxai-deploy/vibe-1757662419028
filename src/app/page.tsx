"use client"

import { useState } from "react"
import SlideNavigation from "@/components/SlideNavigation"
import TitleSlide from "@/components/slides/TitleSlide"
import PadmaShriSlide from "@/components/slides/PadmaShriSlide"
import DoctorateslSlide from "@/components/slides/DoctorateslSlide"
import ResearchSlide from "@/components/slides/ResearchSlide"
import BookSlide from "@/components/slides/BookSlide"
import TimelineSlide from "@/components/slides/TimelineSlide"
import MessagingSlide from "@/components/slides/MessagingSlide"

const slides = [
  { id: 0, title: "Title", component: TitleSlide },
  { id: 1, title: "Padma Shri Strategy", component: PadmaShriSlide },
  { id: 2, title: "International Doctorate", component: DoctorateslSlide },
  { id: 3, title: "Research & PhD", component: ResearchSlide },
  { id: 4, title: "Book & Legacy", component: BookSlide },
  { id: 5, title: "Execution Timeline", component: TimelineSlide },
  { id: 6, title: "Messaging Framework", component: MessagingSlide },
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    if (!isFullScreen) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">
            पंडित प्रदीप मिश्रा जी
          </h1>
          <h2 className="text-xl md:text-2xl text-amber-700 font-semibold">
            Recognition &amp; Honors Strategic Plan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-3"></div>
        </div>

        {/* Main Presentation Area */}
        <div className="relative">
          {/* Slide Container */}
          <div className="bg-white rounded-lg shadow-2xl border border-orange-200 overflow-hidden">
            <div className="min-h-[600px] md:min-h-[700px]">
              <CurrentSlideComponent />
            </div>
          </div>

          {/* Navigation */}
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onNext={nextSlide}
            onPrev={prevSlide}
            onGoToSlide={goToSlide}
            onToggleFullScreen={toggleFullScreen}
            isFullScreen={isFullScreen}
            slides={slides}
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-orange-100 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-400 to-amber-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-sm text-orange-600">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>
    </div>
  )
}