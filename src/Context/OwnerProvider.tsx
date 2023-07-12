import { useState } from "react";
import { OwnerContext } from "./Contexts";

interface IProps {
  children: React.ReactNode;
}

export function OwnerProvider({ children }: IProps) {
  const ownerState = useState("Angular");

  return (
    <OwnerContext.Provider value={ownerState}>{children}</OwnerContext.Provider>
  );
}
