import "./App.css";
import { useEffect, useState } from "react";
import { List, ListItem } from "./components/List";

const useThings = () => {
  const [things, setThings] = useState([]);
  useEffect(() => {
    window.electronAPI.listThings().then((_things) => {
      setThings(_things);
    });
  }, []);
  return things;
};

function App() {
  const things = useThings();
  return (
    <div className="App">
      <h1>Things</h1>
      <List>
        {things.map((thing) => (
          <ListItem id={thing.name}>{thing.name}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
