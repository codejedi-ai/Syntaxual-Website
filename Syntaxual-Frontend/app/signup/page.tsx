'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    
    // Clear error when field is edited
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.password) {
      newErrors.password = 'Password is required';
    } else if (formState.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formState.password !== formState.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formState.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app, you would call your registration API here
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Sign up with:', formState);
      
      // Redirect to dashboard or sign-in page after successful registration
      alert('Account created successfully! Please sign in.');
      
    } catch (error) {
      console.error('Sign up failed:', error);
      alert('Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="syntaxual-container py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="text-syntaxual-text-primary">Create </span>
          <span className="text-syntaxual-accent">Account</span>
        </h1>
        
        <div className="syntaxual-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-syntaxual-text-primary mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border ${errors.name ? 'border-red-500' : 'border-syntaxual-accent border-opacity-20'} text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50`}
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-syntaxual-text-primary mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border ${errors.email ? 'border-red-500' : 'border-syntaxual-accent border-opacity-20'} text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-syntaxual-text-primary mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border ${errors.password ? 'border-red-500' : 'border-syntaxual-accent border-opacity-20'} text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50`}
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-syntaxual-text-primary mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-black bg-opacity-50 border ${errors.confirmPassword ? 'border-red-500' : 'border-syntaxual-accent border-opacity-20'} text-syntaxual-text-primary focus:outline-none focus:ring-2 focus:ring-syntaxual-accent focus:ring-opacity-50`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formState.agreeToTerms}
                  onChange={handleChange}
                  className={`h-4 w-4 rounded border-syntaxual-accent text-syntaxual-accent focus:ring-syntaxual-accent ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToTerms" className="text-syntaxual-text-secondary">
                  I agree to the <a href="#" className="text-syntaxual-accent hover:opacity-80">Terms of Service</a> and <a href="#" className="text-syntaxual-accent hover:opacity-80">Privacy Policy</a>
                </label>
                {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="syntaxual-button w-full flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-syntaxual-text-secondary">
              Already have an account?{' '}
              <Link href="/signin" className="text-syntaxual-accent hover:opacity-80">
                Sign in
              </Link>
            </p>
          </div>
          
          <div className="mt-8 border-t border-syntaxual-accent border-opacity-20 pt-6">
            <p className="text-center text-sm text-syntaxual-text-secondary mb-4">
              Or sign up with
            </p>
            <div className="flex space-x-4 justify-center">
              <button className="flex-1 py-2 px-4 border border-syntaxual-accent border-opacity-20 rounded-md text-syntaxual-text-primary hover:bg-syntaxual-accent hover:bg-opacity-10 transition-colors">
                <div className="flex justify-center items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </div>
              </button>
              <button className="flex-1 py-2 px-4 border border-syntaxual-accent border-opacity-20 rounded-md text-syntaxual-text-primary hover:bg-syntaxual-accent hover:bg-opacity-10 transition-colors">
                <div className="flex justify-center items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                  </svg>
                  Facebook
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
