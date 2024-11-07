import React from "react";
import ReactDOM from "react-dom/client";

import Profile from "./components/Profile";
import "./index.css";


const App = () => (
  <div >
    <Profile onUserDataSuccess={(info)=>{console.log(info)}}></Profile>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)