import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    <form action="">
      <label htmlFor="">
        <input type="text" />
      </label>
      <label htmlFor="">
        <input type="tel" />
      </label>
      <button type="submit"></button>
    </form>;
  }
}
