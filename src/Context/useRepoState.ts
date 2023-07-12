import { useContext } from "react";
import { RepoContext } from "./Contexts";

export default function useRepoState() {
  const value = useContext(RepoContext);

  return value;
}
