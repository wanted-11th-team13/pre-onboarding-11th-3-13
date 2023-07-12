import React, { createContext } from "react";
import { Dict } from "styled-components/dist/types";

const defaultRepo: any = "Angular-cli";
const defaultOwner: any = "Angular";

export const RepoContext = createContext(defaultRepo);
export const OwnerContext = createContext(defaultOwner);
