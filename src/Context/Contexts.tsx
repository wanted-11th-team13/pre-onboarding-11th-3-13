import { createContext } from "react";

const defaultRepo: any = "Angular-cli";
const defaultOwner: any = "Angular";

export const RepoContext = createContext(defaultRepo);
export const OwnerContext = createContext(defaultOwner);
