'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formState);
    alert('Thanks for your message! We\'ll get back to you soon.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="syntaxual-container py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <span className="text-syntaxual-text-primary">Get in </span>
        <span className="text-syntaxual-accent">Touch</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-syntaxual-accent">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="syntaxual-card">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-syntaxual-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-syntaxual-text-primary font-bold mb-1">Email</h3>
                  <p className="text-syntaxual-text-secondary">info@syntaxual.com</p>
                </div>
              </div>
            </div>
            
            <div className="syntaxual-card">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-syntaxual-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-syntaxual-text-primary font-bold mb-1">Phone</h3>
                  <p className="text-syntaxual-text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="syntaxual-card">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-syntaxual-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-syntaxual-text-primary font-bold mb-1">Address</h3>
                  <p className="text-syntaxual-text-secondary">
                    123 Tech Street<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="syntaxual-card">
              <h3 className="text-syntaxual-text-primary font-bold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-syntaxual-text-secondary hover:text-syntaxual-accent transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-syntaxual-text-secondary hover:text-syntaxual-accent transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-syntaxual-accent">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="syntaxual-card">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-syntaxual-text-primary mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-syntaxual-accent border-opacity-20 text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-syntaxual-text-primary mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-syntaxual-accent border-opacity-20 text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-syntaxual-text-primary mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-syntaxual-accent border-opacity-20 text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-syntaxual-text-primary mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border border-syntaxual-accent border-opacity-20 text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50"
                ></textarea>
              </div>
              
              <button type="submit" className="syntaxual-button w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
