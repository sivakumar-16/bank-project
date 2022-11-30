// import "./styles.css";
import { useContext, useEffect, useState } from "react";
import userContext from "./context";
import axios from "axios";
import Nav from "./nav";
// import user from './createaccount';

export default function Alldata() {
  let style = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvB8QyQ6oiuk1oreXdZ8_-hY4C-oSbL5MBg&usqp=CAU')",
    height: "90vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [data, setData] = useState([]);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  async function Getall() {
    const url = "https://bankserver-siva.herokuapp.com/api/bank/getall";
    axios
      .get(url, config)

      .then((res) => {
        console.log(res.data);
        setData(res.data);
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
  useEffect(() => {
    Getall();
  }, []);

  return (
    <>
      <Nav />
      <div style={style}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>CurrentBalance</th>
            </tr>

            {data.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.emailId}</td>
                <td>{data.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
