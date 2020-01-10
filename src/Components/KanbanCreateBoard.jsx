import React, { useState, createRef } from "react";
import { KanbanContext } from "../Contexts/KanbanContext";

const KanbanCreateBoard = () => {
  const [onInput, setOnInput] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = createRef();

  return (
    <KanbanContext.Consumer>
      {({ addBoard }) => (
        <div className="column is-3">
          <div className="card">
            <header className="card-header">
              {onInput ? (
                <form
                  onSubmit={e => {
                    addBoard(e, title);
                    setTitle("");
                    inputRef.current.blur();
                  }}
                >
                  <input
                    type="text"
                    className="input"
                    value={title}
                    ref={inputRef}
                    onBlur={() => setOnInput(!onInput)}
                    onChange={e => setTitle(e.target.value)}
                  />
                </form>
              ) : (
                <p
                  className="card-header-title"
                  onDoubleClick={() => setOnInput(!onInput)}
                >
                  Double click to create new board
                </p>
              )}
            </header>
          </div>
        </div>
      )}
    </KanbanContext.Consumer>
  );
};

export default KanbanCreateBoard;
