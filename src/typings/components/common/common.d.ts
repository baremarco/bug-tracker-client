
export interface IFormInputProps {
  name: string;
  label: string;
}

export interface IBug {
  id:           number;
  description:  string;
  creationDate: Date;
  username:     string;
  project:      string;
}

export interface IUser {
  id:      number;
  name:    string;
  surname: string;
}

export interface IProject {
  id:          number;
  name:        string;
  description: string;
}
