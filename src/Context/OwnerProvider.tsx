import { useState } from "react";
import { OwnerContext } from "./Contexts";

interface IProps {
  children: React.ReactNode;
}

export function OwnerProvider({ children }: IProps) {
  const ownerState = useState("Angular");
  const ownerRecordState = useState("Angular");

  return (
    <OwnerContext.Provider value={[...ownerState, ...ownerRecordState]}>
      {children}
    </OwnerContext.Provider>
  );
}
