import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks ${formData.name}! I'll get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto">

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
      <div className="w-16 h-1 bg-blue-400 mb-10"></div>

      <p className="text-gray-400 mb-8">
        Have a project in mind or just want to say hi? Fill out the form below!
      </p>

      <div className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-400 transition"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-400 transition resize-none"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>

      </div>
    </section>
  )
}

export default Contact