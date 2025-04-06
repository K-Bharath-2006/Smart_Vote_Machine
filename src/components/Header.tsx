
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-eci-navy text-white px-6 py-2 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Ashoka Emblem" 
              className="h-8 w-8"
            />
          </div>
          
          <div>
            <h1 className="text-sm font-bold">Election Commission of India</h1>
            <p className="text-xs text-gray-300">Electronic Voting Machine</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="offline-indicator">
            <span className="status-pulse offline-pulse"></span>
            <span className="text-xs">Offline Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
