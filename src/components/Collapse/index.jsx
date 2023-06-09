import React, { useState } from "react";
import "../Collapse/Collapse.scss"
import openImg from "../../assets/open-vector.svg"
import closedImg from "../../assets/closed-vector.png"

const Collapse = (props) => {

const [open, setOpen] = useState(false);
const [image, setImage] = useState(openImg)

const toggle = () => {
    setOpen(!open);
    setImage(open ? openImg : closedImg);
  };
  
  return (
    <div className="collapse__wrapper">
      <button className="collapse__btn" onClick={toggle}>
        {props.label}
      <img className="collapse__img" src={image} alt="Toggle Collapse" />
      </button>
      {open && (
        <div className="collapse__text">
          {props.collapseDescription.map((name, index) => (
            <p key={index}>
              {name}
            </p>
        ))}
        </div>
      )}
    </div>
  )
}
 
export default Collapse