import { useEffect, useState } from "react";
import useDatas from "./useDatas";
import { emptyData } from "../functions/functions";

export default function useOneIssue(issueNumber: number) {
  const [data, setData] = useState<IData | null>(emptyData);
  const [isLoading, setIsLoading] = useState(false);

  const { findIssuse } = useDatas();

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await findIssuse(issueNumber);

      if (result.url === "") {
        setData(null);
      } else {
        setData(result as IData);
      }

      setIsLoading((prev) => false);
    })();
  }, []);

  return { data, isLoading };
}
