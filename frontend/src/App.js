import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import Form from "./Form";
import "./App.css";

function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    fetch("/api/v1/initial").then((res) => {
      if (res.status === 202) {
        setToken(true);
      }
    });
  }, []);
  return <div className="App">{token ? <Form /> : <SignIn />}</div>;
}

export default App;
