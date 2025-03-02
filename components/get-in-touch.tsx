"use client"

import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from "emailjs-com"

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

    if (!serviceId || !templateId || !userId) {
      alert("EmailJS configuration is missing. Please check your setup.")
      return
    }

    try {
      await emailjs.send(serviceId, templateId, formData, userId)
      setSuccessMessage(
        "Your details were sent to Ashutosh. He will be in touch with you shortly."
      )
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send message:", error)
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Contact me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:4ashutosh98@gmail.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>4ashutosh98@gmail.com</span>
              </a>
              <a
                href="tel:4126269743"
                className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>(412) 626-9743</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Pittsburgh, PA</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 transition-shadow duration-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 transition-shadow duration-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2 h-32 transition-shadow duration-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
        {successMessage && (
          <div className="mt-4 text-green-600 text-center">{successMessage}</div>
        )}
      </div>
    </section>
  )
}
