/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { KanbanContext } from '../Contexts/KanbanContext';

class KanbanItem extends Component {
    static contextType = KanbanContext;

    render = () => {
        const { moveLeft, moveRight, deleteItem } = this.context;
        const { item: {id, title} } = this.props;
        return (
            <div className="content">
                <div className="message is-dark">
                    <div className="message-header">
                        <p>{title}</p>
                        <a href="#" onClick={e => moveLeft(id, e)}><i className="icon ion-ios-arrow-dropleft"></i></a>
                        <button className="delete" onClick={() => deleteItem(id)}></button>
                        <a href="#" onClick={e => moveRight(id, e)}><i className="icon ion-ios-arrow-dropright"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default KanbanItem;