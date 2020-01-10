/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState } from "react";
import { KanbanContext } from "../Contexts/KanbanContext";
import KanbanItem from "./KanbanItem";
import KanbanCreateItem from "./KanbanCreateItem";

const Board = ({ board: { id, title }, items }) => {
  const [creating, setCreating] = useState(false);

  return (
    <div className="column is-3">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
        <div className="card-content">
          {items
            .filter(item => item.board_id === id)
            .map(item => (
              <KanbanItem key={item.id} item={item} />
            ))}
        </div>
        <footer className="card-footer">
          {!creating ? (
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                setCreating(!creating);
              }}
              className="card-footer-item"
            >
              Click to add new item
            </a>
          ) : (
            <KanbanCreateItem
              blur={() => setCreating(!creating)}
              boardId={id}
            />
          )}
        </footer>
      </div>
    </div>
  );
};

class KanbanBoard extends Component {
  static contextType = KanbanContext;

  render = () => {
    const { boards, items} = this.context;
    if (boards.length > 0) {
      return boards.map(board => (
        <Board key={board.id} board={board} items={items} />
      ));
    } else {
      return <p>No items left</p>
    }
  };
}

export default KanbanBoard;
