import {FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILED} from "../actions"

const initialState = {
  alerts: [],
  fetching: false,
  errors: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};
