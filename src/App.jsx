import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img
            className="logo"
            src="https://s3-alpha-sig.figma.com/img/ae7b/b369/83f73e8c25fa294e9912227d0846b4bb?Expires=1694390400&Signature=SY9Pg8wOBFjmqLioMq1KE6RvV32qEMO2uOryVaQgYGGi5UvUziHWpWGQPzUeP2STb09KyvKsM~ujQ7ndcImIXjtP9bL33xrmoE~ET~MKFKjk3DN5ZPsjqPH-g6gsyYaTamaHV2yJBc0-tdLz9-1Fc~BwuF744h1mvKJdua~fwEeJSqJxVZqXyP7lnaU2OhazlNLUwkjzsVYprhunk~H5dvWznFDMcGq0BHR~6-6CW7nMUW1T-VWj2As9Z9qbhcUVRlCEaba-L70BNyb-6tnvABZqDCyRHGf8OmuXA75VzVljBoBZ85ozTy~kmA-Nd7N3vxPuYT5vQdYfP7R77sxy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
          />
        </a>
        
      </nav>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
