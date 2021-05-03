import * as actions from "./ActionTypes";

const initailSate = {
  getCountryData: [],
  getCapitalData: [],
  loading: false,
  error: null,
};

export default function Reducer(state = initailSate, action) {
  switch (action.type) {
    case actions.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        getCountryData: action.payload,
      };
    case actions.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case actions.GET_CW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CW_SUCCESS:
      return {
        ...state,
        loading: false,
        getCapitalData: action.payload,
      };
    case actions.GET_CW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
