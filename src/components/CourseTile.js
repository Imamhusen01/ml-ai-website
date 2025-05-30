import { useState } from 'react'

export default function CourseTile({ course }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {isHovered ? (
          <div className="w-full h-full bg-purple-900 flex items-center justify-center">
            <p className="text-white text-lg">Video Preview</p>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <p className="text-gray-400">Course Image</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {course.title}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-300 mb-4">{course.description}</p>
        <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium">
          Start Course
        </button>
      </div>
    </div>
  )
}
