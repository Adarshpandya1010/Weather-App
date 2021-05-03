import { GET_API } from "../service/ApiService";
import * as actions from "./ActionTypes";

export const country = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    try {
      const res = await GET_API(url);
      const { capital, population, latlng, flag } = res.data[0];
      const data = { capital, population, latlng, flag };
      dispatch({ type: actions.GET_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const captial = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_CW_REQUEST });
    try {
      const res = await GET_API(url);

      const {
        temperature,
        weather_icons,
        wind_speed,
        precip,
      } = res.data.current;
      const data = { temperature, weather_icons, wind_speed, precip };

      dispatch({ type: actions.GET_CW_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: actions.GET_CW_FAILURE, error: e });
    }
  };
};
