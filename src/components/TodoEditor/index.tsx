import React, { ChangeEvent, Component } from 'react';
import { IProps, IState } from './interafce';
import styles from './styles.module.scss';

class TodoEditor extends Component<IProps, IState> {
  state = {
    message: '',
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onAddTodo(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <textarea value={message} onChange={this.handleChange}></textarea>
        <button type="submit">Save </button>
      </form>
    );
  }
}

export default TodoEditor;
