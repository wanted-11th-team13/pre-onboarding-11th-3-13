import { useContext } from "react";
import { OwnerContext } from "./Contexts";

export default function useOwnerState() {
  const value = useContext(OwnerContext);

  return value;
}
