import { createAction, handleActions } from "redux-actions";
// ================================================================
// Action Type
// ================================================================
const ACTION_SET_ACCOUNT = "app/ACTION_SET_ACCOUNT";
const ACTION_SET_USER_LANGUAGE = "app/ACTION_SET_USER_LANGUAGE"
const ACTION_SET_CATEGORIES = "app/ACTION_SET_CATEGORIES"

// ================================================================
// Action Creator
// ================================================================
export const setAccount = createAction(ACTION_SET_ACCOUNT, account => account);
export const setUserLanguage = createAction(ACTION_SET_USER_LANGUAGE, language => language);
export const setCategories = createAction(ACTION_SET_CATEGORIES, categories => categories);

// initial state
const initialState = {
  account: null,
  userSiteLanguage: navigator.language.split('-')[0],
  siteLanguages: {
    ko: "KOR",
    en: "EN",
  },
  categories: [],
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
  [ACTION_SET_CATEGORIES]: (state, { payload: categories }) => ({
    ...state,
    categories: categories
  }),
}, initialState);

export default appReducer;
