import axiosInstance from "../utils/axiosInstance";

export interface IParams {
  project_id: string;
  user_id: string;
  start_date: string;
  end_date: string;
}

export const fetchBugs = async (params: Partial<IParams>) => {
  const response = axiosInstance.get('/bugs', { params });
  return response;
};