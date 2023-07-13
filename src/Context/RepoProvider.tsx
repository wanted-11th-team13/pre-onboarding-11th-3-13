import { useState } from "react";
import { RepoContext } from "./Contexts";

interface IProps {
  children: React.ReactNode;
}

export default function RepoProvider({ children }: IProps) {
  const repoState = useState("Angular-cli");
  const repoRecordState = useState("Angular-cli");

  return (
    <RepoContext.Provider value={[...repoState, ...repoRecordState]}>
      {children}
    </RepoContext.Provider>
  );
}
