import axios from "axios";
import { useEffect, useState } from "react";
import useOwnerState from "../Context/useOwnerState";
import useRepoState from "../Context/useRepoState";
import { emptyData } from "../functions/functions";

const per_page = 1000;
const offset = 5;

export default function useDatas() {
  let allDatas: IData[] = [];
  let sliceIdx = 10;

  const [datas, setDatas] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [repo] = useRepoState();
  const [owner] = useOwnerState();

  useEffect(() => {
    (async () => {
      sliceIdx = 10;
      allDatas = [];

      setIsAdding((prev) => true);
      setIsLoading((prev) => true);

      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/issues?per_page=${per_page}&sort=comments&direction=desc&state=open`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
            },
          }
        );

        allDatas = response.data as IData[];
        setDatas((prev) => response.data.slice(0, sliceIdx));
      } catch (error) {
        allDatas = [];
        setDatas((prev) => []);
      }

      setIsAdding((prev) => false);
      setIsLoading((prev) => false);
    })();
  }, [repo, owner]);

  const findIssuse = async (issueNumber: number) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return emptyData;
    }
  };

  const addDatas = async () => {
    if (isAdding === false) {
      setIsAdding((prev) => true);

      const newDatas = allDatas.slice(sliceIdx, sliceIdx + offset);

      sliceIdx += offset;
      setDatas((prev) => [...prev, ...newDatas]);

      setIsAdding((prev) => false);
    }
  };

  return { datas, isLoading, findIssuse, addDatas };
}
