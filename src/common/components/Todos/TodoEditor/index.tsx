import { ChangeEvent, Component } from 'react';
import { IProps, IState } from './interafce';

class TodoEditor extends Component<IProps, IState> {
  state = {
    message: '',
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.props.onAddTodo(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={message} onChange={this.handleChange}></textarea>
        <button type="submit">Save </button>
      </form>
    );
  }
}

export default TodoEditor;
