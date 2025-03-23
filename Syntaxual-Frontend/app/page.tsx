

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-purple-600/30 via-syntaxual-background to-black/80 z-[-1]"></div>
      
      {/* Animated glow orbs */}
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-pulse z-[-1]"></div>
      <div className="fixed top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slow z-[-1]"></div>
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="py-20">
        <div className="syntaxual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-glow">
                <span className="text-syntaxual-text-primary">Synt</span>
                <span className="text-syntaxual-accent relative">
                axual
                  <span className="absolute inset-0 blur-sm bg-syntaxual-accent/30 -z-10"></span>
                </span>
              </h1>
              <p className="text-syntaxual-text-secondary text-xl mb-10">
                Syntaxual provides cutting-edge web development tools and services to help you build the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/signup" className="syntaxual-button inline-block text-center shadow-glow hover:shadow-glow-intense transition-all duration-300 transform hover:scale-105">Get Started</a>
                <button className="border border-syntaxual-accent text-syntaxual-accent px-4 py-2 rounded-md hover:bg-syntaxual-accent/20 hover:shadow-glow-accent transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Column - Code Block */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-syntaxual-accent/50 to-purple-600/50 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-4 shadow-glow overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-syntaxual-text-secondary">syntaxual.tsx</div>
                </div>
                <pre className="text-sm leading-relaxed text-syntaxual-text-primary overflow-x-auto">
                  <code className="block">
                    <span className="text-blue-400">import</span> <span className="text-green-400">&#123; useState &#125;</span> <span className="text-blue-400">from</span> <span className="text-yellow-300">'react'</span>;{'\n\n'}
                    <span className="text-purple-400">function</span> <span className="text-syntaxual-accent">SyntaxualComponent</span>() &#123;{'\n'}
                    {'  '}<span className="text-blue-400">const</span> [<span className="text-green-400">isActive</span>, <span className="text-syntaxual-accent">setIsActive</span>] = <span className="text-purple-400">useState</span>(<span className="text-orange-400">false</span>);{'\n\n'}
                    {'  '}<span className="text-blue-400">return</span> ({'\n'}
                    {'    '}&lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>=<span className="text-yellow-300">"syntaxual-container"</span>&gt;{'\n'}
                    {'      '}&lt;<span className="text-red-400">h2</span> <span className="text-green-400">className</span>=<span className="text-yellow-300">"text-glow"</span>&gt;{'\n'}
                    {'        '}Future is <span className="text-syntaxual-accent">Now</span>{'\n'}
                    {'      '}&lt;/<span className="text-red-400">h2</span>&gt;{'\n'}
                    {'      '}&lt;<span className="text-red-400">button</span>{'\n'}
                    {'        '}<span className="text-green-400">onClick</span>=&#123;() =&gt; <span className="text-syntaxual-accent">setIsActive</span>(!<span className="text-green-400">isActive</span>)&#125;{'\n'}
                    {'        '}<span className="text-green-400">className</span>=<span className="text-yellow-300">"syntaxual-button"</span>{'\n'}
                    {'      '}&gt;{'\n'}
                    {'        '}Activate{'\n'}
                    {'      '}&lt;/<span className="text-red-400">button</span>&gt;{'\n'}
                    {'    '}&lt;/<span className="text-red-400">div</span>&gt;{'\n'}
                    {'  '});{'\n'}
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 backdrop-blur-sm bg-black/30 border-t border-b border-syntaxual-accent/20">
        <div className="syntaxual-container">
          <h2 className="syntaxual-heading text-3xl text-center mb-16 text-shadow-glow">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Stack",
                description: "Built with the latest technologies to ensure your project stays relevant.",
                icon: (
                  <svg className="w-12 h-12 text-syntaxual-accent filter drop-shadow-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              // ...existing code...
            ].map((feature, index) => (
              <div key={index} className="syntaxual-card flex flex-col items-center text-center shadow-glow hover:shadow-glow-intense transition-all duration-300 backdrop-blur-sm bg-black/50 hover:bg-black/60 border border-syntaxual-accent/20 hover:border-syntaxual-accent/40 transform hover:scale-[1.02]">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-syntaxual-accent text-xl font-bold mb-2 text-shadow-glow">{feature.title}</h3>
                <p className="text-syntaxual-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tr from-syntaxual-accent/30 via-syntaxual-background to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-syntaxual-accent/30 blur-[120px] animate-pulse"></div>
        
        <div className="syntaxual-container text-center relative">
          <h2 className="text-3xl font-bold mb-6 text-shadow-glow">
            <span className="text-syntaxual-text-primary">Ready to get started with </span>
            <span className="text-syntaxual-accent">Syntaxual</span>
            <span className="text-syntaxual-text-primary">?</span>
          </h2>
          <p className="text-syntaxual-text-secondary text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with our tools.
          </p>
          <a href="/signup" className="syntaxual-button text-lg px-8 py-3 inline-block shadow-glow hover:shadow-glow-intense transition-all duration-300 transform hover:scale-105">
            Start Building Today
          </a>
        </div>
      </section>
    </div>
  );
}