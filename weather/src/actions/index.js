import axios from "axios";

export const FETCH_WEATHER_START = "FETCH_WEATHER_START";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILED = "FETCH_WEATHER_FAILED";

export const getWeather = () => dispatch => {
  dispatch({ type: FETCH_WEATHER_START });
  axios
    .get('https://api.weather.gov/alerts')
    .then(res => {
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data.features });
    })
    .catch(err => {
      dispatch({type: FETCH_WEATHER_FAILED, payload: err})
    });
};
