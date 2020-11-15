import {
  ADD_INCOME,
  EDIT_INCOME,
  CHANGE_IS_INCLUDED,
  CHANGE_IS_ALTERNATIVE,
  REMOVE_INCOME,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_INITIAL_ACCOUNT_BALANCE,
  UPDATE_CURRENT_ACCOUNT_BALANCE
} from "../constants/actionTypes";

export function addIncome(payload) {
  return { type: ADD_INCOME, payload };
}

export function editIncome(payload) {
  return { type: EDIT_INCOME, payload };
}

export function changeInclude(payload) {
  return { type: CHANGE_IS_INCLUDED, payload };
}

export function changeSelectedAmount(payload) {
  return { type: CHANGE_IS_ALTERNATIVE, payload };
}

export function removeIncome(payload) {
  return { type: REMOVE_INCOME, payload };
}

export function addExpense(payload) {
  return { type: ADD_EXPENSE, payload };
}

export function editExpense(payload) {
  return { type: EDIT_EXPENSE, payload };
}

export function removeExpense(payload) {
  return { type: REMOVE_EXPENSE, payload };
}

export function updateInitialAccountBalance(payload) {
  return { type: UPDATE_INITIAL_ACCOUNT_BALANCE, payload };
}

export function updateCurrentAccountBalance(payload) {
  return { type: UPDATE_CURRENT_ACCOUNT_BALANCE, payload };
}
