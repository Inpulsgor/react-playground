type Color = {
  label: string;
  color: string;
};

export interface IProps {
  colors: Array<Color>;
}
export interface IState {
  activeColor: number;
}
