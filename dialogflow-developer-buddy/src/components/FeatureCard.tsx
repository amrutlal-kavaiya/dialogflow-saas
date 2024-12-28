'use client';

import { FC, ReactElement } from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div>
          <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700">
            {icon}
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;