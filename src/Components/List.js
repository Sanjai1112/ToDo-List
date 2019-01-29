import React, { Component } from "react";

export default class List extends Component {
  render() {
    let div;
    return (
      <div>
        {this.props.name.map((n, index) => {
          div = (
            <h4 key={index}>
              {n}
              <button
                className="btn btn-danger"
                onClick={this.props.delete.bind(this, index)}
              >
                Delete
              </button>
            </h4>
          );
          return div;
        })}
      </div>
    );
  }
}
