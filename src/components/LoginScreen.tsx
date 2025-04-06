
import React from "react";
import { useVoting } from "../context/VotingContext";
import { ArrowRight } from "lucide-react";

const LoginScreen: React.FC = () => {
  const { setCurrentStep } = useVoting();

  const handleLogin = () => {
    setCurrentStep('qrScan');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#e8f1f8]">
      {/* Background with watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
          alt="Ashoka Emblem Watermark"
          className="w-96 h-96"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="flex items-center mb-16">
          <div className="h-14 w-14 bg-eci-navy rounded-full p-2 flex items-center justify-center mr-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="ECI Logo"
              className="h-10 w-10"
            />
          </div>
          <div className="text-left">
            <h1 className="text-xl font-bold text-eci-navy">ELECTION COMMISSION OF INDIA</h1>
            <p className="text-sm text-gray-500">Electronic Voting System</p>
          </div>
        </div>
        
        <button
          onClick={handleLogin}
          className="bg-white text-eci-blue py-3 px-10 rounded-lg shadow-md flex items-center justify-center transition-all hover:shadow-lg border border-gray-100"
        >
          <span className="mr-2">CLICK HERE TO LOGIN</span>
          <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500">
        <p>Secure Electronic Voting System • Election Commission of India</p>
        <p>This system operates completely offline for maximum security</p>
      </div>
    </div>
  );
};

export default LoginScreen;
