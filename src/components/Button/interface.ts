export interface IProps {
  style: string;
  type?: Type;
  isVisible?: boolean;
  onClick?: () => void;
}

enum Type {
  submit = 'submit',
  button = 'button',
  reset = 'reset',
}
