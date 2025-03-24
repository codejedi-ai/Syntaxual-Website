import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>
  )
}

