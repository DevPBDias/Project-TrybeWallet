import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import emailAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
  }

  correctEmailAndPassword = () => {
    const { email, password } = this.state;
// google regex validate email
    const emailLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkingEmail = emailLogin.test(email);

    const mininmumCaracteres = 6;
    const passwordLength = password.length >= mininmumCaracteres;

    const condicao = [checkingEmail, passwordLength];
    const verifyTrue = condicao.every((elemento) => elemento === true);
    this.setState({ buttonDisabled: !verifyTrue });
  }

  handleChangeEmail = ({ target }) => {
    this.setState({ email: target.value }, this.correctEmailAndPassword);
  }

  handleChangePassword = ({ target }) => {
    this.setState({ password: target.value }, this.correctEmailAndPassword);
  }

  handleClickBtn = () => {
    const { email } = this.state;
    const { addEmail } = this.props;
    addEmail(email);
  }

  render() {
    const { buttonDisabled } = this.state;
    return (
      <div className="form-login">
        <h3>Faça seu Login</h3>
        <label htmlFor="login-input">
          Email
          <input
            onChange={ this.handleChangeEmail }
            className="input-email"
            id="login-input"
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="login-password">
          Senha
          <input
            onChange={ this.handleChangePassword }
            className="input-password"
            id="login-password"
            type="password"
            data-testid="password-input"
          />
        </label>
        <Link
          to="/carteira"
        >
          <button
            className="button"
            onClick={ this.handleClickBtn }
            type="button"
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
