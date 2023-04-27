import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { PagesRoute } from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router initialEntries={['/']} initialIndex={0}>
      <div className="">
        <nav className="flex justify-center border-2 border-blue-600 w-full">
          <ul className="flex justify-around space-x-10 min-w-[300px] max-w-[400px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <div className="flex justify-center mt-3">
        <PagesRoute />
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
