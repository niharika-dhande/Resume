import React from 'react';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC<ExperienceProps> = ({ title, company, location, period, achievements }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-purple-600">{title}</h3>
    <p className="italic text-gray-600">{company}, {location} | {period}</p>
    <ul className="list-disc pl-5 text-gray-700 list-none">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

export default Experience;

