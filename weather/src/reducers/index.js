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
      case FETCH_WEATHER_SUCCESS:
          console.log(action.payload)
          return {
              ...state,
              fetching: false,
              errors: null,
              alerts: action.payload
          }
          case FETCH_WEATHER_FAILED:
              return {
                  ...state,
                  fetching: false,
                  errors: action.payload
              }
    default:
      return state;
  }
};
