import React from "react";
import Button from "../button/Button";
import "./SinglePeople.css";

const SinglePeople = (props) => {
  const { id, name, liked, imgUrl, yearOfBirth } = props.singlePeople;
  return (
    <div className="person-cart">
      <div>
        <img src={imgUrl} alt="portfelio" className="img-portfelio" />
      </div>
      <div className="name-age">
        <h2>{name}</h2>
        <p>{2021 - yearOfBirth} YEARS</p>
      </div>
      <div className="btn-flex">
        <Button btnType={liked} id={id} likeHandler={props.likeHandler} />
        <Button
          btnType="remove"
          id={id}
          removeHandler={props.singleRemoveHandler}
        />
      </div>
    </div>
  );
};

export default SinglePeople;
