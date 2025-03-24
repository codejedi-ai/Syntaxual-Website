"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import dynamic from "next/dynamic"

// Dynamically import CodeMirror to avoid server-side rendering issues
const CodeMirror = dynamic(() => import('@uiw/react-codemirror').then(mod => mod.default), { ssr: false })

// Language imports
import { javascript } from "@codemirror/lang-javascript"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { python } from "@codemirror/lang-python"
import { cpp } from "@codemirror/lang-cpp"
import { java } from "@codemirror/lang-java"
import { vscodeDark } from "@uiw/codemirror-theme-vscode"

const languageOptions = [
  { 
    value: "javascript", 
    label: "JavaScript", 
    extension: "js",
    language: () => javascript({ jsx: true }), 
    sampleCode: `// JavaScript Example
function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
}

// Calculate factorial of 5
const result = calculateFactorial(5);
console.log(\`Factorial of 5 is \${result}\`);

// ES6 Arrow Function Example
const double = (x) => x * 2;
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(double);
`
  },
  { 
    value: "python", 
    label: "Python", 
    extension: "py",
    language: () => python(), 
    sampleCode: `# Python Example
def is_prime(n):
    """Check if a number is prime."""
    if n <= 1:
        return False;
    if n <= 3:
        return True;
    if n % 2 == 0 or n % 3 == 0:
        return False;
    i = 5;
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False;
        i += 6;
    return True;

# Find prime numbers in a range
primes = [i for i in range(1, 20) if is_prime(i)];
print(f"Prime numbers from 1 to 20: {primes}");
`
  },
  { 
    value: "html", 
    label: "HTML", 
    extension: "html",
    language: () => html(), 
    sampleCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Syntaxual Demo</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .highlight {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Syntaxual HTML Sample</h1>
  </header>
  <main>
    <article class="highlight">
      <h2>HTML Example</h2>
      <p>This is a sample HTML file for the Syntaxual code editor.</p>
    </article>
  </main>
</body>
</html>`
  },
  { 
    value: "css", 
    label: "CSS", 
    extension: "css",
    language: () => css(), 
    sampleCode: `/* CSS Example */
:root {
  --primary-color: #6200ee;
  --secondary-color: #03dac6;
  --background-color: #f5f5f5;
  --text-color: #333333;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
}`
  },
  { 
    value: "cpp", 
    label: "C++", 
    extension: "cpp",
    language: () => cpp(), 
    sampleCode: `// C++ Example
#include <iostream>
#include <vector>
#include <algorithm>

// Function to check if a number is prime
bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}

int main() {
    std::vector<int> numbers = {4, 7, 10, 13, 16, 19, 23};
    
    // Count prime numbers using std::count_if and lambda
    int primeCount = std::count_if(numbers.begin(), numbers.end(), 
                                 [](int x) { return isPrime(x); });
    
    std::cout << "Number of primes: " << primeCount << std::endl;
    
    // Print all prime numbers
    std::cout << "Prime numbers in the vector: ";
    for (int num : numbers) {
        if (isPrime(num)) {
            std::cout << num << " ";
        }
    }
    std::cout << std::endl;
    
    return 0;
}`
  },
  { 
    value: "java", 
    label: "Java", 
    extension: "java",
    language: () => java(), 
    sampleCode: `// Java Example
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        // Create a list of integers from 1 to 20
        List<Integer> numbers = IntStream.rangeClosed(1, 20)
                                         .boxed()
                                         .collect(Collectors.toList());
        
        // Use streams to filter and find prime numbers
        List<Integer> primes = numbers.stream()
                                      .filter(Main::isPrime)
                                      .collect(Collectors.toList());
        
        System.out.println("Prime numbers from 1 to 20: " + primes);
        
        // Example of Java class and object
        Calculator calc = new Calculator();
        System.out.println("5 + 3 = " + calc.add(5, 3));
        System.out.println("5 - 3 = " + calc.subtract(5, 3));
    }
    
    // Check if a number is prime
    public static boolean isPrime(int number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        
        if (number % 2 == 0 || number % 3 == 0) return false;
        
        for (int i = 5; i * i <= number; i += 6) {
            if (number % i == 0 || number % (i + 2) == 0)
                return false;
        }
        return true;
    }
}

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
}`
  }
]

export default function InteractiveCodeEditor() {
  const [code, setCode] = useState(languageOptions[0].sampleCode)
  const [language, setLanguage] = useState(languageOptions[0])
  const [analyzing, setAnalyzing] = useState(false)
  const [feedback, setFeedback] = useState<null | { issues: Array<{type: string, message: string, line?: number | null}> }>(null)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Use useEffect to set mounted state after component mounts on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (value: string) => {
    const selectedLanguage = languageOptions.find((lang) => lang.value === value)
    if (selectedLanguage) {
      setLanguage(selectedLanguage)
      setCode(selectedLanguage.sampleCode)
      // Clear any previous feedback
      setFeedback(null)
      setError(null)
    }
  }

  const handleChange = React.useCallback((value: string) => {
    setCode(value)
    // Clear any previous feedback when code changes
    setFeedback(null)
    setError(null)
  }, [])

  const handleAnalyze = async () => {
    if (!code.trim()) {
      setError("Please enter some code to analyze");
      return;
    }
    
    try {
      setAnalyzing(true);
      setError(null);
      
      // In a real implementation, this would send to your actual API endpoint
      // const response = await fetch('/api/analyze-code', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     code,
      //     language: language.value,
      //   }),
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to analyze code');
      // }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, simulate a response based on the language
      let mockFeedback;
      
      if (language.value === 'javascript') {
        mockFeedback = {
          issues: [
            {
              type: 'Style',
              message: 'Variable names should use camelCase according to IEEE standards',
              line: 8
            },
            {
              type: 'Grammar',
              message: 'Missing semicolon at the end of statement',
              line: 10
            },
            {
              type: 'Documentation',
              message: 'Functions should have descriptive comments following IEEE guidelines',
              line: 2
            }
          ]
        };
      } else if (language.value === 'python') {
        mockFeedback = {
          issues: [
            {
              type: 'Style',
              message: 'Function documentation should use Google docstrings format per IEEE recommendations',
              line: 2
            },
            {
              type: 'Documentation',
              message: 'Main code should be protected with if __name__ == "__main__" guard',
              line: 16
            },
            {
              type: 'Standards',
              message: 'Follow PEP 8 guidelines for consistent code style',
              line: null
            }
          ]
        };
      } else {
        mockFeedback = {
          issues: [
            {
              type: 'Standards',
              message: `Your ${language.label} code should follow ${language.label} IEEE style guidelines`,
              line: null
            },
            {
              type: 'Documentation',
              message: 'All code sections should be properly documented',
              line: 1
            },
            {
              type: 'Style',
              message: 'Consistent indentation should be maintained throughout the code',
              line: null
            }
          ]
        };
      }
      
      setFeedback(mockFeedback);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="rounded-lg border border-purple-500/30 bg-zinc-900 overflow-hidden shadow-lg shadow-purple-500/10">
      <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2">
          <Select value={language.value} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-700 text-white">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-700">
              {languageOptions.map((lang) => (
                <SelectItem key={lang.value} value={lang.value} className="text-white">
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleAnalyze}
            disabled={analyzing}
            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            {analyzing ? <div className="h-4 w-4 animate-spin rounded-full border-t-2 border-purple-500" /> : <Send size={16} />}
            <span className="ml-2">Analyze</span>
          </Button>
        </div>
      </div>
      
      {/* Only render CodeMirror on the client side */}
      <div className="font-mono text-sm">
        {mounted ? (
          <CodeMirror
            value={code}
            height="340px"
            theme={vscodeDark}
            extensions={[language.language()]}
            onChange={handleChange}
            className="text-sm"
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              foldGutter: true,
              drawSelection: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              searchKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true,
            }}
          />
        ) : (
          // Placeholder while CodeMirror is loading
          <div className="h-[340px] bg-zinc-900 flex items-center justify-center">
            <div className="animate-pulse text-zinc-500">Loading editor...</div>
          </div>
        )}
      </div>
      
      {/* Analysis Results Section */}
      {error && (
        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <Alert variant="destructive" className="bg-zinc-900 border-red-500/50 text-white">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}
      
      {analyzing && (
        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
            <span className="ml-2 text-white">Analyzing your code...</span>
          </div>
        </div>
      )}
      
      {feedback && !analyzing && (
        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <h3 className="text-lg font-semibold mb-2 text-white">IEEE Standards Analysis</h3>
          <div className="space-y-2">
            {feedback.issues.map((issue, index) => (
              <div key={index} className="rounded-md bg-zinc-800 p-3">
                <div className="flex items-start">
                  <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                    issue.type === 'Style' ? 'bg-blue-900/50 text-blue-300' : 
                    issue.type === 'Grammar' ? 'bg-yellow-900/50 text-yellow-300' : 
                    'bg-purple-900/50 text-purple-300'
                  }`}>
                    {issue.type}
                  </span>
                  {issue.line && (
                    <span className="ml-2 text-xs text-zinc-400">Line {issue.line}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-300">{issue.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

