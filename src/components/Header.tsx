
import React from "react";
import { Shield, Lock } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-eci-navy text-white px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {/* Ashoka Emblem would be here */}
          <div className="h-16 w-16 bg-white rounded-full p-2 flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Ashoka Emblem" 
              className="h-12 w-12"
            />
          </div>
          
          <div>
            <h1 className="text-xl font-bold">Election Commission of India</h1>
            <p className="text-sm text-gray-300">Electronic Voting Machine</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="offline-indicator">
            <span className="status-pulse offline-pulse"></span>
            <span>Offline Mode</span>
          </div>
          
          <div className="offline-indicator">
            <span className="status-pulse secure-pulse"></span>
            <span>Secure System</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
