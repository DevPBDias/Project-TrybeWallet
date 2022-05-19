import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Wallet.css';
import { getCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencyProp } = this.props;
    getCurrencyProp();
  }

  render() {
    const { email, currencies } = this.props;
    console.log(currencies);
    return (
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
            {currencies}
          </p>
          <p
            className="expenses-header"
            data-testid="total-field"
          >
            0
          </p>
        </div>

      </div>);
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
  currencies: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
