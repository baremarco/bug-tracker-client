import { useState, useEffect } from "react";
import { getUsers } from "../../data/user.data.ts";
import { IOption } from "../../typings/components/common/select";
import { AxiosError } from "axios";
import { GENERAL_ERROR_MSG } from "../constants.ts";

function useUser() {
  const [users, setUsers] = useState<IOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{message: string, status?: number}>();

  useEffect(() => {
    const listUsers = async () => {
      try {
        const usersResponse = await getUsers();
        setUsers(usersResponse);
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
    listUsers();
  }, []);

  return { users, loading, error };
}

export default useUser;