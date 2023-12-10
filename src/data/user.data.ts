import { fetchUsers } from "../services/user.service.ts";
import { IOption } from "../typings/components/common/select";

export const getUsers = async (): Promise<IOption[]> => {
  const serviceResponse = await fetchUsers();
  return serviceResponse.users.map(user => ({value: user.id.toString(), label: `${user.name} ${user.surname}`}));
};
