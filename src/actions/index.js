import {
  ADD_INCOME,
  EDIT_INCOME,
  CHANGE_IS_INCLUDED,
  CHANGE_IS_ALTERNATIVE,
  REMOVE_INCOME,
  ADD_OUTCOME,
  EDIT_OUTCOME,
  REMOVE_OUTCOME,
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

export function addOutcome(payload) {
  return { type: ADD_OUTCOME, payload };
}

export function editOutcome(payload) {
  return { type: EDIT_OUTCOME, payload };
}

export function removeOutcome(payload) {
  return { type: REMOVE_OUTCOME, payload };
}

export function updateInitialAccountBalance(payload) {
  return { type: UPDATE_INITIAL_ACCOUNT_BALANCE, payload };
}

export function updateCurrentAccountBalance(payload) {
  return { type: UPDATE_CURRENT_ACCOUNT_BALANCE, payload };
}
