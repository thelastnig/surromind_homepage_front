import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

//action types
const SHOW_FOOTER = 'base/SHOW_FOOTER';
const HIDE_FOOTER = 'base/HIDE_FOOTER';

//action creators
export const showFooter = createAction(SHOW_FOOTER);
export const hideFooter = createAction(HIDE_FOOTER);

//initial state
const initialState = Map({
  footer: Map({
    isFooterOpen: true,
    isFooterClose: false,
  }),
});

//reducer
export default handleActions({
  [SHOW_FOOTER]: (state, action) => {
    return state.setIn(['footer', 'isFooterOpen'], true)
            .setIn(['footer', 'isFooterClose'], false);
  },
  [HIDE_FOOTER]: (state, action) => {
    return state.setIn(['footer', 'isFooterOpen'], false)
            .setIn(['footer', 'isFooterClose'], true);
  },
  // ...pender({
  //   type: SIGNUP_NORMAL,
  //   onSuccess: (state, action) => {
  //     const { success, emailDuplicate } = action.payload.data;
  //     return state.setIn(['signup', 'success'], success)
  //                   .setIn(['signup', 'emailDuplicate'], emailDuplicate);
  //   },
  // }),
  // ...pender({
  //   type: LOGIN,
  //   onSuccess: (state, action) => {
  //     const { success, name, zodiacSign } = action.payload.data;
  //     return state.setIn(['login', 'success'], success)
  //                   .setIn(['login', 'name'], name)
  //                   .setIn(['login', 'email'], '')
  //                   .setIn(['login', 'zodiacSign'], zodiacSign);
  //   },
  // }),
  // ...pender({
  //   type: LOGOUT,
  //   onSuccess: (state, action) => {
  //     return state.setIn(['login', 'success'], false)
  //                   .setIn(['login', 'email'], '')
  //                   .setIn(['login', 'password'], '')
  //                   .setIn(['login', 'name'], null)
  //                   .setIn(['login', 'zodiacSign'], null);
  //   },
  // }),

}, initialState);