import Layout from '../components/Layout';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Layout title="Syntaxual - Modern Web Development">
      {/* Hero Section */}
      <section className="py-20">
        <div className="syntaxual-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-syntaxual-text-primary">Modern Solutions for </span>
              <span className="text-syntaxual-accent">Modern Problems</span>
            </h1>
            <p className="text-syntaxual-text-secondary text-xl mb-10">
              Syntaxual provides cutting-edge web development tools and services to help you build the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="syntaxual-button">Get Started</button>
              <button className="border border-syntaxual-accent text-syntaxual-accent px-4 py-2 rounded-md hover:bg-syntaxual-accent hover:bg-opacity-10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black bg-opacity-30">
        <div className="syntaxual-container">
          <h2 className="syntaxual-heading text-3xl text-center mb-16">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Stack",
                description: "Built with the latest technologies to ensure your project stays relevant.",
                icon: (
                  <svg className="w-12 h-12 text-syntaxual-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Performance Focused",
                description: "Optimized for speed and efficiency to provide the best user experience.",
                icon: (
                  <svg className="w-12 h-12 text-syntaxual-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Developer Friendly",
                description: "Intuitive APIs and comprehensive documentation make development a breeze.",
                icon: (
                  <svg className="w-12 h-12 text-syntaxual-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="syntaxual-card flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-syntaxual-accent text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-syntaxual-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="syntaxual-container">
          <h2 className="syntaxual-heading text-3xl text-center mb-16">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Syntaxual has completely transformed our development workflow. We're shipping features faster than ever before.",
                author: "Jane Doe",
                role: "CTO, TechCorp"
              },
              {
                quote: "The performance gains we've seen after switching to Syntaxual have been nothing short of remarkable.",
                author: "John Smith",
                role: "Lead Developer, StartupX"
              }
            ].map((testimonial, index) => (
              <div key={index} className="syntaxual-card">
                <p className="text-syntaxual-text-primary text-lg mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-syntaxual-accent font-bold">{testimonial.author}</p>
                  <p className="text-syntaxual-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-syntaxual-background to-black">
        <div className="syntaxual-container text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-syntaxual-text-primary">Ready to get started with </span>
            <span className="text-syntaxual-accent">Syntaxual</span>
            <span className="text-syntaxual-text-primary">?</span>
          </h2>
          <p className="text-syntaxual-text-secondary text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with our tools.
          </p>
          <button className="syntaxual-button text-lg px-8 py-3">
            Start Building Today
          </button>
        </div>
      </section>
    </Layout>
  );
}
