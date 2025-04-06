
import React, { useState, useEffect } from "react";
import { useVoting } from "../context/VotingContext";
import { CheckCircle } from "lucide-react";

const SuccessScreen: React.FC = () => {
  const { resetProcess } = useVoting();
  const [countdown, setCountdown] = useState(30);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (countdown === 0) {
      resetProcess();
    }
  }, [countdown, resetProcess]);

  return (
    <div className="eci-card max-w-lg mx-auto mt-10">
      <div className="flex flex-col items-center">
        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center 
                      justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h2 className="eci-heading text-green-700">Vote Successfully Cast!</h2>
        <p className="eci-subheading">Thank you for participating in the democratic process</p>
        
        <div className="w-full p-6 bg-gray-50 border border-gray-200 rounded-lg text-center mb-8">
          <p className="text-lg mb-2">Your vote has been securely recorded</p>
          <p className="text-gray-600">
            The system will automatically reset in <span className="font-bold">{countdown}</span> seconds
          </p>
        </div>
        
        <button
          onClick={resetProcess}
          className="eci-button"
        >
          Return to Login Screen
        </button>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg w-full">
          <h3 className="font-semibold text-center mb-2 text-blue-800">
            About the Secure Offline Voting System
          </h3>
          <ul className="text-sm space-y-2 text-blue-700">
            <li>• Fully offline operation ensures protection from cyber attacks</li>
            <li>• All vote data is encrypted and stored in a secure local database</li>
            <li>• Designed for use in remote rural areas without internet connectivity</li>
            <li>• Multi-layer authentication: Voter ID and biometric verification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
