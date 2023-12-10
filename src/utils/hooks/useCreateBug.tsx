import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { CREATED, GENERAL_ERROR_MSG } from "../constants.ts";
import { ICreateBugInput, addBug } from "../../data/bug.data.ts";
import { UseFormReset } from "react-hook-form";
import { IFormInput } from "../../components/CreateBugForm/CreateBugFrom.tsx";

function useCreateBug(reset: UseFormReset<IFormInput>) {
  const [bug, setBug] = useState<ICreateBugInput>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{message: string, status?: number}>();

  useEffect(() => {
    const createBug = async () => {
      if (!bug) {
        return {bug, loading: false, error};
      }
      try {
        setLoading(true);
        const createBugResponse = await addBug(bug);
        if (createBugResponse === CREATED) {
          reset();
        }
      } catch(err) {
        if (err instanceof AxiosError) {
          console.log(err);
          const errMsg = `${err.message}, ${err.response?.statusText}`;
          setError({message: errMsg, status: err.response?.status});
        } else if (err instanceof Error) {
          setError({message: err.message});
        } else {
          setError({message: GENERAL_ERROR_MSG});
        }
      } finally {
        setLoading(false);
      }
    };

    createBug();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bug]);

  return { loading, error, setBug };
}

export default useCreateBug;