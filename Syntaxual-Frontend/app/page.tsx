import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import { Code, Zap, Globe, Shield, Sparkles, Layers } from "lucide-react"
import InteractiveCodeEditor from "@/components/interactive-code-editor"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/30 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-fuchsia-600/10 rounded-3xl opacity-30 blur-3xl -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
              <span className="bg-gradient-to-tr from-white to-fuchsia-500 text-transparent bg-clip-text">Syntaxual</span>
              <br />
              AI Coding Buddy
            </h1>
            <p className="text-xl text-white/70 max-w-xl text-center">
              An intelligent AI assistant integrated into VS Code that provides smarter, faster, and contextual code reviews live in your coding workflow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://marketplace.visualstudio.com/items?itemName=Syntaxual.syntaxual" passHref>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                  Get VS Code Extension
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <InteractiveCodeEditor />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-black py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 to-fuchsia-600/5 opacity-40 -z-10"></div>
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
      <section className="bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-600 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your coding experience?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of developers who have already made the switch to Syntaxual.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://marketplace.visualstudio.com/items?itemName=Syntaxual.syntaxual" passHref>
              <Button size="lg" className="bg-gradient-to-r from-white to-white/90 text-purple-900 hover:from-white/90 hover:to-white/80">
                Try Syntaxual Free
              </Button>
            </Link>
            <Link href="/get-started" passHref>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-zinc-950 to-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">Syntaxual</span>
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

