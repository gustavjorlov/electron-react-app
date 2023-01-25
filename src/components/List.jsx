import React from "react";

const List = ({ children }) => {
  return <div>{children}</div>;
};

const ListItem = ({ id, children }) => {
  return (
    <div key={id} style={{ display: "flex" }}>
      {children}
    </div>
  );
};

export { List, ListItem };
