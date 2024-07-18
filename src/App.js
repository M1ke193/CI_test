import { useRef, useState } from "react";
import "./App.css";
import logo from "./cat.jpg";

function App() {
  const [userName, setUserName] = useState("");
  let inputRef = useRef(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p
          className="username"
          children={`${
            userName ? userName : "ADD THIS FOR PUSH TO REPOSITORY"
          }`}
        />
        <input
          ref={inputRef}
          type="text"
          name="username"
          placeholder="Enter your name here"
        />
        <button
          onClick={() => {
            if (inputRef.current) {
              setUserName(inputRef.current.value);
            }
          }}
        >
          CLICK TO CHANGE USER NAME
        </button>
      </header>
    </div>
  );
}

export default App;
