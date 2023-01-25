import React from "react";

const List = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No items</p>;
  }
  return (
    <div>
      {items.map((item) => (
        <div key={item.name} style={{ display: "flex" }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default List;
