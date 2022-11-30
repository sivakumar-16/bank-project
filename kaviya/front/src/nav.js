import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useNavigate } from "react-router-dom";
export default function Nav(){
  const navigate=useNavigate();
  let token=  localStorage.getItem('x-auth') || "null";
  const logout=()=>{
    localStorage.setItem('x-auth',"null");
    // navigate("/")
  }
    return(
        <>
        <nav id="navh" className="navbar navbar-expand-lg navbar-light "></nav>
        <nav class="navbar navbar-expand-lg navbar-primary">
  
  <a class="navbar-brand" href="/">Royal Bank  </a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ms-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#/bank">Bank <span class="sr-only"></span></a>
      </li> */}
      {token=="null" ? <><li class="nav-item">
        <a class="nav-link" href="#/register">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login">Login</a>
      </li></>:
     <>
      <li class="nav-item">
        <a class="nav-link " href="#/deposite">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#/withdrawal">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#/alldata">User Data's</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" onClick={logout}>Logout</a>
      </li>
      </>
      }
    </ul>
  </div>
</nav>
        </>

    )
}
