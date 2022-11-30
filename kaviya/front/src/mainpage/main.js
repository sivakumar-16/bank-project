import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../nav";
export default function Main(){
    let style={
        backgroundImage:
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjt25ylnq_icYsrvu_-OdnzT6VzeBIbYlAgg&usqp=CAU')",
      height: "95vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }
    let deposite={
        backgroundColor: "green", /* Green */
       border: "none",
       color: "white",
       padding: '10px 22px',
       textalign: "center",
    //    textdecoration: "none",
    //    display: "inline-block",
       fontSize: "16px",
       fontWeight:"bold",
       width:"100%",
       borderRadius:50
       
    }
    let withdraw={
        backgroundColor: "pink", /* Green */
       //border: "none",
       color: "white",
       padding: '10px 22px',
       textalign: "center", 
    //    textdecoration: "none",
    //    display: "inline-block",
       fontSize: "16px",
       fontWeight:"bold",
       width:"100%",
       borderRadius:50,
       
    } 
    const navigate=useNavigate();
    async function dep(){
        navigate('/deposite')
    }
    async function wit(){
        navigate('/withdrawal')
    }
    return(
        <>
        <div style={style}>
        <Nav />
        <form >
        <button style={deposite} onClick={dep}>Deposite</button><br></br>
        <button style={withdraw} onClick={wit}>Withdraw</button>
        </form>
        </div>
        </>
    )
}