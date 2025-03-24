"use client"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark } from "@uiw/codemirror-theme-vscode"
import { Card } from "@/components/ui/card"

const codeExample = `// Syntaxual Demo
function createAwesomeCode() {
  const languages = [
    "JavaScript", 
    "Python", 
    "Rust", 
    "Go"
  ];
  
  const features = {
    syntaxHighlighting: true,
    autoCompletion: true,
    themes: ["dark", "light", "synthwave"],
    cloudSync: true
  };
  
  return {
    message: "Welcome to Syntaxual!",
    supportedLanguages: languages,
    awesomeFeatures: features,
    getStarted: () => console.log("Let's code!")
  };
}

// Try it now
createAwesomeCode().getStarted();`

export default function CodeSnippet() {
  return (
    <Card className="border border-purple-500/30 bg-zinc-900 overflow-hidden rounded-lg shadow-lg shadow-purple-500/10">
      <div className="bg-zinc-800 px-4 py-2 border-b border-zinc-700 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-white/60">syntaxual-demo.js</div>
      </div>
      <CodeMirror
        value={codeExample}
        height="340px"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        editable={false}
        className="text-sm"
      />
    </Card>
  )
}

