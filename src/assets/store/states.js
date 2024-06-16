import { createSlice, configureStore } from "@reduxjs/toolkit";
import { removeTrailingEquals } from "./calculation.js";

// Function to evaluate an expression with proper order of operations
const evaluateExpression = (expression) => {
  try {
    // Remove any trailing equals sign for evaluation
    expression = expression.replace(/=$/, "");
    // Use Function constructor for safe evaluation
    return new Function("return " + expression)();
  } catch (error) {
    return "Error";
  }
};

// Function to check if a character is an operator
const isOperator = (char) => /[+\-*/]/.test(char);

const initialDisplayState = {
  displayText: "",
};

const displayState = createSlice({
  name: "displayState",
  initialState: initialDisplayState,
  reducers: {
    changer(state, action) {
      const input = action.payload;

      if (input === "=") {
        state.displayText = evaluateExpression(state.displayText).toString();
      } else {
        const lastChar = state.displayText.slice(-1);

        if (isOperator(lastChar) && isOperator(input)) {
          // If last character and current input both are operators, replace the last operator
          state.displayText = state.displayText.slice(0, -1) + input;
        } else {
          state.displayText += input;
        }

        state.displayText = removeTrailingEquals(state.displayText);
      }
    },
    resetDisplay(state) {
      state.displayText = "";
    },
  },
});

const store = configureStore({
  reducer: { displayState: displayState.reducer },
});

export const displayStateActions = displayState.actions;
export default store;
