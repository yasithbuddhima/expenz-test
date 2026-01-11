import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
// To run front end
// npm start

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);
  console.log(message);
  return <RouterProvider router={router} />;
}

export default App;
