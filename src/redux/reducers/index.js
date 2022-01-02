import * as types from '../types';

const initialState = {
  data: [],
  showMarks: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MARKS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.SHOW_HIDE_MARKS: {
      return {
        ...state,
        showMarks: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
