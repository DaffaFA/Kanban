import React, { Component } from "react";
import Board from "./Board";

class Kanban extends Component {
  constructor() {
    super();
    this.state = {
      boards: [
        {
          id: 1,
          title: "On Working"
        },
        {
          id: 2,
          title: "Done"
        },
        {
          id: 3,
          title: "Stuck"
        }
      ],
      items: [
        {
          id: 1,
          boardId: 1,
          title: "Abeu"
        },
        {
          id: 2,
          boardId: 1,
          title: "eleuh"
        },
        {
          id: 3,
          boardId: 2,
          title: "Jatuh"
        }
      ]
    };
  }

  toRight = (id, e) => {
    e.preventDefault();
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          if (item.boardId < state.boards.length) {
            item.boardId = item.boardId + 1;
          }
        }
        return item;
      })
    }));
  };

  toLeft = (id, e) => {
    e.preventDefault();
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          if (item.boardId !== 1) {
            item.boardId = item.boardId - 1;
          }
        }
        return item;
      })
    }));
  };

  deleteItem = (id, e) => {
    e.preventDefault();
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  };

  addItem = (e, id, title) => {
    e.preventDefault();
    this.setState(state => ({
      items: [
        ...state.items,
        {
          id: state.items.length + 1,
          title: title,
          boardId: id
        }
      ]
    }));
  };

  render = () => {
    let boards = this.state.boards.map(board => (
      <Board
        key={board.id}
        board={board}
        addItem={this.addItem}
        items={this.state.items}
        onDelete={this.deleteItem}
        onLeft={this.toRight}
        onRight={this.toLeft}
      />
    ));

    return (
      <div className="container">
        <div className="columns">{boards}</div>
      </div>
    );
  };
}

export default Kanban;
