
import React, { useState } from "react";
import { useVoting } from "../context/VotingContext";
import { AlertCircle } from "lucide-react";

// Sample candidate data (same as in BallotScreen)
const candidates = [
  { id: "1", name: "Candidate A", party: "Party One", symbol: "🌞" },
  { id: "2", name: "Candidate B", party: "Party Two", symbol: "🌙" },
  { id: "3", name: "Candidate C", party: "Party Three", symbol: "⭐" },
  { id: "4", name: "Candidate D", party: "Party Four", symbol: "🌈" },
  { id: "5", name: "Candidate E", party: "Party Five", symbol: "🌊" },
  { id: "6", name: "NOTA", party: "None Of The Above", symbol: "❌" }
];

const ConfirmationScreen: React.FC = () => {
  const { setCurrentStep, selectedCandidate, voterName } = useVoting();
  const [submitting, setSubmitting] = useState(false);

  const selectedCandidateInfo = candidates.find(c => c.id === selectedCandidate);

  const handleGoBack = () => {
    setCurrentStep("ballot");
  };

  const handleConfirm = () => {
    setSubmitting(true);
    
    // Simulate vote submission
    setTimeout(() => {
      setSubmitting(false);
      setCurrentStep("success");
    }, 2000);
  };

  return (
    <div className="eci-card max-w-xl mx-auto mt-10">
      <h2 className="eci-heading">Step 4 of 4: Confirm Your Vote</h2>
      <p className="eci-subheading">Please review and confirm your selection</p>
      
      <div className="w-full p-6 mb-8 border-2 border-eci-navy rounded-lg">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-16 w-16 bg-white rounded-full border-2 border-gray-200 
                         flex items-center justify-center text-3xl">
            {selectedCandidateInfo?.symbol}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">{selectedCandidateInfo?.name}</h3>
            <p className="text-gray-600">{selectedCandidateInfo?.party}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-3 bg-yellow-50 border border-yellow-200 rounded">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
          <p className="text-sm text-yellow-800">
            This will be your final selection. You cannot change after confirmation.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button
          onClick={handleGoBack}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 
                    rounded-md transition-all duration-300 flex items-center justify-center"
          disabled={submitting}
        >
          Go Back
        </button>
        
        <button
          onClick={handleConfirm}
          className="flex-1 eci-button"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Confirm Vote"}
        </button>
      </div>
      
      <div className="mt-6 p-4 border border-green-300 bg-green-50 rounded text-sm text-green-800">
        <p>
          <span className="font-medium">Security Notice:</span> Your vote will be encrypted and 
          securely stored in the local database. The voting machine is completely offline 
          and protected from external interference.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
