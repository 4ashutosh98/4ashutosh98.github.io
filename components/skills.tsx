import { Code, Database, PenToolIcon as Tool, Cloud, Shield } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "R", "MATLAB"],
      icon: <Code className="w-6 h-6 text-indigo-600 mr-2" />,
    },
    {
      title: "Frameworks / Libraries",
      skills: [
        "PyTorch",
        "TensorFlow",
        "NLTK",
        "Hugging Face",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Flask",
        "LangChain",
      ],
      icon: <Database className="w-6 h-6 text-indigo-600 mr-2" />,
    },
    {
      title: "Tools",
      skills: [
        "Tableau",
        "Jira",
        "GitHub",
        "Docker",
        "MongoDB",
        "Neo4j",
        "FAISS",
        "Chroma",
        "Ollama",
        "SQLite",
        "Nvidia NIM",
      ],
      icon: <Tool className="w-6 h-6 text-indigo-600 mr-2" />,
    },
    {
      title: "Cloud Tools",
      skills: ["AWS Bedrock", "SageMaker", "Lambda", "S3", "API Gateway", "Azure ML Studio", "Vertex AI"],
      icon: <Cloud className="w-6 h-6 text-indigo-600 mr-2" />,
    },
    {
      title: "Cybersecurity Tools",
      skills: ["Splunk", "QRadar", "Exabeam", "CrowdStrike Falcon", "CarbonBlack", "Microsoft Defender 365"],
      icon: <Shield className="w-6 h-6 text-indigo-600 mr-2" />,
    },
  ]

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Certificate of Cloud Security Knowledge",
    "Agile Product Owner",
    "Agile Scrum Master",
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Skills & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-indigo-700">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

