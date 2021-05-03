import { Button, List, ListItem } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Loder } from "./Loader";
import { useHistory, Link } from "react-router-dom";
export default function CountryDetails() {
  const getCountryData = useSelector((state) => state.getCountryData);
  const state = useSelector((state) => state);
  const history = useHistory();
  const goBackHandler = () => {
    state.error = null;

    history.push("/");
  };
  const render = () => {
    if (state.loading === true) {
      return <Loder></Loder>;
    } else if (state.error !== null) {
      return (
        <>
          <h1>country name is not correct </h1>
          <Button variant="outlined" color="primary" onClick={goBackHandler}>
            GO BACK
          </Button>
        </>
      );
    } else {
      return (
        <div>
          <h1>Country Weather Detials</h1>
          <hr />
          <List>
            <ListItem>
              <label>Capital:</label> <h5>{getCountryData.capital}</h5>
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>Population:</label> <h5>{getCountryData.population}</h5>
            </ListItem>
            <hr />
            <ListItem>
              <label>Latlng :</label>{" "}
              <h5>{JSON.stringify(getCountryData.latlng)}</h5>
            </ListItem>
            <hr />
            <ListItem>
              <label>Flag :</label>{" "}
              <img src={getCountryData.flag} alt="img" width="50px" />
            </ListItem>
            <hr />
          </List>
          <Link to="/capitalDetails">
            {" "}
            <Button variant="outlined" color="primary">
              CapitalWeather
            </Button>
          </Link>
        </div>
      );
    }
  };

  //console.log("getCountryData---------------------", getCountryData);

  return <div>{render()}</div>;
}
