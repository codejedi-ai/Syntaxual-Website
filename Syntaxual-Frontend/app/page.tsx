import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import { Code, Zap, Globe, Shield, Sparkles, Layers } from "lucide-react"
import InteractiveCodeEditor from "@/components/interactive-code-editor"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-purple-500">Syntaxual</span>
              <br />
              Code Editor
            </h1>
            <p className="text-xl text-white/70 max-w-xl">
              A powerful, intuitive code editor designed for developers who demand performance, flexibility, and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950/50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full">
            <InteractiveCodeEditor />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Features</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Discover why developers choose Syntaxual for their coding needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code />}
              title="Syntax Highlighting"
              description="Support for over 100 programming languages with beautiful, customizable syntax highlighting."
            />
            <FeatureCard
              icon={<Zap />}
              title="Lightning Fast"
              description="Optimized performance ensures your editor stays responsive, even with large files."
            />
            <FeatureCard
              icon={<Globe />}
              title="Cloud Sync"
              description="Seamlessly sync your code across devices with secure cloud storage integration."
            />
            <FeatureCard
              icon={<Shield />}
              title="Secure Coding"
              description="Built-in security features to help identify vulnerabilities in your code."
            />
            <FeatureCard
              icon={<Sparkles />}
              title="AI Assistance"
              description="Intelligent code suggestions and auto-completion powered by advanced AI."
            />
            <FeatureCard
              icon={<Layers />}
              title="Extensible"
              description="Customize your experience with a growing library of extensions and themes."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your coding experience?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of developers who have already made the switch to Syntaxual.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
            Try Syntaxual Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-purple-500">Syntaxual</span>
              <p className="text-white/60 mt-2">© 2024 Syntaxual. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

