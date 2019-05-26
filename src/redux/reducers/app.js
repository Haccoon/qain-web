import { createAction, handleActions } from "redux-actions";
// ================================================================
// Action Type
// ================================================================
const ACTION_SET_ACCOUNT = "app/ACTION_SET_ACCOUNT";

// ================================================================
// Action Creator
// ================================================================
export const setAccount = createAction(ACTION_SET_ACCOUNT, account => account);

// initial state
const initialState = {
  account: null,
};

const appReducer = handleActions({
  [ACTION_SET_ACCOUNT]: (state, { payload: account }) => ({
    ...state,
    account: account
  }),
}, initialState);

export default appReducer;
