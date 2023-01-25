import "./App.css";
import { useEffect, useState } from "react";
import List from "./components/List";

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
      <List items={things} />
    </div>
  );
}

export default App;
