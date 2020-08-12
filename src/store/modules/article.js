import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

//action types
const SET_NEWS_ARTICLE_ID = 'atricle/SET_NEWS_ARTICLE_ID';
const SET_PROJECT_ID = 'atricle/SET_PROJECT_ID';
const SET_RND_ID = 'atricle/SET_RND_ID';
const SET_CAREER_ID = 'atricle/SET_CAREER_ID';

//action creators
export const setNewsArticleID = createAction(SET_NEWS_ARTICLE_ID);
export const setProjectID = createAction(SET_PROJECT_ID);
export const setRNDID = createAction(SET_RND_ID);
export const setCareerID = createAction(SET_CAREER_ID);

//initial state
const initialState = Map({
  footer: Map({
    newsArticleID: null,
    projectID: null,
    rndID: null,
    careerID: null,
  }),
});

//reducer
export default handleActions({
  [SET_NEWS_ARTICLE_ID]: (state, action) => {
    return state.setIn(['newsArticleID', action.payload], true);
  },
  [SET_PROJECT_ID]: (state, action) => {
    return state.setIn(['projectID', action.payload], true);
  },
  [SET_RND_ID]: (state, action) => {
    return state.setIn(['rndID', action.payload], true);
  },
  [SET_CAREER_ID]: (state, action) => {
    return state.setIn(['careerID', action.payload], true);
  },
}, initialState);