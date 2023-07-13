import { useContext } from "react";
import { EditKeywordContext } from "./Contexts";

export default function useEditKeywordState() {
  const value = useContext(EditKeywordContext);

  return value;
}
