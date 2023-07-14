import { createContext } from "react";

const defaultRepo: any = "Angular-cli";
const defaultOwner: any = "Angular";
const defaultEdit: any = false;

export const RepoContext = createContext(defaultRepo);
export const OwnerContext = createContext(defaultOwner);
export const EditKeywordContext = createContext(defaultEdit);
