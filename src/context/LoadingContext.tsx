import React, { ReactNode, createContext, useContext, useState } from 'react';

type LoadingContextProps = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setLoading: () => {},
});

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingContext = () => useContext(LoadingContext);
