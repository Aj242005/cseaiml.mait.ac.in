"use client"

import React, { useState, useRef, useEffect } from "react"
import { X, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/Button"

const MinimalHoverRevealCard = ({ imageUrl, title, description }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [hoverCardPosition, setHoverCardPosition] = useState({ top: 0, left: 0 })
    const cardRef = useRef(null)
    const hoverCardRef = useRef(null)
    const hoverTimeoutRef = useRef(null)

    // Calculate hover card position
    useEffect(() => {
        if (isHovered && cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect()
            const viewportWidth = window.innerWidth
            const cardWidth = Math.min(400, Math.max(320, description.length * 1.8))

            let left = rect.right + 16

            // Check if card would overflow viewport
            if (left + cardWidth > viewportWidth - 20) {
                left = rect.left - cardWidth - 16
            }

            setHoverCardPosition({
                top: Math.max(20, rect.top),
                left: Math.max(20, left),
            })
        }
    }, [isHovered, description.length])

    // Dynamic height calculation
    const getCardHeight = () => {
        const baseHeight = 200
        const wordsCount = description.split(" ").length
        const additionalHeight = Math.min(wordsCount * 2.5, 400)
        return Math.max(baseHeight, additionalHeight)
    }

    const handleCardClick = (e) => {
        e.stopPropagation()
        setIsClicked(true)
        setIsHovered(false)
    }

    const handleCloseClick = (e) => {
        e.stopPropagation()
        setIsClicked(false)
    }

    // Enhanced hover handling with delay
    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
        }
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovered(false)
        }, 100) // Small delay to allow moving to hover card
    }

    const handleHoverCardMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
        }
        setIsHovered(true)
    }

    const handleHoverCardMouseLeave = () => {
        setIsHovered(false)
    }

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") setIsClicked(false)
        }

        if (isClicked) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
            return () => {
                document.removeEventListener("keydown", handleEscape)
                document.body.style.overflow = "unset"
            }
        }
    }, [isClicked])

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
        }
    }, [])

    return (
        <>
            {/* Main Card */}
            <div
                ref={cardRef}
                className=" scale-[0.92] group relative h-150 w-120 cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
            >
                {/* Image */}
                <div className="relative h-120 overflow-hidden">
                    <img
                        src={imageUrl || "/placeholder.svg?height=300&width=300&query=minimal clean background"}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">{title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{description.substring(0, 120)}...</p>

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Hover Card */}
            {isHovered && (
                <div
                    ref={hoverCardRef}
                    className="fixed z-50 animate-in slide-in-from-left-2 fade-in duration-200"
                    style={{
                        top: `${hoverCardPosition.top}px`,
                        left: `${hoverCardPosition.left}px`,
                        height: `${getCardHeight()}px`,
                        width: Math.min(400, Math.max(320, description.length * 1.8)),
                    }}
                    onMouseEnter={handleHoverCardMouseEnter}
                    onMouseLeave={handleHoverCardMouseLeave}
                >
                    <div className="h-full w-full rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden">
                        <div className="h-full flex flex-col p-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 leading-tight flex-shrink-0">{title}</h4>

                            {/* Scrollable content area */}
                            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Persistent Modal */}
            {isClicked && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                        onClick={handleCloseClick}
                    />

                    {/* Modal */}
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-in zoom-in-95 fade-in duration-200">
                        <div
                            className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                            style={{
                                width: Math.min(600, Math.max(480, description.length * 2)),
                                maxHeight: "80vh",
                            }}
                        >
                            {/* Header */}
                            <div className="relative h-110 object- scale-[0.9] flex-shrink-0">
                                <img
                                    src={imageUrl || "/placeholder.svg?height=300&width=600&query=minimal modal header"}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />

                                {/* Close Button */}
                                <Button
                                    onClick={handleCloseClick}
                                    size="sm"
                                    variant="ghost"
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full w-8 h-8 p-0 shadow-sm"
                                >
                                    <X className="w-4 h-4" />
                                </Button>

                                {/* Title */}
                                <div className="absolute bottom-4 left-6 right-6">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-sm">{title}</h2>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex flex-col" style={{ maxHeight: "calc(80vh - 12rem)" }}>
                                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

                                    {/* Action Button */}
                                    <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                                        <ArrowUpRight className="w-4 h-4 mr-2" />
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background-color: #f3f4f6;
          border-radius: 3px;
        }
        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 3px;
        }
        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
      `}</style>
        </>
    )
}

export default MinimalHoverRevealCard
