export default function WorkExperience() {
  const experiences = [
    {
      company: "Nexteer Automotive",
      location: "Pittsburgh, PA",
      position: "Machine Learning Engineer (Student Worker)",
      duration: "Aug 2024 – Dec 2024",
      responsibilities: [
        "Created a document comparison application leveraging Python to extract, compare, and analyze PDF documents using Adobe PDF Extract API and OpenAI's GPT-4o, enhancing document management efficiency thus saving 200 human hours per month.",
        "Implemented user-friendly Streamlit GUI with a robust backend data handling system leveraging MongoDB for persistent caching, to minimize API call costs and improve processing speed by 5 times.",
      ],
    },
    {
      company: "Unisys",
      location: "Pittsburgh, PA",
      position: "AI Engineer (Student Worker)",
      duration: "Jan 2024 – Mar 2024",
      responsibilities: [
        "Improved PDF invoice data extraction accuracy from Oracle Fusion's 20% to 83% for 18 key fields across semi-structured formats by developing a Flask application powered by OpenAI GPT-4 and Azure Document Intelligence.",
        "Incorporated advanced prompt engineering techniques, including few-shot, chain-of-thought and zero-shot approaches, to enhance data extraction from semi-structured and unstructured invoices, reducing manual effort by 2 FTEs.",
      ],
    },
    {
      company: "MedSarthi LLC",
      location: "Phoenix, AZ",
      position: "Data Scientist",
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
        "Engineered advanced log analysis workflows using data from SIEM tools (Splunk, QRadar), EDRs, and OSINT tools identifying and mitigating suspicious activities across system, network, and endpoint logs.",
        "Generated over 100 detailed incident reports weekly, applying pattern recognition, anomaly detection, and OSINT tools to deliver actionable insights, driving a 32% reduction in security incidents through data-driven strategies.",
        "Utilized data analytics to monitor cybersecurity environments for potential threats across six high-profile clients, delivering actionable insights that safeguarded key assets.",
        "Collaborated with interdisciplinary teams to implement data-driven strategies, achieving a 32% reduction in security incidents for clients, highlighting my ability to leverage data in team settings and effectively communicate complex insights.",
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

