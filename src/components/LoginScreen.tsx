
import React from "react";
import { useVoting } from "../context/VotingContext";
import { ArrowRight } from "lucide-react";

const LoginScreen: React.FC = () => {
  const { setCurrentStep } = useVoting();

  const handleLogin = () => {
    setCurrentStep('qrScan');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      {/* Background with watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
          alt="Ashoka Emblem Watermark"
          className="w-96 h-96"
        />
      </div>
      
      <div className="flex flex-col items-center relative z-10">
        <div className="flex items-center mb-12">
          <img
            src="/lovable-uploads/3edea1b2-2341-4600-9dbc-fe064f159372.png"
            alt="ECI Logo"
            className="h-8 mr-4"
          />
          <div>
            <h1 className="text-xl font-bold text-eci-navy">ELECTION COMMISSION OF INDIA</h1>
            <p className="text-sm text-gray-600">VOTING</p>
          </div>
        </div>
        
        <button
          onClick={handleLogin}
          className="bg-white text-blue-500 py-3 px-8 rounded-full shadow-md flex items-center justify-center transition-all hover:shadow-lg"
        >
          <span className="mr-2">CLICK HERE TO LOGIN</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
