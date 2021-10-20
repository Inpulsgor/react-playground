export interface IProps {
  formSubmit: (data: IState) => void;
}

export interface IState {
  name?: string;
  email?: string;
  level?: string;
  accepted?: boolean;
}
