import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
// import './Form.css';
// import { getCurrencyThunk } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
    //   id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    //   exchangeRates: '',
    };
  }

  handleChangeValue = ({ target }) => {
    this.setState({ value: target.value });
  }

  handleChangeDescription = ({ target }) => {
    this.setState({ description: target.value });
  }

  handleChangeCurrency = ({ target }) => {
    this.setState({ currency: target.value });
  }

  handleChangeMethod = ({ target }) => {
    this.setState({ method: target.value });
  }

  handleChangeTag = ({ target }) => {
    this.setState({ tag: target.value });
  }

  // handleChangeExchangeRates = ({ target }) => {
  //     const { exchangeRates } = this.state;

  // }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(this.state);
    return (
      <section>
        <label htmlFor="value-input">
          Valor:
          <input
            value={ value }
            onChange={ this.handleChangeValue }
            className="input-value"
            id="value-input"
            type="text"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            value={ currency }
            id="currency-input"
            onChange={ this.handleChangeCurrency }
          >
            {
            // https://www.codegrepper.com/code-examples/whatever/.map+select+option+jsx
              currencies.map((coins) => <option key={ coins }>{coins}</option>)
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            value={ method }
            id="method-input"
            data-testid="method-input"
            onChange={ this.handleChangeMethod }
          >
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            value={ tag }
            id="tag-input"
            data-testid="tag-input"
            onChange={ this.handleChangeTag }
          >
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
            value={ description }
            onChange={ this.handleChangeDescription }
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
