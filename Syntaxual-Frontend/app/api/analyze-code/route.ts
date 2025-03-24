import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { code, language } = body;
    
    if (!code || !language) {
      return NextResponse.json(
        { error: 'Code and language are required' },
        { status: 400 }
      );
    }
    
    // Add artificial delay to simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock feedback generator based on language
    let feedback;
    
    if (language === 'javascript') {
      feedback = {
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
    } else if (language === 'python') {
      feedback = {
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
      feedback = {
        issues: [
          {
            type: 'Standards',
            message: `Your ${language} code should follow ${language} IEEE style guidelines`,
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
    
    // Return the feedback
    return NextResponse.json({ feedback });
    
  } catch (error) {
    console.error('Error analyzing code:', error);
    return NextResponse.json(
      { error: 'Failed to analyze code' },
      { status: 500 }
    );
  }
}
