import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">ML Vision</span>
          </a>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/"><a className="text-gray-300 hover:text-white">Home</a></Link>
          <Link href="#"><a className="text-gray-300 hover:text-white">Courses</a></Link>
          <Link href="#"><a className="text-gray-300 hover:text-white">Playground</a></Link>
        </nav>
        
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium">
          Sign In
        </button>
      </div>
    </header>
  )
}
