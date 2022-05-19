import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
// import './Form.css';
// import { getCurrencyThunk } from '../actions';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <section>
        <label htmlFor="value-input">
          Valor:
          <input
            // onChange={ this.handleChangeEmail }
            className="input-value"
            id="value-input"
            type="text"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="coin-input">
          Moeda:
          <select id="coin-input">
            {
              // https://www.codegrepper.com/code-examples/whatever/.map+select+option+jsx
              currencies.map((coins) => <option key={ coins }>{coins}</option>)
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select id="method-input" data-testid="method-input">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Categoria:
          <select id="category-input" data-testid="tag-input">
            <option value="food">Alimentação</option>
            <option value="hobby">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            // onChange={ this.handleChangeEmail }
            className="input-description"
            id="description-input"
            type="text"
            data-testid="description-input"
          />
        </label>
      </section>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(string).isRequired,
};

export default connect(mapStateToProps)(Form);
