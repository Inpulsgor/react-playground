export interface IProps {}

export interface IState {
  todos: Array<Todo>;
}

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
