type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export interface IProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
}
