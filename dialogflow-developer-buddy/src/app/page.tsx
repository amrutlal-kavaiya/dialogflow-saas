import { FC } from 'react';
import { FaRobot, FaRoute, FaCode, FaCogs, FaProjectDiagram, FaBug, FaChartLine, FaVial } from 'react-icons/fa';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export default function Home() {
  const features: Feature[] = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Intent Generation",
      description: "AI-powered intent generation for your Dialogflow chatbot",
      link: "/intents"
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Entity Detection",
      description: "Automatically identify entities and parameters",
      link: "/entities"
    },
    {
      icon: <FaRoute className="w-6 h-6" />,
      title: "Route Creation",
      description: "Generate conversation flows and routes",
      link: "/routes"
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Webhook Generator",
      description: "Create webhooks and fulfillment code",
      link: "/webhooks"
    },
    {
      icon: <FaProjectDiagram className="w-6 h-6" />,
      title: "Flow Generator",
      description: "Design and generate custom workflow diagrams with an intuitive interface",
      link: "/flowmaker"
    },
    {
      icon: <FaBug className="w-6 h-6" />,
      title: "Debugddy",
      description: "Advanced debugging tool for tracking and resolving application issues",
      link: "/debugdddy"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track and analyze chatbot performance metrics and user interactions",
      link: "/analytics"
    },
    {
      icon: <FaVial className="w-6 h-6" />,
      title: "Test Suite",
      description: "Automated testing tools for validating chatbot responses and conversation flows",
      link: "/test-suite"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Powerful Features
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                Everything you need to build and manage your Dialogflow chatbots effectively
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              ))}
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

        {/* Pricing Section with Proper Spacing */}
        <section className="relative py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Pricing />
          </div>
        </section>
      </main>

      {/* Footer with Proper Spacing */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}