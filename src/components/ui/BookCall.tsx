'use client'

import React, { useState } from 'react'
import { Calendar, Clock, Video, Phone, Mail, User, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  phone?: string
  message?: string
  bookCall: boolean
  preferredDate?: string
  preferredTime?: string
  callType: 'zoom' | 'phone' | 'teams'
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    bookCall: false,
    preferredDate: '',
    preferredTime: '',
    callType: 'zoom'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // EmailJS configuration from environment variables
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID  
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  // Check if all required env vars are present
  React.useEffect(() => {
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are missing!')
    }
  }, [serviceId,publicKey,templateId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Prepare email template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message || 'No message provided',
        book_call: formData.bookCall ? 'Yes' : 'No',
        call_type: formData.bookCall ? formData.callType : 'N/A',
        preferred_date: formData.bookCall && formData.preferredDate ? formData.preferredDate : 'N/A',
        preferred_time: formData.bookCall && formData.preferredTime ? formData.preferredTime : 'N/A',
        submission_date: new Date().toLocaleString()
      }

      // Check if env vars are available
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing')
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (result.status === 200) {
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            bookCall: false,
            preferredDate: '',
            preferredTime: '',
            callType: 'zoom'
          })
        }, 2000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
       
        
        <div className="relative backdrop-blur-xl bg-gray-900/80 border border-gray-700/50 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-gray-300">Thank you for reaching out. We&aposll get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen mt-20 bg-black flex items-center justify-center p-4 relative overflow-hidden">
    

      <div className="relative w-full max-w-lg">
        {/* Main form container */}
        <div className="backdrop-blur-xl bg-gray-900/80 border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent mb-2">
              Contact Us
            </h1>
            <p className="text-gray-400">Let&aposs connect and discuss your project</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-purple-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-purple-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
              />
            </div>

            {/* Phone Field (Optional) */}
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-purple-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number (Optional)"
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70 resize-none"
              />
            </div>

            {/* Book a Call Section */}
            <div className="border-t border-gray-700/50 pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <input
                  type="checkbox"
                  name="bookCall"
                  id="bookCall"
                  checked={formData.bookCall}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-purple-500 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                />
                <label htmlFor="bookCall" className="text-white font-medium flex items-center">
                  <Video className="w-5 h-5 mr-2 text-purple-400" />
                  Book a Call
                </label>
              </div>

              {formData.bookCall && (
                <div className="space-y-4 ml-8 animate-in slide-in-from-top-4 duration-300">
                  {/* Call Type */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Preferred Platform</label>
                    <select
                      name="callType"
                      value={formData.callType}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    >
                      <option value="zoom">Zoom Meeting</option>
                      <option value="teams">Microsoft Teams</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                    <div className="relative group">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 p-4 bg-red-900/50 border border-red-600/50 rounded-xl text-red-300 animate-in slide-in-from-top-4 duration-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
            
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm