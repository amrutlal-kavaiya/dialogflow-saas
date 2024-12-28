import React from 'react';
import IntentForm from '@/components/IntentForm';

export default function IntentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Intent Generator
        </h1>
        <IntentForm />
      </div>
    </div>
  );
}