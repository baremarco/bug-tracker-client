import { fetchProjects } from "../services/project.service.ts";
import { IOption } from "../typings/components/common/select";

export const getProjects = async (): Promise<IOption[]> => {
  const serviceResponse = await fetchProjects();
  return serviceResponse.projects.map(project => ({value: project.id.toString(), label: project.name}));
};
