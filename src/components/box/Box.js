import React, { useState } from "react";
import "./Box.css";
import { data } from "../../assets/data";
import SinglePeople from "../singlePeople/SinglePeople";
import Button from "../button/Button";

const Box = () => {
  const [peoples, setPeoples] = useState(data);
  const likeHandler = (id) => {
    const changedPerson = peoples.filter((person) => person.id === id)[0];
    changedPerson.liked = !changedPerson.liked;

    const newPeoples = [
      changedPerson,
      ...peoples.filter((person) => person.id !== id),
    ];
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
