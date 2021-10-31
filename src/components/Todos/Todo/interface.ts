import { ReactNode } from 'react';
export interface IProps {
  children?: ReactNode;
}

export interface IState {
  todos: Array<Todo>;
  filter: string;
}

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
