import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteText, setModalState } from "../../redux/action";
import Button from "react-bootstrap/Button";


function DragArea({ selector }) {
  if (selector.length > 0) {
    localStorage.setItem("data", JSON.stringify(selector));
  }
  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (event.target.classList.contains("borderClass")) {
      event.target.classList.remove("borderClass");
    } else {
      event.target.classList.add("borderClass");
      event.target.focus();
    }
  };
  function handleKeyDown(event, data) {
    const dataToTransfer = {
      X: data.X,
      Y: data.Y,
      type: data.type,
      isModalOpen: true,
      text: data.text,
      fontSize: data.fontSize,
      fontWeight: data.fontWeight,
      id: data.id,
    };
    if (event.keyCode === 13) {
      dispatch(setModalState(dataToTransfer));
    } else if (event.keyCode === 46) {
      dispatch(deleteText(dataToTransfer));
    }
  }
  return (
    <div>
      {selector.map((data) => {
        if (data.type === "Label") {
          return (
            <span
              className="spanHover"
              style={{
                display: "block",
                position: "absolute",
                left: data.X + "px",
                top: data.Y + "px",
                fontWeight: data.fontWeight,
                fontSize: data.fontSize,
                outlineColor:"red"
              }}
              onClick={handleClick}
              onKeyDown={(event) => handleKeyDown(event, data)}
              tabIndex={0}
              id={data.id}
            >
              {data.text}
            </span>
          );
        } else if (data.type === "Button") {
          return (
            <button
              variant="primary"
              className="spanHover"
              style={{
                display: "block",
                position: "absolute",
                left: data.X + "px",
                top: data.Y + "px",
                fontWeight: data.fontWeight,
                fontSize: data.fontSize,
                outlineColor:"red",
                height: "49px",
                backgroundColor:"#0044C1",
                borderRadius: "4px",
                color:"white"
                

              }}
              onClick={handleClick}
              onKeyDown={(event) => handleKeyDown(event, data)}
              tabIndex={0}
              id={data.id}
            >
              {data.text}
            </button>
          );
        } else {
          return (
            <input
              className="spanHover"
              style={{
                display: "block",
                position: "absolute",
                left: data.X + "px",
                top: data.Y + "px",
                fontWeight: data.fontWeight,
                fontSize: data.fontSize,
                width: "298px",
                height: "49px"

              }}
              onClick={handleClick}
              onKeyDown={(event) => handleKeyDown(event, data)}
              tabIndex={0}
              id={data.id}
              value={data.text}
            />
          );
        }
      })}
    </div>
  );
}

export default DragArea;
