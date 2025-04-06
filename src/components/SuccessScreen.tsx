
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
    <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center 
                      justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h2 className="text-xl font-bold text-green-600 text-center mb-2">Vote Successfully Cast!</h2>
        <p className="text-gray-500 text-center mb-6">Thank you for participating in the democratic process</p>
        
        <div className="w-full p-6 bg-gray-50 border border-gray-200 rounded-md text-center mb-8">
          <p className="text-md mb-2">Your vote has been securely recorded</p>
          <p className="text-gray-500">
            The system will automatically reset in <span className="font-bold">{countdown}</span> seconds
          </p>
        </div>
        
        <button
          onClick={resetProcess}
          className="bg-eci-blue text-white py-3 px-8 rounded-md shadow-md"
        >
          Return to Login Screen
        </button>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md w-full">
          <h3 className="font-semibold text-center mb-2 text-blue-700">
            About the Secure Offline Voting System
          </h3>
          <ul className="text-sm space-y-2 text-blue-600">
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
