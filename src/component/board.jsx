import React, { Component } from "react";
import { TITLE } from "../utils/String.js"

class Board extends Component {
    render() {
        return (
            <div className="board-container">
                <h1 className="title">
                    {TITLE.BOARD_TITLE}
                </h1>
                <div className="content-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Board;