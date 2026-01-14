import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
        <div className="md:w-1/2 text-center md:text-left pl-8 md:pl-16">
          <h1 className="text-4xl font-bold mb-4">Ashutosh Choudhari</h1>
          <h2 className="text-2xl mb-6">Data Scientist & AI/ML Engineer</h2>
          <p className="mb-8">Carnegie Mellon graduate, engineering AI/ML solutions that bridge technology and business - turning data into decisions, problems into possibilities.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {[
              { label: "Get in Touch", href: "#contact" },
              { label: "GitHub", href: "https://github.com/4ashutosh98" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ashutoshchoudhari1489/" },
              { label: "Resume", href: "/AshutoshChoudhariResume.pdf" },
            ].map((button) => (
              <a
                key={button.label}
                href={button.href}
                target={button.href.startsWith("http") ? "_blank" : undefined}
                rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/AshutoshImage.jpg?height=300&width=300"
            alt="Ashutosh Choudhari"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
