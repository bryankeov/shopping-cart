import React, {useState} from "react";
import Header from "./components/Header";
import "./styles/App.css"

export default function App() {
  return (
    <div>
      <Header/>
      <div className="about">
        <h2>Welcome!</h2>
        <p>We pride ourselves for selling the most authentic pokeballs available.</p>
        <p>You wont find better pokeballs elsewhere.</p>
      </div>
    </div>
  )
}