import React, { useState } from "react";
import { Link } from "react-router-dom";
import BURGER from "./burger-bar.png";

const lineItemStyle = { listStyle: "none" };

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <div style={{ background: "#eee", position: "sticky", top: 0 }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 25 }}>Redux wprowadzenie</h1>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "transparent",
            border: "none",
            width: "fit-content",
            margin: 0,
          }}
        >
          <img width={35} src={BURGER} alt="burger" />
        </button>
      </div>
      <dialog open={open} onClick={handleCloseClick}>
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: 90,
            color: "black",
            position: "absolute",
            width: "fit-content",
            top: 20,
            right: 100,
          }}
        >
          &times;
        </button>
        <article onClick={(e) => e.stopPropagation()}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
            }}
          >
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/">
                Warm Up
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/redux-setup">
                Redux Setup
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/basics">
                Basics
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/intermediate">
                Intermediate
              </Link>
            </li>
          </ul>
        </article>
      </dialog>
    </div>
  );
};
