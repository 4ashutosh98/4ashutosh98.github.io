import { Mail, Linkedin, Github, BarChart2, Phone } from "lucide-react"

export default function Links() {
  return (
    <section id="links" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Connect With Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="mailto:4ashutosh98@gmail.com"
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Mail className="w-8 h-8 mr-4 text-indigo-600" />
            <span className="text-xl text-gray-800">4ashutosh98@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-choudhari/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Linkedin className="w-8 h-8 mr-4 text-blue-600" />
            <span className="text-xl text-gray-800">LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/ashutoshc8101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Github className="w-8 h-8 mr-4 text-gray-800" />
            <span className="text-xl text-gray-800">GitHub Profile</span>
          </a>
          <a
            href="https://public.tableau.com/app/profile/your-tableau-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <BarChart2 className="w-8 h-8 mr-4 text-orange-500" />
            <span className="text-xl text-gray-800">Tableau Public</span>
          </a>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <Phone className="w-8 h-8 mr-4 text-green-600" />
            <span className="text-xl text-gray-800">(412) 626-9743</span>
          </div>
        </div>
      </div>
    </section>
  )
}

