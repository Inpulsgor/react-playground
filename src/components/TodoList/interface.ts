type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export interface IProps {
  todos: Array<Todo>;
  onDeleteTodo: (id: string) => void;
}
