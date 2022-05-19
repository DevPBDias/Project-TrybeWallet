import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import './Wallet.css';
import { getCurrencyThunk } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencyProp } = this.props;
    getCurrencyProp();
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        <div className="header">
          <header
            className="email-header"
            data-testid="email-field"
          >
            {email}
          </header>
          <div className="money-header">
            <p
              className="currency-header"
              data-testid="header-currency-field"
            >
              BRL
            </p>
            <p
              className="expenses-header"
              data-testid="total-field"
            >
              0
            </p>
          </div>
        </div>
        <Form />
      </section>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyProp: (currency) => dispatch(getCurrencyThunk(currency)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencyProp: PropTypes.func.isRequired,
  // expenses: PropTypes.number.isRequired,
  // currencies: PropTypes.arrayOf(string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
