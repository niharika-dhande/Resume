import React from 'react';


interface EducationItem {
  degree: string;
  institution: string;
  year?: number;
  link?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => (
  <ul className="list-disc pl-5 text-gray-700 list-none">
    {education.map((item, index) => (
      <li key={index}>
        <strong>{item.degree}</strong> | {item.institution}{item.link && <a href={item.link} className="text-blue-600 hover:underline">1894098-csm</a>} {item.year && `(${item.year})`}
      </li>
    ))}
  </ul>
);

export default Education;

