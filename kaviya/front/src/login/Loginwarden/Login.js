import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashRouter, Link, Route, useNavigate} from "react-router-dom";
import { AuthContext } from "../../App";
import styles from "./styles.module.css";
import Nav from "../../nav";

export default function Login() {
  let style={
    backgroundImage: "url('data:image/jpeg;base64,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')",
    height:'200px',
    width:'200',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}

  try {
  } catch (error) {
    console.log(error.message);
  }
 
  let token=useContext(AuthContext);
// console.log(token.users[0].student);
const navigate=useNavigate();
const [model,setModel]=useState(false);
const [error,setError]=useState("");

  const [values, setValues] = useState({

    emailId: "",
    password: ""
  });
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "https://bankserver-siva.herokuapp.com/api/bank/login";
    axios
      .post(url, {
        emailId: values.emailId,
        password: values.password
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
          
        } else {
        // setModel(true);
        alert('login success')
        //  console.log(token.users[0].student.replace(res))
          // console.log(token)
          // navigate("/outpassalldata")
          // console.log(res.data);
          
          localStorage.setItem('x-auth',res.data);
          navigate("/main");
          // console.log(token)
         
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) 
          setError(error.response.data);
          // console.log(error)
        })
      // console.log(data);
  }
  // const style = {
  //   "margin-left": "0px",
  //   padding: "0px"
  // };

  

  return (
    <>
    <Nav />
      <div  className={styles.login_container} style={style}>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} method='post'>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
              onChange={(e) =>
                setValues({ ...values, emailId: e.target.value })
              }
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}             
						<button type="submit" className={styles.green_btn} onClick={handle}>
							Login
						</button>
          
						</form>
					</div>
					<div className={styles.right}>
						<h1>New User ?</h1>
						<Link to="/register">
							<button type="button" className={styles.white_btn} >
								Register
							</button>
						</Link>
					</div>
				  </div>
			    </div>
    
  
    </>
  );
}
