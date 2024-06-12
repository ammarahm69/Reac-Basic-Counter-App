import "./App.css";
import InputFeild from "./components/input";
import Btn from "./components/button";
import Navbar from "./components/appBar";

import { useState } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [items, setItems] = useState([]);
  let addItem = () => {
    if (inputValue !== "") {
      setItems([...items, inputValue]);
    } else {
      alert("Please Enter a value");
    }
  };
  let deleteItem = () => {
    setItems([]);
  
  };
  return (
    <>
      <Navbar />
      <div className="flex-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="Enter To Do"
        />
        <button onClick={addItem}>Add To Do</button>
        <button onClick={deleteItem}>Delete</button>
      </div>

      <div>
        {items.map((value, index) => (
          <div key={index}>
            <h1>{value}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
