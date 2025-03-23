import React from 'react';


export default function Features() {
  return (
    <div className="syntaxual-container py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <span className="text-syntaxual-accent">Powerful</span> Features
      </h1>
      
      <div className="space-y-24">
        {[
          {
            title: "Modern Development Stack",
            description: "Build with the latest technologies including React, Next.js, and more.",
            features: [
              "React and Next.js integration",
              "TypeScript support out of the box",
              "Modern CSS solutions with Tailwind CSS",
              "API routes for backend functionality"
            ],
            image: "/feature-1.jpg",
            reverse: false
          },
          {
            title: "Performance Optimized",
            description: "Deliver lightning-fast experiences to your users with our performance-focused approach.",
            features: [
              "Automatic code splitting",
              "Server-side rendering and static generation",
              "Image optimization",
              "Efficient bundling and tree shaking"
            ],
            image: "/feature-2.jpg",
            reverse: true
          },
          {
            title: "Developer Experience",
            description: "Enjoy a seamless development experience with tools designed for productivity.",
            features: [
              "Hot module replacement",
              "Intuitive API design",
              "Comprehensive documentation",
              "Active community support"
            ],
            image: "/feature-3.jpg",
            reverse: false
          }
        ].map((feature, index) => (
          <div key={index} className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="syntaxual-card h-64 flex items-center justify-center">
                <p className="text-syntaxual-accent">Image Placeholder</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-syntaxual-accent">{feature.title}</h2>
              <p className="text-syntaxual-text-secondary text-lg mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-syntaxual-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-syntaxual-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
