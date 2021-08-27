import React, { useState } from "react";
import "./Box.css";
import { data } from "../../assets/data";
import SinglePeople from "../singlePeople/SinglePeople";
import Button from "../button/Button";

const Box = () => {
  const [peoples, setPeoples] = useState(data);
  const likeHandler = (id) => {
    const newPeoples = [...peoples];

    const indexOfTarget = newPeoples.findIndex((person) => person.id === id);
    newPeoples[indexOfTarget].liked = !newPeoples[indexOfTarget].liked;

    setPeoples(newPeoples);
  };
  const singleRemoveHandler = (id) => {
    const newPeoples = peoples.filter((person) => person.id !== id);
    setPeoples(newPeoples);
  };
  const clearHandler = () => {
    setPeoples([]);
  };

  if (peoples.length === 0) {
    return (
      <div className="box-container flex-col">
        <h2>There is no persons Birthday today</h2>

        <Button clearHandler={clearHandler} />
      </div>
    );
  }

  return (
    <div className="box-container flex-col">
      {peoples.map((singlePeople) => {
        return (
          <SinglePeople
            singlePeople={singlePeople}
            key={singlePeople.id}
            likeHandler={likeHandler}
            singleRemoveHandler={singleRemoveHandler}
          />
        );
      })}

      <Button clearHandler={clearHandler} />
    </div>
  );
};

export default Box;
