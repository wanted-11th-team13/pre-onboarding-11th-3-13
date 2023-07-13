import axios from "axios";
import { useEffect, useState } from "react";
import useOwnerState from "../Context/useOwnerState";
import useRepoState from "../Context/useRepoState";
import { axiosInstance, emptyData } from "../functions/functions";
import useEditKeywordState from "../Context/useEditKeywordState";

const per_page = 1000;
const offset = 5;

let allDatas: IData[] = [];

export default function useDatas() {
  let sliceIdx = 10;

  const [datas, setDatas] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [repo, , befRepo, setBefRepo] = useRepoState();
  const [owner, , befOwner, setBefOwner] = useOwnerState();
  const [editKeyword] = useEditKeywordState();

  useEffect(() => {
    //  if (repo !== befRepo || owner !== befOwner || allDatas.length === 0)

    if (
      (editKeyword === false && (repo !== befRepo || owner !== befOwner)) ||
      allDatas.length === 0
    ) {
      setBefRepo(repo);
      setBefOwner(owner);

      getAllData();
    } else {
      setDatas(allDatas.slice(0, 10));
    }
  }, [repo, owner, editKeyword]);

  const getAllData = async () => {
    setIsAdding(true);
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/repos/${owner}/${repo}/issues?per_page=${per_page}&sort=comments&direction=desc&state=open`
      );

      allDatas = response.data as IData[];
      setDatas(allDatas.slice(0, 10));
    } catch (error) {
      allDatas = [];
      setDatas([]);
    }

    setIsAdding(false);
    setIsLoading(false);
  };

  const findIssuse = async (issueNumber: number) => {
    try {
      const response = await axiosInstance.get(
        `/repos/${owner}/${repo}/issues/${issueNumber}`
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
