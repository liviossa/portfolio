import React from "react";
import LiviuImg from "../../img/Group13.svg";

export function Body() {
  return (
    <div className="body-container">
      <img src={LiviuImg} alt="liviusimg" width="330px" height="330px" />
      <div className="text">
        <h1>Hey, I am Liviu!</h1>
        <p>welcome to my page</p>
      </div>
    </div>
  );
}
