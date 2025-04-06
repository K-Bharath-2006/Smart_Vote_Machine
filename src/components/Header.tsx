
import React from "react";
import { Battery, WifiOff } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-eci-navy px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-eci-navy rounded-full p-1 flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Ashoka Emblem" 
              className="h-8 w-8"
            />
          </div>
          
          <div>
            <h1 className="text-sm font-bold">Election Commission of India</h1>
            <p className="text-xs text-gray-500">Electronic Voting Machine</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="offline-indicator">
            <WifiOff size={14} className="text-red-500" />
            <span className="text-xs">Offline Mode</span>
          </div>
          
          <div className="flex items-center">
            <Battery className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-gray-500">100%</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
