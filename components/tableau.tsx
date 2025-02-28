"use client"

import { useEffect } from "react"

export default function TableauVisualizations() {
  useEffect(() => {
    const initViz = () => {
      visualizations.forEach((viz) => {
        const divElement = document.getElementById(viz.id)
        if (divElement) {
          const vizElement = divElement.getElementsByTagName("object")[0]
          if (vizElement) {
            vizElement.style.width = "100%"
            vizElement.style.height = "800px" // Fixed height for better visibility
            const scriptElement = document.createElement("script")
            scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
            vizElement.parentNode.insertBefore(scriptElement, vizElement)
          }
        }
      })
    }

    // Wait for the DOM to be ready
    setTimeout(initViz, 1000)

    return () => {
      // Cleanup any existing visualizations when component unmounts
      const scripts = document.querySelectorAll('script[src*="tableau"]')
      scripts.forEach((script) => script.remove())
    }
  }, [])

  const visualizations = [
    {
      id: "viz1740708220483",
      name: "Ashutosh_Quident_energy_Story/NYSERDACleanEnergyProjectContractsAnalysisforEarly-StageCompanies",
      title: "NYSERDA Clean Energy Project Contracts Analysis for Early-Stage Companies",
    },
    {
      id: "viz1678763886813",
      name: "Ashutosh_CaseStudyChallenge/JobssearchforjuniorentrylevelrolesinMachineLearningaligneddisciplines",
      title: "Job Search for Junior/Entry-Level Roles in Machine Learning",
    },
    {
      id: "viz1678764026243",
      name: "Dashboards_DataStories_Ashutosh_Choudhari/Dashboard1",
      title: "Dashboard 1",
    },
  ]

  return (
    <section id="tableau" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Tableau Visualizations</h2>
        <div className="space-y-12">
          {visualizations.map((viz, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{viz.title}</h3>
                <div
                  className="tableauPlaceholder"
                  id={viz.id}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "800px",
                    margin: "0 auto",
                  }}
                >
                  <noscript>
                    <a href="#">
                      <img
                        alt={viz.title}
                        src={`https://public.tableau.com/static/images/${viz.name.split("/")[0]}/${viz.name.split("/")[1]}/1_rss.png`}
                        style={{ border: "none", width: "100%", height: "100%" }}
                      />
                    </a>
                  </noscript>
                  <object
                    className="tableauViz"
                    style={{
                      display: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                    <param name="embed_code_version" value="3" />
                    <param name="site_root" value="" />
                    <param name="name" value={viz.name} />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                    <param
                      name="static_image"
                      value={`https://public.tableau.com/static/images/${viz.name.split("/")[0]}/${viz.name.split("/")[1]}/1.png`}
                    />
                    <param name="animate_transition" value="yes" />
                    <param name="display_static_image" value="yes" />
                    <param name="display_spinner" value="yes" />
                    <param name="display_overlay" value="yes" />
                    <param name="display_count" value="yes" />
                    <param name="language" value="en-US" />
                  </object>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

