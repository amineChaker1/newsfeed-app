import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { login, logout, userSelect } from "./app/store";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Shortcuts from "./components/Shortcuts";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";

function App() {
  const user = useSelector(userSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.profilePic,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App bg-gray-100 font-poppins">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body m-3 grid grid-cols-5">
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
      )}
    </div>
  );
}

export default App;
