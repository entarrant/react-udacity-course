import React from "react";

class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ShoppingList;
