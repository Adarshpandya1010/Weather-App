import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, List, ListItem } from "@material-ui/core";
import { captial } from "../redux/Action";
import { Loder } from "./Loader";
import { useHistory } from "react-router-dom";

export default function CapitalDetails() {
  const state = useSelector((state) => state);
  const getCapitalData = useSelector((state) => state.getCapitalData);
  const history = useHistory();
  const dispatch = useDispatch();
  const goBackHandler = () => {
    history.push("/");
  };
  useEffect(() => {
    const fetch = () => {
      const url = `http://api.weatherstack.com/current?access_key=8ca8819de637a0b63aaabfaee5267cff&query=${state.getCountryData.capital}`;
      dispatch(captial(url));
    };
    fetch();
  }, [state.getCountryData.capital, dispatch]);

  const render = () => {
    if (state.loading === true) {
      return <Loder></Loder>;
    } else {
      return (
        <div>
          <h1>Capital Weather Detials</h1>
          <hr />
          <List>
            <ListItem>
              <label>temperature:</label> <h5>{getCapitalData.temperature}</h5>
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>wind_speed:</label> <h5>{getCapitalData.wind_speed}</h5>
            </ListItem>
            <hr />
            <ListItem>
              <label>precip :</label> <h5>{getCapitalData.precip}</h5>
            </ListItem>
            <hr />
            <ListItem>
              <label>Flag :</label>{" "}
              <img src={getCapitalData.weather_icons} alt="img" width="50px" />
            </ListItem>
            <hr />
          </List>

          <Button variant="outlined" color="primary" onClick={goBackHandler}>
            GO BACK
          </Button>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
}
