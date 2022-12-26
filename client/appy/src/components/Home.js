import React, { useState } from "react";
// import { Link } from 'react-router';
import "./Home.css";
import Login from "./Login";
import SignUp from "./SignUp";



function Home() {
    const login = ()=>{
      <Login/>
    };
    const signu = ()=>{
        <SignUp/>
      };
  return (
    <div >
      <div>
      <div className="a1">async</div>
       <div className="a3">TIC TAC</div>
       <div className="a3">TOE</div>
      </div>
      <div className="signUp" >
      <button id="a2" > LOGIN</button>
    </div>
    <div className="signUp" >
      <button id="a2" onClick={signu}> REGISTER</button>
    </div>
    </div>
  )
}

export default Home
