import { useState } from "react";
import { EditKeywordContext } from "./Contexts";

interface IProps {
  children: React.ReactNode;
}

export function EditKeywordProvider({ children }: IProps) {
  const editKeywordState = useState(false);

  return (
    <EditKeywordContext.Provider value={editKeywordState}>
      {children}
    </EditKeywordContext.Provider>
  );
}
