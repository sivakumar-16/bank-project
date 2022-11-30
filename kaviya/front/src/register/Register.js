import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashRouter, Link, Route, useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import Nav from "../nav";

export default function Register() {
  let style={
   backgroundImage: "url('data:image/jpeg;base64,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')",
    width:'100%',
   paddingTop:'70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}
  try {
  } catch (error) {
    console.log(error.message);
  }
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    emailId: "",
    password: "",
    phoneNo: "",
    hostelName: "",
    collegeName:"",
    Gender:""
  });
  const [error, setError] = useState("");
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "https://bankserver-siva.herokuapp.com/api/bank/register";
    axios
      .post(url,{
        name: values.name,
        emailId: values.emailId,
        password: values.password,
        mobileNo: values.mobileNumber,
       
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
        } else {
          alert("Registerd Successfully");
          navigate("/login")
          console.log(res);
        }
      })
      .catch((error) => {
        setError(error.response.data)
        console.log(error);
      });
      // console.log(data);
  }
 

  return (
    <>
    <Nav />
    {/* <div className={styles.signup_container}> */}
				<div style={style}>
						<div className={styles.left} >
            <h1 className={styles.studenth1}>Create Account</h1>
            <form>
							<input
            className={styles.inputw}
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            /><br></br>
							
							
             <input
            className={styles.inputw}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setValues({ ...values, emailId: e.target.value })
              }
            /><br></br>
            <input
            className={styles.inputw}
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            /><br></br>
             <input
            className={styles.inputw}
              type="number"
              placeholder="Enter Your MobileNumber"
              onChange={(e) =>
                setValues({ ...values, mobileNumber: e.target.value })
              }
            /><br></br>
             	{error && <div className={styles.error_msg}>{error}</div>}
  
               </form>

						
					{/* </div>       */}
		</div>
    <center>
							<button type="submit" className={styles.green_btn} onClick={handle}>
								Sign Up
							</button>
              </center>
              </div>
         </>
  );
}
