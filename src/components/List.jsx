import React from "react";

const List = ({ children }) => {
  return <div>{children}</div>;
};

const ListItem = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

export { List, ListItem };
