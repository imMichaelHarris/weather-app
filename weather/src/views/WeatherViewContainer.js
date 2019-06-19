import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";

import WeatherAlert from "./WeatherAlert";

class WeatherViewContainer extends React.Component{
  componentDidMount() {
    //soon TM
    this.props.getWeather()
  }
  render() {
    return (<div>{/* <WeatherAlert /> */}<h2>Test</h2></div>);
  }
}

const mapStateToProps = state => {
  return {
    weatherAlerts: state.weatherAlerts,
    fetching: state.fetching
  }
}
export default connect(
  mapStateToProps,
  { getWeather }
)(WeatherViewContainer);
