import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <header data-testid="email-field">{email}</header>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">{currencies}</p>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.number.isRequired,
  currencies: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
