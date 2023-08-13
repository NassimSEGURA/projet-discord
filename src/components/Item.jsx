import React from "react";

export default function Item({
  title,
  text,
  src,
  direction,
  classname1,
  classname2,
  rowNumber,
}) {
  return (
    <div className={`${rowNumber}`}>
      <div className={`container ${direction}`}>
        <div className={`${classname1}`}>
          <img src={src} alt="#" />
        </div>
        <div className={`${classname2}`}>
          <div className="titleWrapper">
            <h2>{title}</h2>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
