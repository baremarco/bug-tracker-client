import { useState, useEffect } from "react";
import { IOption } from "../../typings/components/common/select";
import { AxiosError } from "axios";
import { GENERAL_ERROR_MSG } from "../constants.ts";
import { getProjects } from "../../data/project.data.ts";

function useProject() {
  const [projects, setProjects] = useState<IOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{message: string, status?: number}>();

  useEffect(() => {
    const listProjects = async () => {
      try {
        const projectsResponse = await getProjects();
        setProjects(projectsResponse);
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

    listProjects();

  }, []);

  return { projects, loading, error };
}

export default useProject;