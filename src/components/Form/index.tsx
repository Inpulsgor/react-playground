import React, { Component, ChangeEvent } from 'react';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class Form extends Component<IProps, IState> {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({
    currentTarget: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    const { name, email } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="email"
          value={email}
          onChange={this.handleChange}
        />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
