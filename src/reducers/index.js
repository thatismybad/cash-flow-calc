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
import { INCOME } from "../constants";

const initialState = {
  initialAccountBalance: 0,
  currentAccountBalance: 0,
  incomeData: [],
  expenseData: []
};

function calculateTotalIncome(array) {
  let total = 0;
  array.forEach((item) => {
    if (item.isIncluded) {
      total += item.isAlternativeSelected ? item.altAmount : item.amount;
    }
  });
  return total;
}

function calculateTotalExpense(array) {
  let total = 0;
  array.forEach((item) => {
    total += item.isIncluded ? item.amount : 0;
  });
  return total;
}

function calculateCurrentBalance(initialBalance, income, outcome) {
  return initialBalance + income - outcome;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomeData: state.incomeData.concat(action.payload)
      };
    case EDIT_INCOME:
      return {
        ...state,
        incomeData: state.incomeData.concat(action.payload)
      };
    case REMOVE_INCOME:
      return {
        ...state,
        incomeData: state.incomeData.filter(
          (income) => income.id !== action.payload
        )
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenseData: state.expenseData.concat(action.payload)
      };
    case EDIT_EXPENSE:
      return {
        ...state,
        expenseData: state.expenseData.concat(action.payload)
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenseData: state.expenseData.filter(
          (expense) => expense.id !== action.payload
        )
      };
    case CHANGE_IS_INCLUDED:
      const data =
        action.payload.type === INCOME ? state.incomeData : state.expenseData;
      const inclIdx = data.findIndex((item) => item.id === action.payload.id);
      const newInclArray = [...data];
      newInclArray[inclIdx].isIncluded = action.payload.value;
      if (action.payload.type === INCOME) {
        return {
          ...state,
          incomeData: newInclArray,
          currentAccountBalance: calculateCurrentBalance(
            state.initialAccountBalance,
            calculateTotalIncome(newInclArray),
            calculateTotalExpense(state.expenseData)
          )
        };
      }
      return {
        ...state,
        outcomeData: newInclArray,
        currentAccountBalance: calculateCurrentBalance(
          state.initialAccountBalance,
          calculateTotalIncome(state.incomeData),
          calculateTotalExpense(newInclArray)
        )
      };
    case CHANGE_IS_ALTERNATIVE:
      const altIdx = state.incomeData.findIndex(
        (item) => item.id === action.payload.id
      );
      const newAltArray = [...state.incomeData];
      newAltArray[altIdx].isAlternativeSelected = action.payload.value !== 0;
      return {
        ...state,
        incomeData: newAltArray,
        currentAccountBalance: calculateCurrentBalance(
          state.initialAccountBalance,
          calculateTotalIncome(newAltArray),
          calculateTotalExpense(state.expenseData)
        )
      };
    case UPDATE_INITIAL_ACCOUNT_BALANCE:
      return {
        ...state,
        initialAccountBalance: action.payload,
        currentAccountBalance: calculateCurrentBalance(
          action.payload,
          calculateTotalIncome(state.incomeData),
          calculateTotalExpense(state.expenseData)
        )
      };
    case UPDATE_CURRENT_ACCOUNT_BALANCE:
      return {
        ...state,
        currentAccountBalance: calculateCurrentBalance(
          state.currentAccountBalance,
          calculateTotalIncome(state.incomeData),
          calculateTotalExpense(state.expenseData)
        )
      };
    default:
      return state;
  }
}

export default reducer;
