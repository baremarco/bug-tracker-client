import { IParams, fetchBugs } from "../services/bug.service.ts";
import { IBug } from "../typings/components/common/common";
import { IFormInput } from "../typings/pages/viewBug.ts";
import { DATE_FORMAT_API } from "../utils/constants.ts";

const getParams = ({
  project,
  user,
  startDate,
  endDate,
}: IFormInput): Partial<IParams> => ({
  project_id: project,
  user_id: user,
  start_date: startDate?.format(DATE_FORMAT_API),
  end_date: endDate?.format(DATE_FORMAT_API),
});

export const getBugs = async (filter: IFormInput): Promise<IBug[]> => {
  const params = getParams(filter);

  const response = await fetchBugs(params);
  return response.bugs.map(({id, description, creationDate, username, project}) => ({id, description, creationDate, username, project}));
};
