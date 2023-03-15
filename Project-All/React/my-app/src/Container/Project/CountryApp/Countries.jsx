import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

function Countries(props) {
  return (
    <div>
      <h1>Soruj Mahmud</h1>
      {props.Countries.map(country => {
        const countryNew = { country, id: uuidv4() };
        return <Country {...countryNew} key={countryNew.id} />;
      })}
    </div>
  );
}

export default Countries;
