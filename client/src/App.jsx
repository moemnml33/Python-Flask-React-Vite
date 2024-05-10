import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  // create array that contains the messages
  const [array, setArray] = useState([]);
  // create async function that will store the data retrieved from the backend, and we're going to await
  // to get the message
  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8080");
    // console.log(response.data.message);
    setArray(response.data.message);
  };
  // passed an empty list to useEffect so it runs only once when app is started
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        {/* map the array containing messages where each message has an index to a span */}
        {array.map((message, index) => (
          <div key={index}>
            <span>{message}</span>
            <br></br>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
