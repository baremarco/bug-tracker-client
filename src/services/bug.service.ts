import { IBug } from "../typings/components/common/common";
import axiosInstance from "../utils/axiosInstance";

export interface IParams {
  project_id: string;
  user_id: string;
  start_date: string;
  end_date: string;
}

export const fetchBugs = async (params: Partial<IParams>) => {
  const response = await axiosInstance.get<{bugs: IBug[]}>('/bugs', { params });
  return response.data;
};

export const createBug = async (bug: { user: number; project: number; description: string}) => {
  const response = await axiosInstance.post('/bug', bug);
  return response.status;
};