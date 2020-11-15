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
import { INCOME } from "../constants";

const initialState = {
  initialAccountBalance: 0,
  currentAccountBalance: 0,
  incomeData: [
    {
      id: 1,
      description: "PhD stipendium",
      date: "11.11.2020",
      isIncluded: false,
      amount: 11500,
      altAmount: 9600,
      isAlternativePossible: true,
      isAlternativeSelected: true
    },
    {
      id: 2,
      description: "Weby Helena",
      date: "12.11.2020",
      isIncluded: false,
      amount: 28800,
      altAmount: 12000,
      isAlternativePossible: true,
      isAlternativeSelected: true
    },
    {
      id: 3,
      description: "TAČR MedCal",
      date: "11.11.2020",
      isIncluded: false,
      amount: 10000,
      altAmount: 0,
      isAlternativePossible: false,
      isAlternativeSelected: false
    },
    {
      id: 4,
      description: "TAČR Hotely",
      date: "13.11.2020",
      isIncluded: false,
      amount: 4000,
      altAmount: 0,
      isAlternativePossible: false,
      isAlternativeSelected: false
    },
    {
      id: 5,
      description: "Mobilní appka - Recruitis",
      date: "12.11.2020",
      isIncluded: false,
      amount: 19000,
      altAmount: 0,
      isAlternativePossible: true,
      isAlternativeSelected: true
    }
  ],
  outcomeData: [
    {
      id: 1,
      description: "Nájem - září",
      date: "20.09.2020",
      isIncluded: false,
      amount: 9200
    },
    {
      id: 2,
      description: "Nájem - říjen",
      date: "20.10.2020",
      isIncluded: false,
      amount: 9200
    },
    {
      id: 3,
      description: "Nájem - listopad",
      date: "20.11.2020",
      isIncluded: false,
      amount: 9200
    },
    {
      id: 4,
      description: "Nájem - nedoplatky",
      date: "01.06.2020",
      isIncluded: false,
      amount: 3459.34
    },
    {
      id: 5,
      description: "Brácha - 10k",
      date: "01.08.2020",
      isIncluded: false,
      amount: 10000
    },
    {
      id: 6,
      description: "Petra - kauce",
      date: "12.11.2020",
      isIncluded: false,
      amount: 3000
    }
  ]
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

function calculateTotalOutcome(array) {
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
    case ADD_OUTCOME:
      return {
        ...state,
        outcomeData: state.outcomeData.concat(action.payload)
      };
    case EDIT_OUTCOME:
      return {
        ...state,
        outcomeData: state.outcomeData.concat(action.payload)
      };
    case REMOVE_OUTCOME:
      return {
        ...state,
        outcomeData: state.outcomeData.filter(
          (outcome) => outcome.id !== action.payload
        )
      };
    case CHANGE_IS_INCLUDED:
      const data =
        action.payload.type === INCOME ? state.incomeData : state.outcomeData;
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
            calculateTotalOutcome(state.outcomeData)
          )
        };
      }
      return {
        ...state,
        outcomeData: newInclArray,
        currentAccountBalance: calculateCurrentBalance(
          state.initialAccountBalance,
          calculateTotalIncome(state.incomeData),
          calculateTotalOutcome(newInclArray)
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
          calculateTotalOutcome(state.outcomeData)
        )
      };
    case UPDATE_INITIAL_ACCOUNT_BALANCE:
      return {
        ...state,
        initialAccountBalance: action.payload,
        currentAccountBalance: calculateCurrentBalance(
          action.payload,
          calculateTotalIncome(state.incomeData),
          calculateTotalOutcome(state.outcomeData)
        )
      };
    case UPDATE_CURRENT_ACCOUNT_BALANCE:
      return {
        ...state,
        currentAccountBalance: calculateCurrentBalance(
          state.currentAccountBalance,
          calculateTotalIncome(state.incomeData),
          calculateTotalOutcome(state.outcomeData)
        )
      };
    default:
      return state;
  }
}

export default reducer;
