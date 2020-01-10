import React, { Component, createContext } from "react";

export const KanbanContext = createContext();

class KanbanContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      boards: [
        {
          id: 1,
          title: "What to do"
        },
        {
          id: 2,
          title: "On progress"
        }
      ],
      items: [
        {
          id: 1,
          board_id: 1,
          title: "This is what to do"
        },
        {
          id: 2,
          board_id: 2,
          title: "This is what on progress"
        }
      ]
    };
  }

  moveRight = (id, e) => {
    e.preventDefault();
    this.setState(({ boards, items }) => ({
      items: items.map(item => {
        if (item.id === id) {
          if (item.board_id < boards.length) {
            item.board_id = item.board_id + 1;
          }
        }
        return item;
      })
    }));
  };

  moveLeft = (id, e) => {
    e.preventDefault();
    this.setState(({ boards, items }) => ({
      items: items.map(item => {
        if (item.id === id) {
          if (item.board_id > 1) {
            item.board_id = item.board_id - 1;
          }
        }
        return item;
      })
    }));
  };

  deleteItem = id => {
    this.setState(({ items }) => ({
      items: items.filter(item => item.id !== id)
    }));
  };

  addItem = (e, title, boardId) => {
    e.preventDefault();
    this.setState(({ items }) => ({
      items: [
        ...items,
        {
          id: items.length + 1,
          title: title,
          board_id: boardId
        }
      ]
    }));
  };

  addBoard = (e, title) => {
    e.preventDefault();
    this.setState(({ boards }) => ({
      boards: [
        ...boards,
        {
          id: boards.length + 1,
          title: title
        }
      ]
    }));
  };

  render = () => {
    let val = {
      ...this.state,
      moveRight: this.moveRight,
      moveLeft: this.moveLeft,
      deleteItem: this.deleteItem,
      addItem: this.addItem,
      addBoard: this.addBoard
    };
    return (
      <KanbanContext.Provider value={val}>
        {this.props.children}
      </KanbanContext.Provider>
    );
  };
}

export default KanbanContextProvider;
