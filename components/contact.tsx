import { Mail, Linkedin, Github, BarChart2 } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:4ashutosh98@gmail.com"
            className="flex items-center text-indigo-700 hover:text-indigo-500 transition-colors duration-300"
          >
            <Mail className="w-6 h-6 mr-2" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-choudhari/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-700 hover:text-indigo-500 transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ashutoshc8101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-700 hover:text-indigo-500 transition-colors duration-300"
          >
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </a>
          <a
            href="https://public.tableau.com/app/profile/your-tableau-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-700 hover:text-indigo-500 transition-colors duration-300"
          >
            <BarChart2 className="w-6 h-6 mr-2" />
            Tableau Public
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-indigo-800">Phone: (412) 626-9743</p>
          <p className="text-xl text-indigo-800">Location: Pittsburgh, PA</p>
        </div>
      </div>
    </section>
  )
}

