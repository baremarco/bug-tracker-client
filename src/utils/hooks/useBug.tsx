import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { GENERAL_ERROR_MSG } from "../constants.ts";
import { IBug } from "../../typings/components/common/common";
import { getBugs } from "../../data/bug.data.ts";
import { IFormInput } from "../../typings/pages/viewBug.ts";

function useBug() {
  const [bugs, setBugs] = useState<IBug[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{message: string, status?: number}>();
  const [params, setParams] = useState<IFormInput>();

  useEffect(() => {
    const listBugs = async () => {
      if (!params) {
        return {bugs, loading: false, error};
      }
      try {
        setLoading(true);
        const bugsResponse = await getBugs(params);
        setBugs(bugsResponse);
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

    listBugs();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return { bugs, loading, error, setParams };
}

export default useBug;