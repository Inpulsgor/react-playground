export interface IProps {
  data?: unknown;
}

export interface IState {
  shapePos: unknown; // pointers to show which type of shape we are using
  rotatePos: number; // pointer to represent which rotation of shape we are using
  xPos: number; // postion of current shape in x direction
  yPos: number; // postion of variable in y direction
  board: unknown;
  speed: number;
  isPause: boolean;
  score: number;
  periodicInterval: unknown;
}
