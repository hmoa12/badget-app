import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configurestore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4000, createdAt: 200}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Water bill', amount: 109500, createdAt: 500}));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

const jsx =(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
