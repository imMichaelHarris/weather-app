import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED
} from "../actions";

const initialState = {
  alerts: [],
  fetching: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        fetching: true,
        errors: null
      };
    default:
      return state;
  }
};
