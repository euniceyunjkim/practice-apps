import React, { useState, useEffect } from "react";
import axios from "axios";

function Page3 ({setPage, setUserData, userData}) {

  function buttonFunc (){
    setPage(4);
    console.log("step3", userData);
  }

  function handleChange(event){
    setUserData({...userData, [event.target.name]: event.target.value});
    }

  return(
    <div>
      <h3>Show us the MONEY!</h3>
      <br></br>
      <form onSubmit={()=>buttonFunc()}>
        <label id="creditcard">Credit Card:</label>&nbsp;&nbsp;
        <input id="creditcard"
               placeholder="Insert Eric's CC here!"
               name ="cc_num"
               onChange={(e)=>handleChange(e)}
               ></input>
        <br></br><br></br>
        <label id="exp">Exp Date (MMYY):</label>&nbsp;&nbsp;
        <input id="exp"
               placeholder="0520"
               size="5"
               name ="exp_date"
               onChange={(e)=>handleChange(e)}
               ></input>&nbsp;&nbsp;
        <label id="cvv">CVV:</label>&nbsp;&nbsp;
        <input id="cvv"
               placeholder="324"
               size="5"
               name ="cvv"
               onChange={(e)=>handleChange(e)}
               ></input>&nbsp;&nbsp;
        <br></br><br></br>
        <label id="billzip">Billing Zipcode:</label>&nbsp;&nbsp;
        <input id="billzip"
               placeholder="90000"
               size="6"
               name ="pmt_zip"
               onChange={(e)=>handleChange(e)}
               ></input>&nbsp;&nbsp;
        <br></br><br></br>
        <input type="submit" value="Take my money!!!"></input>
      </form>
    </div>
  )

}

export default Page3;