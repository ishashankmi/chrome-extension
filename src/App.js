import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { PagesRoute } from "./routes";
import { Link } from "react-router-dom";

import BottomAppBar from "./components/bottomnav";



function App() {
  return (
    <div className="App">
      <Router initialEntries={['/']} initialIndex={0}>
      <div className="">
        <nav className="flex justify-center  border-blue-600 w-full ">
          <ul className="flex justify-around space-x-20 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <div className="border-2 h-[400px] w-[400px] ml-auto mr-auto overflow-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
          <div className="content-center text-center">
            
              <PagesRoute />
          </div>
        </div>
        </div>
        
        <BottomAppBar />
      </Router>
    </div>
  );
}

export default App;
