'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { 
  Home,
  MessageSquare,
  Database,
  Route,
  Webhook,
  Share2,
  Bug,
  BarChart2,
  TestTube2,
  Menu
} from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Intents', path: '/intents', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Entities', path: '/entities', icon: <Database className="w-4 h-4" /> },
    { name: 'Routes', path: '/routes', icon: <Route className="w-4 h-4" /> },
    { name: 'Webhooks', path: '/webhooks', icon: <Webhook className="w-4 h-4" /> },
    { name: 'Flow Generator', path: '/flowmaker', icon: <Share2 className="w-4 h-4" /> },
    { name: 'Debugddy', path: '/debugdddy', icon: <Bug className="w-4 h-4" /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart2 className="w-4 h-4" /> },
    { name: 'Test Suite', path: '/testsuite', icon: <TestTube2 className="w-4 h-4" /> }
  ];

  return (
    <nav className="bg-[#1E1E1E] py-3 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 text-white no-underline min-w-fit">
            <img
              src="/Dialogflow.png"
              alt="Dialogflow Buddy"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-semibold whitespace-nowrap">
              Dialogflow <span className="text-cyan-400">Buddy</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path} className="whitespace-nowrap">
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md transition-colors duration-200 text-sm
                      ${pathname === item.path 
                        ? 'text-cyan-400 bg-cyan-400/10' 
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              type="button"
              aria-label="Toggle navigation"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link
              href="/login"
              className="hidden lg:inline-flex items-center px-4 py-1.5 rounded-md bg-cyan-400 
                text-gray-900 font-semibold transition-all duration-200 text-sm
                hover:bg-cyan-500 transform hover:-translate-y-0.5 min-w-fit whitespace-nowrap ml-2"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium
                    ${pathname === item.path
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                href="/login"
                className="flex items-center justify-center mt-4 px-6 py-2 rounded-md bg-cyan-400 
                  text-gray-900 font-semibold transition-all duration-200 
                  hover:bg-cyan-500"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;