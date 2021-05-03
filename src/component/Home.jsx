import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { country } from "../redux/Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputHandler = (evt) => {
    const temp = evt.target.value;
    setInput(temp);
  };

  const submitHandler = () => {
    const url = `https://restcountries.eu/rest/v2/name/${input}`;
    dispatch(country(url));
  };
  return (
    <div>
      <Input
        placeholder="Enter Country Name"
        onChange={inputHandler}
        color="primary"
      />
      <Link to="/countryDetails">
        <Button onClick={submitHandler} variant="outlined" color="primary">
          Submit
        </Button>
      </Link>
    </div>
  );
}
