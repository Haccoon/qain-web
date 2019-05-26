import { createAction, handleActions } from "redux-actions";
// ================================================================
// Action Type
// ================================================================
const ACTION_SET_ACCOUNT = "app/ACTION_SET_ACCOUNT";
const ACTION_SET_USER_LANGUAGE = "app/ACTION_SET_USER_LANGUAGE"

// ================================================================
// Action Creator
// ================================================================
export const setAccount = createAction(ACTION_SET_ACCOUNT, account => account);
export const setUserLanguage = createAction(ACTION_SET_USER_LANGUAGE, language => language);

// initial state
const initialState = {
  account: null,
  userSiteLanguage: navigator.language.split('-')[0],
  siteLanguages: {
    ko: "한국어",
    en: "English",
  },
};

const appReducer = handleActions({
  [ACTION_SET_ACCOUNT]: (state, { payload: account }) => ({
    ...state,
    account: account
  }),
  [ACTION_SET_USER_LANGUAGE]: (state, { payload: language }) => ({
    ...state,
    userSiteLanguage: language
  }),
}, initialState);

export default appReducer;
