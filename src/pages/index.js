import Head from 'next/head'
import Header from '../components/Header'
import CourseTile from '../components/CourseTile'
import InteractiveNN from '../components/InteractiveNN'
import DataVisualizer from '../components/DataVisualizer'
import Footer from '../components/Footer'

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "ML Fundamentals",
      description: "Learn core machine learning concepts",
      image: "/images/ml-fundamentals.jpg",
      video: "/videos/ml-preview.mp4"
    },
    {
      id: 2,
      title: "Neural Networks",
      description: "From perceptrons to deep learning",
      image: "/images/neural-networks.jpg",
      video: "/videos/nn-preview.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>Learn ML & AI Visually</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Learn <span className="text-purple-400">Machine Learning</span> Visually
          </h1>
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
            <InteractiveNN />
          </div>
        </section>

        {/* Course Grid */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map(course => (
              <CourseTile key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8">Playground</h2>
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8">
            <DataVisualizer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
