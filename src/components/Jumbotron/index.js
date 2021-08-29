import React, { useState, useContext } from "react";
import "./styles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";
function MyJumbotron() {
  const [searchInput, setsearchInput] = useState("");
  const { setMeals } = useContext(MyContext);
  function handleSearch() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({ data }) => setMeals(data.meals));
  }
  return (
    <div className="my-jumbotron">
      <h1>Welcome</h1>
      <h2>You can search your favorite meals</h2>
      <div className="button-input">
        <InputGroup className="mb-3 ">
          <FormControl
            placeholder="Search For A meal"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-button"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <Button
            variant="danger"
            id="meal-search-button"
            onClick={handleSearch}
          >
            Button
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default MyJumbotron;
