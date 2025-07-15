import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_6013u2p'; 
    const TEMPLATE_ID = 'template_bpb7pzf';
    const PUBLIC_KEY = 'DjDQckvFe3hqNP53_'; 

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatusMessage('Error: EmailJS IDs tidak dikonfigurasi.');
      return;
    }

    setIsSending(true);
    setStatusMessage('Mengirim pesan...');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Pengiriman berhasil:', result.text);
          setStatusMessage('Pesan berhasil dikirim!');
          form.current.reset(); 
      }, (error) => {
          console.error('Pengiriman gagal:', error);
          setStatusMessage('Gagal mengirim pesan. Silakan coba lagi.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen py-16 flex justify-center font-sans">
      <div className="bg-[#1a2c4e] shadow-2xl rounded-xl p-8 max-w-2xl w-full mx-4">
        
        <div className="text-center mb-10 text-[#8892b0]">
          <p className="text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-[#8892b0] mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-[#0c1a2d] border border-[#2d3a5a] text-[#c0d0e6] focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-[#8892b0] mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-[#0c1a2d] border border-[#2d3a5a] text-[#c0d0e6] focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#8892b0] mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 rounded-lg bg-[#0c1a2d] border border-[#2d3a5a] text-[#c0d0e6] focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#8892b0] mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full p-3 rounded-lg bg-[#0c1a2d] border border-[#2d3a5a] text-[#c0d0e6] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-purple-700 to-blue-700 
                       hover:from-purple-600 hover:to-blue-600 
                       focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 
                       transition duration-300"
            disabled={isSending}
          >
            {isSending ? 'Mengirim...' : 'Send Message'}
          </button>
        </form>

        {statusMessage && (
          <p className="text-center mt-4 text-sm font-medium text-[#8892b0]">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;