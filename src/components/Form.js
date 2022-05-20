import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import './Form.css';
import { expenseAction } from '../actions';

const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  // como reduzir msm essas funçoes todas handle??
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { expenses, dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;
    // criar um variavel com o obj montado, prontinho para mandar para via dispatch para o reducer
    const response = await fetch(CURRENCY_API);
    const currencyData = await response.json();
    const goGoExpenses = {
      id: (expenses.length),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencyData,
    };
    await dispatch(expenseAction(expenses, goGoExpenses));
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
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
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
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
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
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
        <button type="submit" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Form);
