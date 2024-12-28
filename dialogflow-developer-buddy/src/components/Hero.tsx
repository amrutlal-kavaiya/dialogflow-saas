'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <section className={`relative bg-white dark:bg-gray-900 pt-16 ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-indigo-50 dark:to-indigo-950/10" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 lg:pr-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                  Revolutionize Your
                </span>
                <span className="block xl:inline mt-1 text-gray-900 dark:text-white">
                  Dialogflow Chatbots
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
                Elevate your customer service and streamline operations with our powerful AI solutions, 
                crafted to enhance every interaction with precision and ease.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center justify-center px-8 py-3 
                           text-base font-medium rounded-md text-white 
                           bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
                           transition-all duration-200 transform hover:scale-105
                           md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl">
                  Get Started
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 
                           text-base font-medium rounded-md 
                           text-gray-700 dark:text-gray-200
                           bg-gray-100 hover:bg-gray-200 
                           dark:bg-gray-800 dark:hover:bg-gray-700
                           border border-gray-300 dark:border-gray-600
                           transition-all duration-200 transform hover:scale-105
                           md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Content - Animation */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg blur opacity-20 dark:opacity-30 animate-pulse"></div>
                <div className="relative">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/7f485aba-d883-4b55-a8af-faaba59b4ca2/Ledz8ctCRL.lottie"
                    style={{ width: '600px', height: '600px' }}
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;