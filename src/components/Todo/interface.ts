export interface IProps {}

export interface IState {
  todos: Array<Todo>;
  name: string;
  email: string;
}

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
