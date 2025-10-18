import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingData {
  page1Data?: any;
  page2Data?: any;
}

interface OnboardingContextType {
  onboardingData: OnboardingData;
  updateOnboardingData: (page: 'page1' | 'page2', data: any) => void;
  isOnboardingComplete: boolean;
  completeOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const updateOnboardingData = (page: 'page1' | 'page2', data: any) => {
    setOnboardingData(prev => ({
      ...prev,
      [`${page}Data`]: data,
    }));
  };

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateOnboardingData,
        isOnboardingComplete,
        completeOnboarding,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
