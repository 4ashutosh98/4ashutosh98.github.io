export default function WorkExperience() {
  const experiences = [
    {
      company: "Pyramyd",
      location: "Remote",
      position: "AI/ML Engineer",
      duration: "Jun 2025 – Present",
      responsibilities: [
        "Designed a transformer-based ML model in PyTorch to predict ratings for software product reviews achieving 87% accuracy.",
        "Developed AI-powered RFP Requirements Extractor using o4-mini LLM and Azure AI Search, implementing parallel processing architecture to extract, categorize requirements from proposal documents with 90%+ accuracy across documents.",
        "Optimized performance for 5x concurrent processing with vector search for intelligent document cross-referencing.",
      ],
    },
    {
      company: "Confirmed LLC",
      location: "Pittsburgh, PA",
      position: "Software Developer",
      duration: "Feb 2025 – Sept 2025",
      responsibilities: [
        "Developed microservice using LangChain, FastAPI, Azure Container Apps for nametag scanning, achieving 92% accuracy.",
        "Integrated Python service with .NET backend via REST APIs, optimized SQL query performance by 43% through NL-to-SQL.",
        "Built CI/CD pipeline in Azure DevOps with pytest testing and Docker deployment; reduced deployment time by 70%.",
      ],
    },
    {
      company: "Nexteer Automotive",
      location: "Pittsburgh, PA",
      position: "Machine Learning Engineer (Student Consultant)",
      duration: "Aug 2024 – Dec 2024",
      responsibilities: [
        "Created document comparison application to extract, compare, and analyze PDF documents using Azure AI Document Intelligence, Adobe PDF Extract API and OpenAI's GPT-4o, enhancing document management efficiency and saving 2 FTEs.",
        "Implemented user-friendly Streamlit GUI with a robust backend data handling system leveraging MongoDB for persistent caching, to minimize API call costs and improve processing speed by 5 times.",
      ],
    },
    {
      company: "Unisys",
      location: "Pittsburgh, PA",
      position: "AI Engineer (Student Consultant)",
      duration: "Jan 2024 – Mar 2024",
      responsibilities: [
        "Improved PDF invoice data extraction accuracy from Oracle Fusion's 20% to 83% for 18 key fields across semi-structured formats by developing a Flask application powered by OpenAI GPT-4 and Azure Document Intelligence.",
        "Incorporated advanced prompt engineering techniques, including few-shot, chain-of-thought and zero-shot approaches, to enhance data extraction from semi-structured and unstructured invoices, reducing manual effort by 2 FTEs.",
      ],
    },
    {
      company: "MedSarthi LLC",
      location: "Remote",
      position: "Data Scientist Intern",
      duration: "Jun 2023 - Aug 2023",
      responsibilities: [
        "Designed and implemented a data-driven recommendation system for medical graduates, leveraging A/B testing and regression analysis to optimize profiles and develop a weighted scoring algorithm, boosting residency acceptance rates by 14%.",
        "Architected a comprehensive web platform using OpenAI API, HTML, JavaScript, React, Flask, PostgreSQL, and Heroku, enabling streamlined service delivery and advanced analytics.",
        "Applied clustering techniques and predictive modeling to analyze student data, enabling personalized academic recommendations that improved student outcomes and targeted preparation strategies.",
      ],
    },
    {
      company: "Deloitte USI",
      location: "Hyderabad, India",
      position: "Solution Delivery Analyst",
      duration: "Jun 2021 - Jul 2022",
      responsibilities: [
        "Developed a Python-based IOC triage tool to process 500+ IPs, domains, URLs, and emails daily, classifying inputs, and integrating OSINT APIs (VirusTotal, WHOIS, AbuseIPDB), reducing average query time by 65% with parallel execution.",
        "Architected a Flask REST backend with PostgreSQL and Redis, exposing endpoints for IOC normalization, rate-limit handling, and API key management, enabling multi-user scalability and cutting redundant OSINT calls by 40%.",
        "Built a React-based frontend with secure API integration to provide dashboards, results tables, and export workflows (Markdown/PDF/CSV), ensuring consistent and auditable threat intelligence reporting across environments.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-700">{exp.position}</h3>
              <p className="text-gray-600">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

