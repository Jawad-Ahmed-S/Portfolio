"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone, Mail, User, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  bookCall: boolean;
  preferredDate?: string;
  preferredTime?: string;
  callType: 'zoom' | 'phone' | 'teams';
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  React.useEffect(() => {
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are missing!');
    }
  }, [serviceId, publicKey, templateId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing.');
      }

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
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            bookCall: false,
            preferredDate: '',
            preferredTime: '',
            callType: 'zoom'
          });
        }, 2000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="relative backdrop-blur-xl bg-[#333333]/80 border border-[#333333]/50 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-[#FFC300] mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Message Sent!</h2>
          <p className="text-[#333333]">Thank you for reaching out. We&apos;ll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-[#FAFAFA] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative w-full max-w-lg">
        <div className="backdrop-blur-xl bg-white border border-[#E0E0E0] rounded-[5px] p-8 shadow-2xl hover:shadow-[#FFC300]/20 transition-all duration-500">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">
              Contact Us
            </h1>
            <p className="text-[#333333]">Let&apos;s connect and discuss your project</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333333] w-5 h-5 transition-colors group-focus-within:text-[#FFC300]" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-[8px] text-[#1C1C1C] placeholder-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent transition-all duration-300 hover:bg-[#F5F5F5]"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333333] w-5 h-5 transition-colors group-focus-within:text-[#FFC300]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-[5px] text-[#1C1C1C] placeholder-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent transition-all duration-300 hover:bg-[#F5F5F5]"
              />
            </div>

            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333333] w-5 h-5 transition-colors group-focus-within:text-[#FFC300]" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number (Optional)"
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-[5px] text-[#1C1C1C] placeholder-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent transition-all duration-300 hover:bg-[#F5F5F5]"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full p-4 bg-white border border-[#E0E0E0] rounded-[5px] text-[#1C1C1C] placeholder-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent transition-all duration-300 hover:bg-[#F5F5F5] resize-none"
              />
            </div>

            <div className="border-t border-[#E0E0E0] pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <input
                    type="checkbox"
                    name="bookCall"
                    id="bookCall"
                    checked={formData.bookCall}
                    onChange={handleInputChange}
                    className="w-5 h-5 bg-white border-2 border-[#FFC300] rounded-[6px] focus:ring-[#FFC300] focus:ring-2 checked:bg-white checked:text-[#FFC300]"
                  />

                <label htmlFor="bookCall" className="text-[#1C1C1C] font-medium flex items-center">
                  <Video className="w-5 h-5 mr-2 text-[#FFC300]" />
                  Book a Call
                </label>
              </div>

              {formData.bookCall && (
                <div className="space-y-4 ml-8 animate-in slide-in-from-top-4 duration-300">
                  <div>
                    <label className="block text-[#333333] text-sm mb-2">Preferred Platform</label>
                    <select
                      name="callType"
                      value={formData.callType}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white border border-[#E0E0E0] rounded-[5px] text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
                    >
                      <option value="zoom">Zoom Meeting</option>
                      <option value="teams">Microsoft Teams</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#333333] w-4 h-4" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-white border border-[#E0E0E0] rounded-[5px] text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
                      />
                    </div>
                    <div className="relative group">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#333333] w-4 h-4" />
                      <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-white border border-[#E0E0E0] rounded-[5px] text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="flex items-center space-x-2 p-4 bg-red-100 border border-red-300 rounded-[5px] text-red-700 animate-in slide-in-from-top-4 duration-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 font-semibold bg-[#FFC300] hover:bg-[#e6b200] text-[#1C1C1C] rounded-[5px] font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#1C1C1C] border-t-transparent rounded-full animate-spin"></div>
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
  );
};

export default ContactForm;
