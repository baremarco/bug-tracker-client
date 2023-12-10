import axiosInstance from "../utils/axiosInstance";
import { IProject } from "../typings/components/common/common";

export const fetchProjects = async () => {
  const response = await axiosInstance.get<{projects: IProject[]}>('/projects');
  return response.data;
};