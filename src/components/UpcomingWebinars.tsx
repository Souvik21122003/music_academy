'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
  
  {
    "title": "Introduction to Music Theory",
    "description": "Learn the basics of music theory, including scales, chords, and key signatures.",
    "date": "2024-07-10",
    "time": "10:00 AM - 11:30 AM",
     "link": "/"
        },
  
    {
    "title": "Advanced Guitar Techniques",
    "description": "Master advanced guitar techniques and improve your playing skills.",
    "date": "2024-07-15",
    "time": "2:00 PM - 3:30 PM",
    "link": "/"
     },
     {
    "title": "Vocal Training for Beginners",
    "description": "A comprehensive guide to vocal training for beginners.",
    "date": "2024-07-20",
    "time": "4:00 PM - 5:30 PM",
     "link": "/"
  },
  {
    "title": "Songwriting Workshop",
    "description": "Join our songwriting workshop to learn how to write and compose your own songs.",
    "date": "2024-07-25",
    "time": "6:00 PM - 7:30 PM",
   "link": "/"
  },
  {
    "title": "Music Production Basics",
    "description": "An introduction to music production, covering essential software and techniques.",
    "date": "2024-07-30",
    "time": "8:00 PM - 9:30 PM",
    "link": "/"
  }
]


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

         <div className="max-w-10xl mx-auto px-8">
        <HoverEffect items={featuredWebinars} />
         </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded-[22px] border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars