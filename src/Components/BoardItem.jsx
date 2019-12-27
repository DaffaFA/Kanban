/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const justify = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
};

const BoardItem = ({ items: { id, title }, onDelete, onLeft, onRight }) => {
  return (
    <div className="tile">
      <div style={justify}>
        <div>{title}</div>
        <div>
          <a
            href="#"
            style={{ color: "#070707" }}
            onClick={e => onRight(id, e)}
          >
            <i className="icon ion-md-arrow-dropleft"></i>
          </a>
          <a
            href="#"
            style={{ color: "#070707" }}
            onClick={e => onDelete(id, e)}
          >
            <i className="icon ion-md-close"></i>
          </a>
          <a href="#" style={{ color: "#070707" }} onClick={e => onLeft(id, e)}>
            <i className="icon ion-md-arrow-dropright"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoardItem;
