import React from "react";

import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Shortcuts from "./components/Shortcuts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App bg-gray-100 ">
      <Header />
      <div className="app-body grid grid-cols-5">
        <div className="first col-span-1">
          <Sidebar />
        </div>
        <div className="second col-span-3">
          <Feed />
        </div>

        <div className="third col-span-1">
          <Shortcuts />
        </div>
      </div>
    </div>
  );
}

export default App;
