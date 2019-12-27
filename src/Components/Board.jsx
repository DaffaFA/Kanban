/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import BoardItem from "./BoardItem";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      title: ''
    };
  }

  toggleCreate = e => {
    e.preventDefault();
    this.setState(state => ({
      create: !state.create
    }));
  };

  bindTitle = e => {
    this.setState({
      title: e.target.value
    })
  }

  render = () => {
    const {
      board: { id, title },
      items,
      onDelete,
      onRight,
      onLeft,
      addItem
    } = this.props;

    let item = items
      .filter(item => item.boardId === id)
      .map(item => (
        <BoardItem
          key={item.id}
          onDelete={onDelete}
          onLeft={onLeft}
          onRight={onRight}
          items={item}
        />
      ));

    return (
      <div className="column is-3">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">{title}</p>
          </header>
          <div className="card-content">
            <div className="content">{item}</div>
          </div>
          <footer className="card-footer">
            {this.state.create ? (
              <form onSubmit={ e => addItem(e, id, this.state.title) }>
                <input
                  className="input"
                  onBlur={this.toggleCreate}
                  autoFocus
                  type="text"
                  onChange={this.bindTitle}
                />
                <label htmlFor="">Enter to submit</label>
              </form>
            ) : (
              <a
                href="#"
                className="card-footer-item"
                onClick={this.toggleCreate}
              >
                Create new Item
              </a>
            )}
          </footer>
        </div>
      </div>
    );
  };
}

export default Board;
