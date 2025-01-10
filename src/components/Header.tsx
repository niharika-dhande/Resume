import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  photoUrl: string; // Add a new prop for the photo URL
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

const Header: React.FC<HeaderProps> = ({ name, title, contact, photoUrl }) => (
  <header className="mb-6 border-b-4 border-blue-500 pb-4 flex justify-between items-center">
   <div className="flex-1 flex items-left">

   <div className="flex items-left">
   <img
        src={photoUrl || 'https://via.placeholder.com/64'}
        alt={`${name}'s photo`}
        className="w-16 h-16 rounded-full mb-2"
        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/64')}
      />
    </div>
    <div className="flex-1 ml-4">
      <h1 className="text-4xl font-bold mb-2 text-blue-700">{name}</h1>
      <p className="text-xl text-purple-600">{title}</p>
    </div>
   </div>
    <div className="flex-1 text-right">
      <p className="text-sm text-gray-600">
        Phone: <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">{contact.phone}</a>
      </p>
      <p className="text-sm text-gray-600">
        Email: <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
      </p>
      <p className="text-sm text-gray-600">LinkedIn: <a href={contact.linkedin} target="_blank" className="text-blue-600 hover:underline">LinkedIn</a></p>
      <p className="text-sm text-gray-600">GitHub: <a href={contact.github} target="_blank" className="text-blue-600 hover:underline">GitHub</a></p>
    </div>
  </header>
);

export default Header;