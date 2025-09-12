"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3x3, Play } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onNext: () => void
  onPrev: () => void
  onGoToSlide: (slideIndex: number) => void
  onToggleFullScreen: () => void
  isFullScreen: boolean
  slides: Array<{ id: number; title: string }>
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoToSlide,
  onToggleFullScreen,
  isFullScreen,
  slides,
}: SlideNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      {/* Left Side - Previous Button */}
      <Button
        onClick={onPrev}
        disabled={currentSlide === 0}
        variant="outline"
        size="lg"
        className="border-orange-200 text-orange-700 hover:bg-orange-50 disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Previous
      </Button>

      {/* Center - Controls */}
      <div className="flex items-center space-x-2">
        {/* Slide Overview */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="lg" className="border-orange-200 text-orange-700 hover:bg-orange-50">
              <Grid3x3 className="w-4 h-4 mr-2" />
              Slides
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            {slides.map((slide, index) => (
              <DropdownMenuItem
                key={slide.id}
                onClick={() => onGoToSlide(index)}
                className={`cursor-pointer ${
                  currentSlide === index ? "bg-orange-50 text-orange-700 font-semibold" : ""
                }`}
              >
                <span className="mr-2">{index + 1}.</span>
                {slide.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Presentation Mode */}
        <Button
          onClick={onToggleFullScreen}
          variant="outline"
          size="lg"
          className="border-orange-200 text-orange-700 hover:bg-orange-50"
        >
          {isFullScreen ? (
            <>
              <Minimize className="w-4 h-4 mr-2" />
              Exit
            </>
          ) : (
            <>
              <Maximize className="w-4 h-4 mr-2" />
              Present
            </>
          )}
        </Button>

        {/* Auto Play (Future Enhancement) */}
        <Button
          variant="outline"
          size="lg"
          className="border-orange-200 text-orange-700 hover:bg-orange-50"
          disabled
        >
          <Play className="w-4 h-4 mr-2" />
          Auto
        </Button>
      </div>

      {/* Right Side - Next Button */}
      <Button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        variant="outline"
        size="lg"
        className="border-orange-200 text-orange-700 hover:bg-orange-50 disabled:opacity-50"
      >
        Next
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  )
}