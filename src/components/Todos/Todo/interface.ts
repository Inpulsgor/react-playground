import { ReactNode } from 'react';
export interface IProps {
  children?: ReactNode;
}

export interface IState {
  todos: Array<Todo>;
  filter: string;
}

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
