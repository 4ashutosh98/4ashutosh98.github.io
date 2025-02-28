export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Master of Information Systems Management</h3>
            <p className="text-gray-600 mb-2">Carnegie Mellon University, Pittsburgh, PA</p>
            <p className="text-gray-500">Aug 2022 - Dec 2024</p>
            <p className="text-gray-600 mt-2">CGPA: 3.78/4.00</p>
            <p className="text-gray-600 mt-2">
              Relevant Coursework: Computational Data Science, Unstructured Data Analytics, Time Series Forecasting,
              Data Structures
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology - Electronics and Instrumentation Eng (Minor in Computer Science and Eng)
            </h3>
            <p className="text-gray-600 mb-2">Vellore Institute of Technology, Vellore, India</p>
            <p className="text-gray-500">Jul 2016 - Jun 2020</p>
            <p className="text-gray-600 mt-2">CGPA: 3.94/4.00</p>
            <p className="text-gray-600 mt-2">
              Relevant courses: Database Management systems, Neural networks, Python programming, Statistics, Operating
              Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

