"use client";
import { useState } from 'react';

interface EntityResult {
  category: string;
  name: string;
  extendable: boolean;
  description: string;
  outputFormat: string;
}

export default function EntitiesPage() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState<EntityResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEntityDetection = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/entities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) throw new Error('Failed to detect entities');
      
      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Entity Detection
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Automatically identify entities using OpenAI's GPT model.
            </p>
            <div className="mt-8">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                          bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                          placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter text for entity detection"
                rows={4}
              />
              <button
                onClick={handleEntityDetection}
                disabled={loading || !inputText.trim()}
                className="mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md 
                         hover:bg-blue-700 dark:hover:bg-blue-600 
                         disabled:bg-gray-400 dark:disabled:bg-gray-600
                         disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Detecting...' : 'Detect Entities'}
              </button>
            </div>

            {loading && <p className="text-center mt-4 text-gray-600 dark:text-gray-400">Processing text...</p>}
            {error && <p className="text-center mt-4 text-red-500 dark:text-red-400">{error}</p>}

            {results.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Detected Entities</h2>
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Extendable
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Output Format
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {results.map((result, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {result.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {result.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {result.extendable ? 'Yes' : 'No'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {result.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {result.outputFormat}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}