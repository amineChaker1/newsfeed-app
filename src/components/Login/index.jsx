import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/store";
import { auth } from "../../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const LoginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const RegisterToApp = () => {
    if (!name) {
      return alert("please enter a Full Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="flex py-24  items-center  flex-col gap-5">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-myblue">Unidrive</h1>
        <h3 className="text-2xl font-bold text-myblue">
          Have the Best University Experience !
        </h3>
      </div>
      <div className="flex w-96 justify-center flex-col">
        <form className="flex flex-col ">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-96 mb-3 shadow-sm  text-gray-900 text-sm rounded-lg  block  p-2.5 border-2 border-myblue focus:ring-myborder-myblue focus:border-myblue  placeholder-border-myblue "
            placeholder="Full Name (Required if Registering) "
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            type="text"
            className="w-96 mb-3 shadow-sm  text-gray-900 text-sm rounded-lg  block  p-2.5 border-2 border-myblue focus:ring-myborder-myblue focus:border-myblue  placeholder-border-myblue"
            placeholder="Profile pic URL (Optional)"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-96 mb-3 shadow-sm  text-gray-900 text-sm rounded-lg  block  p-2.5 border-2 border-myblue focus:ring-myborder-myblue focus:border-myblue  placeholder-border-myblue"
            name="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-96 mb-3 shadow-sm  text-gray-900 text-sm rounded-lg  block  p-2.5 border-2 border-myblue focus:ring-myborder-myblue focus:border-myblue  placeholder-border-myblue"
            name="password"
            placeholder="Password"
          />
          <button
            onClick={LoginToApp}
            type="submit"
            className="w-96 mb-3 shadow-sm text-lg text-myblue rounded-lg  block  p-2.5 border-2 border-myblue  focus:border-myblue"
          >
            Login
          </button>
        </form>
        <button
          onClick={RegisterToApp}
          type="submit"
          className="w-96 mb-3 bg-myblue shadow-sm text-lg text-white rounded-lg  block  p-2.5 border-2 border-myblue  focus:border-myblue"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
