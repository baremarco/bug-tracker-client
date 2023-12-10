import axiosInstance from "../utils/axiosInstance";
import { IUser } from "../typings/components/common/common";

export const fetchUsers = async () => {
  const response = await axiosInstance.get<{users: IUser[]}>('/users');
  return response.data;
};