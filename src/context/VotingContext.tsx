
import React, { createContext, useContext, useState } from "react";

type VotingStep = 'login' | 'qrScan' | 'biometric' | 'ballot' | 'confirmation' | 'success';

interface VotingContextType {
  currentStep: VotingStep;
  setCurrentStep: React.Dispatch<React.SetStateAction<VotingStep>>;
  voterName: string;
  setVoterName: React.Dispatch<React.SetStateAction<string>>;
  voterID: string;
  setVoterID: React.Dispatch<React.SetStateAction<string>>;
  selectedCandidate: string | null;
  setSelectedCandidate: React.Dispatch<React.SetStateAction<string | null>>;
  resetProcess: () => void;
}

const VotingContext = createContext<VotingContextType | undefined>(undefined);

export const VotingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<VotingStep>('login');
  const [voterName, setVoterName] = useState<string>('');
  const [voterID, setVoterID] = useState<string>('');
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const resetProcess = () => {
    setCurrentStep('login');
    setVoterName('');
    setVoterID('');
    setSelectedCandidate(null);
  };

  return (
    <VotingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        voterName,
        setVoterName,
        voterID,
        setVoterID,
        selectedCandidate,
        setSelectedCandidate,
        resetProcess
      }}
    >
      {children}
    </VotingContext.Provider>
  );
};

export const useVoting = (): VotingContextType => {
  const context = useContext(VotingContext);
  if (context === undefined) {
    throw new Error("useVoting must be used within a VotingProvider");
  }
  return context;
};
