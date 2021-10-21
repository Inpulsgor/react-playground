export interface IProps {}

export interface IState {
  todos: Array<Todo>;
  filter: string;
}

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
