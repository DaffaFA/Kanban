import React, { useState, createRef } from "react";
import { KanbanContext } from "../Contexts/KanbanContext";

const KanbanCreateItem = ({ blur, boardId }) => {
  const [title, setTitle] = useState("");
  const inputRef = createRef();

  return (
    <KanbanContext.Consumer>
      {({ addItem }) => (
        <form
          onSubmit={e => {
            addItem(e, title, boardId);
            setTitle("");
            inputRef.current.blur();
          }}
        >
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onBlur={() => blur()}
            autoFocus
            ref={inputRef}
            className="input"
          />
        </form>
      )}
    </KanbanContext.Consumer>
  );
};

export default KanbanCreateItem;
