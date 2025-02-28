import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import GetInTouch from "@/components/get-in-touch"
import TableauVisualizations from "@/components/tableau"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <TableauVisualizations />
      <GetInTouch />
      <Footer />
      <BackToTop />
    </main>
  )
}

