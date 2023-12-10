import { Dayjs } from "dayjs";

export interface IFormInput {
user: string;
project: string
startDate: null | Dayjs;
endDate: null | Dayjs;
outForm: string;
}