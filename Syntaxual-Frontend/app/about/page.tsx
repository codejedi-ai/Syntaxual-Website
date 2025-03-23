import React from 'react';

export default function About() {
  return (
    <div className="syntaxual-container py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <span className="text-syntaxual-text-primary">About </span>
        <span className="text-syntaxual-accent">Syntaxual</span>
      </h1>
      
      {/* Our Story Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-syntaxual-accent">Our Story</h2>
        
        <div className="syntaxual-card">
          <p className="text-syntaxual-text-primary text-lg mb-4">
            Syntaxual was founded in 2023 with a simple mission: to make web development more accessible, efficient, and enjoyable for developers of all skill levels.
          </p>
          <p className="text-syntaxual-text-primary text-lg mb-4">
            What started as a small project to solve our own development challenges quickly grew into a comprehensive platform used by thousands of developers worldwide.
          </p>
          <p className="text-syntaxual-text-primary text-lg">
            Today, we're committed to pushing the boundaries of what's possible in web development, constantly innovating and improving our tools to meet the evolving needs of the developer community.
          </p>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-syntaxual-accent">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              bio: "Alex has over 15 years of experience in web development and has previously led engineering teams at several tech giants."
            },
            {
              name: "Sarah Chen",
              role: "CTO",
              bio: "Sarah is a full-stack developer with a passion for creating elegant solutions to complex problems."
            },
            {
              name: "Michael Rodriguez",
              role: "Head of Product",
              bio: "Michael brings a user-centered approach to product development, ensuring our tools are intuitive and powerful."
            }
          ].map((member, index) => (
            <div key={index} className="syntaxual-card text-center">
              <div className="w-32 h-32 rounded-full bg-syntaxual-accent bg-opacity-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-syntaxual-accent text-4xl">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-syntaxual-accent text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-syntaxual-text-secondary mb-4">{member.role}</p>
              <p className="text-syntaxual-text-primary">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-syntaxual-accent">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Innovation",
              description: "We're constantly exploring new technologies and approaches to push the boundaries of what's possible."
            },
            {
              title: "Quality",
              description: "We believe in doing things right. Our code is clean, well-tested, and built to last."
            },
            {
              title: "Community",
              description: "We value the input and contributions of our users and strive to build tools that serve their needs."
            },
            {
              title: "Education",
              description: "We're committed to helping developers learn and grow through comprehensive documentation and resources."
            }
          ].map((value, index) => (
            <div key={index} className="syntaxual-card">
              <h3 className="text-syntaxual-accent text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-syntaxual-text-primary">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
