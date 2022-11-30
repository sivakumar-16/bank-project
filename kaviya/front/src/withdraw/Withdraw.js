import { useState } from "react";
import { useContext } from "react";

import Nav from "../nav";
import axios from "axios";
export default function Withdraw() {
  let style = {
    backgroundImage:
      "url('data:image/jpeg;base64,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')",
      height: "90vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const token = localStorage.getItem("x-auth");
  const [bal, setbal] = useState();
  const [values, setValues] = useState(0);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth": token,
    },
  };
  async function Updatewithdraw(e) {
    e.preventDefault();
    const url = "https://bankserver-siva.herokuapp.com/api/bank/withdraw";
    axios
      .post(
        url,
        {
          withdraw: values,
        },
        config
      )

      .then((res) => {
        console.log(res.data);
        setbal(res.data.balance);
      })
      .catch((error) => {
        // if (
        //   error.response &&
        //   error.response.status >= 400 &&
        //   error.response.status <= 500
        // )
        console.log(error.response.data);
        // console.log(error)
      });
    // console.log(data);
  }

  return (
    <>
      <Nav />
      <center>
        <div style={style}>
          <h4>Account Balance is ${bal}</h4>
          <h5>Kindly enter a value to withdraw!</h5>
          <label>
            <input
              type="number"
              placeholder="Enter amount"
              name="withdraw"
              onChange={(e) => setValues(Number(e.target.value))}
              required
            />
            <button onClick={Updatewithdraw}>Submit</button>
          </label>
          {/* <ATMDeposit onChange={handleChange}></ATMDeposit> */}
        </div>
      </center>
    </>
  );
}
