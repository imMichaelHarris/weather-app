import React from "react";
import { connect } from "react-redux";
import {getWeather} from '../actions'

import WeatherAlert from "./WeatherAlert";

class WeatherViewContainer {

    componentDidMount(){
        //soon TM
    }
  render() {
    return <div>{/* <WeatherAlert /> */}</div>;
  }
}

export default connect(null, {getWeather})(WeatherViewContainer);
