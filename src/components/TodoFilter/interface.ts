import { ChangeEvent } from 'react';

export interface IProps {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
