import * as types from '../types';

export const setMarks = (marksArray) => ({
  type: types.SET_MARKS,
  payload: marksArray,
});

export const showHideMarks = (showHide) => ({
  type: types.SHOW_HIDE_MARKS,
  payload: showHide,
});
