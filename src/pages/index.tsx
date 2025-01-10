import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import SkillList from '../components/SkillList';
// If you want to use the version with dummy images, uncomment the next line and comment out the previous import
// import SkillList from '../components/SkillListWithImages';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';
import Education from '../components/Education';
import resumeData from '../data/resumeData.json';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 font-sans">
      <Header
        name={resumeData.personalInfo.name}
        title={resumeData.personalInfo.title}
        contact={resumeData.personalInfo.contact}
      />

      <Section title="Professional Summary">
        <p className="text-gray-700">{resumeData.professionalSummary}</p>
      </Section>

      <Section title="Core Skills">
        <SkillList skills={resumeData.skills} />
      </Section>

      <Section title="Professional Experience">
        {resumeData.experience.map((exp, index) => (
          exp.title === "Previous Roles" ? (
            <div key={index}>
              <h3 className="text-lg font-semibold text-purple-600">{exp.title}</h3>
              <ul className="list-disc pl-5 text-gray-700 list-none">
                {exp.positions.map((position, posIndex) => (
                  <li key={posIndex}>{position}</li>
                ))}
              </ul>
            </div>
          ) : (
            <Experience
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              achievements={exp.achievements}
            />
          )
        ))}
      </Section>

      <Section title="Key Projects">
        <ProjectList projects={resumeData.projects} />
      </Section>

      <Section title="Education & Certifications">
        <Education education={resumeData.education} />
      </Section>
    </div>
  );
};

export default Resume;

