import React from 'react';

interface Skills{
 
   category:string,
   items:[{item:string,level:string}]
  
}

interface SkillListProps {
  skills: Skills[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
    {skills.map((skill) => (
      <div>
      <div key={skill.category} className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
       <strong className="text-sm font-semibold text-purple-600">
        {skill.category}
        </strong> 
    </div>
    <div>
        <ul className="list-disc pl-5 text-gray-700 list-none">
        {skill.items.map((item, index) => (
          <li key={index} className='text-sm text-gray-600'>
            {item.item}  {item.level}
          </li>
        ))}
      </ul>
      </div>
      </div>
    ))}
  </div>
);

export default SkillList;

