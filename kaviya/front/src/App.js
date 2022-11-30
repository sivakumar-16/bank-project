import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from "./login/Loginwarden/Login.js";
import Register from "./register/Register.js";
import Deposit from "./updateDeposit/Deposite.js";
//import Withdrawal from "./withdrawal.js";
import HomePage from "./homePage";
import Alldata from "./alldata";
import Withdraw from "./withdraw/Withdraw.js";
import Main from "./mainpage/main.js";
import Nav from "./nav";
export const AuthContext = React.createContext();

export default function App() {
  return (
    <>
      {/* <Nav /> */}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/deposite" element={<Deposit />}></Route>
          <Route exact path="/withdrawal" element={<Withdraw />}></Route>
          <Route exact path="/alldata" element={<Alldata />}></Route>
          <Route exact path="/main" element={<Main />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
