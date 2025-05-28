import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Math and Search LLM Application",
      description:
        "Developed a Streamlit-powered AI application using Google Gemma 2 that solves mathematical problems with step-by-step reasoning and retrieves information from Wikipedia through an interactive chat interface.",
      technologies: ["LangChain", "Groq", "Streamlit", "Google Gemma 2", "Wikipedia API", "Python"],
      duration: "Feb 2025 – Mar 2025",
      image: "/math_and_search_llm.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/math-and-search-llm-app",
      demo: "https://math-and-search-llm-app-ash.streamlit.app/",
    },
    {
      title: "Search Engine LLM",
      description:
        "Developed an AI agent-powered search chatbot using Llama3 LLM with LangChain, Groq, and HuggingFace, integrating multiple search tools and handling multi-hop queries.",
      technologies: ["LangChain", "Groq", "HuggingFace", "Streamlit", "Ollama", "GitHub Actions"],
      duration: "Jan 2025 – Feb 2025",
      image: "/search-llm-app.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/Search-Engine-LLM-app",
      demo: "https://huggingface.co/spaces/ashutoshchoudhari/Search-Engine-LLM-app",
    },
    {
      title: "Blog Generation using AI",
      description:
        "Built a serverless AI-powered blog generator using AWS Lambda, Bedrock AI, and Streamlit, reducing manual content creation time by 80%.",
      technologies: ["AWS Bedrock", "Lambda", "S3", "Cloudwatch", "API Gateway", "Streamlit", "GitHub Actions"],
      duration: "Dec 2024 – Jan 2025",
      image: "/blog-generation-using-ai.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/Blog-Generation-using-AWS-Lambda-and-AWS-Bedrock",
      demo: "https://blog-generation-using-aws-lambda-and-aws-bedrock-ac.streamlit.app/",
    },
    {
      title: "SQL Query Chat LLM App",
      description:
        "Developed a natural language to SQL interface using Llama3 and LangChain that translates plain English to SQL queries for database interaction. Supports both SQLite and MySQL databases with an interactive Streamlit chat interface.",
      technologies: ["LangChain", "Groq", "Llama3", "Streamlit", "SQLite", "MySQL", "SQLAlchemy"],
      duration: "Mar 2025 – Apr 2025",
      image: "sql_query_chat_llm.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/sql-query-chat-llm-app",
      demo: "https://sql-query-chat-llm-app-ash.streamlit.app/",
    },
    {
      title: "Nexteer AI Docs Project",
      description:
        "This project is designed to process and compare PDF documents by extracting text from PDFs using Adobe PDF Extract API, storing and retrieving data from MongoDB for limiting API costs and faster processing, and comparing document sections using GPT-4o.",
      technologies: ["Adobe PDF Extract API", "MongoDB", "OpenAI GPT-4o", "Streamlit", "Python"],
      duration: "Aug 2024 – Dec 2024",
      image: "/nexteer_ai_docs.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/Nexteer-AI-Docs",
      demo: "https://nexteer-ai-docs-abumbwfz2xlbmcgvtrfvkr.streamlit.app/",
    },
    {
      title: "Food Classification Using Transfer Learning",
      description:
        "Applied transfer learning on EfficientNet to classify 101 food categories, achieving 84% accuracy and reducing training time by 77%.",
      technologies: ["Pytorch", "Tensorboard", "Efficientnet"],
      duration: "May 2024 – Jul 2024",
      image: "/food-classification.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/pytorch-deep-learning-files/blob/main/Notebook_7.ipynb",
    },
    {
      title: "Artificial Intelligence Policy Chatbot",
      description:
        "Fine-tuned Llama-2 7b model for AI policy-related inquiries, achieving significant improvements in BLEU, ROUGE, and METEOR scores.",
      technologies: ["Hugging Face", "PyTorch", "Large Language Models", "Generative AI"],
      duration: "Jan 2024 – Mar 2024",
      image: "/llama-finetuning.png?height=200&width=300",
      github: "https://github.com/4ashutosh98/Llama-finetuning-project",
    },
    {
      title: "Unisys Automated Invoice Processing",
      description:
        "Developed an advanced automated PDF invoice processing system using OpenAI GPT-4.0 and Azure Document Intelligence, improving data extraction accuracy to over 87%.",
      technologies: ["Azure AI Document Intelligence", "Open AI API", "Flask"],
      duration: "Jan 2024 – Mar 2024",
      image: "/unisys-project.png?height=200&width=300",
    },
    {
      title: "Question Answering System Development",
      description:
        "Fine-tuned a pre-trained BERT model for question-answering tasks, achieving 68% accuracy on the SQuAD test set.",
      technologies: ["Azure Machine Learning", "PyTorch", "nltk", "spaCy", "SentenceTransformers"],
      duration: "Sept 2023 – Nov 2023",
      image: "/question_answering_system.png?height=200&width=300",
    },
    {
      title: "CGM Systems Analysis",
      description:
        "Utilized NLP techniques for detailed analysis of CGM systems, enhancing understanding of consumer needs in diabetes management technology.",
      technologies: ["NLTK", "Scikit Learn", "genism", "matplotlib"],
      duration: "Aug 2023 – Dec 2023",
      image: "/cgm-systems.png?height=200&width=300",
    },
    {
      title: "Data Prism",
      description:
        "Designed and created a GUI application that increased resource accessibility by 36% for beginner students in data science.",
      technologies: ["PySimpleGUI", "Tkinter", "Selenium", "Beautiful Soup", "Pandas"],
      duration: "Aug 2022 – Dec 2022",
      image: "/data_prism.png?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-700">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Try Me
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

