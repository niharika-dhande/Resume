import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-6 bg-white p-4 rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h2>
    {children}
  </section>
);

export default Section;

