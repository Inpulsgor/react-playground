import React, { Component, ChangeEvent } from 'react';
import shortid from 'shortid';
import { IProps, IState } from './interface';
import styles from './styles.module.scss';

class Form extends Component<IProps, IState> {
  state = {
    name: '',
    email: '',
    level: 'junior',
    accepted: false,
  };

  nameID = shortid.generate();
  emailID = shortid.generate();

  handleChange = ({
    currentTarget: { name, value },
  }: ChangeEvent<HTMLInputElement>) => this.setState({ [name]: value });

  handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.formSubmit({
      name: this.state.name,
      email: this.state.email,
    });

    this.formReset();
  };

  handleAgreeChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ accepted: currentTarget.checked });
  };

  formReset = () => this.setState({ name: '', email: '' });

  render() {
    const { name, email, level, accepted } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameID}>Name</label>
        <input
          type="text"
          id={this.nameID}
          name="name"
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor={this.emailID}>Email</label>
        <input
          type="email"
          id={this.emailID}
          name="email"
          value={email}
          onChange={this.handleChange}
        />

        <p>Your level:</p>

        <label>
          <input
            type="radio"
            name="level"
            value="junior"
            onChange={this.handleChange}
            checked={level === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="level"
            value="middle"
            onChange={this.handleChange}
            checked={level === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="level"
            value="senior"
            onChange={this.handleChange}
            checked={level === 'senior'}
          />
          Senior
        </label>

        <label>
          <input
            type="checkbox"
            name="accepted"
            checked={accepted}
            onChange={this.handleAgreeChange}
          />
          Accept terms
        </label>

        <button type="submit" disabled={!accepted}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
