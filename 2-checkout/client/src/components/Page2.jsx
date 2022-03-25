import React, { useState, useEffect } from "react";
import axios from "axios";

function Page2 ({setPage, setUserData, userData}) {

  function buttonFunc (){
    setPage(3);
    console.log("step2", userData);
  }

  function handleChange(event){
    setUserData({...userData, [event.target.name]: event.target.value});
    }

  return (
    <div>
      <h3>Where should we send the goods?</h3>
        <br></br>
        <form onSubmit={()=>buttonFunc()}>
        <label htmlFor="addr1">Address (line 1):</label>&nbsp;&nbsp;
        <input id="addr1"
               placeholder="123 Firebees Blvd"
               name ="addr"
               onChange={(e)=>handleChange(e)}
               ></input>&nbsp;&nbsp;
        <label htmlFor="addr2">(line 2):</label>&nbsp;&nbsp;
        <input id="addr2"
               placeholder="Unit 1"
               size="8"
               name ="addr2"
               onChange={(e)=>handleChange(e)}
               ></input>
        <br></br><br></br>
        <div id="citystatezip">
        <label htmlFor="city">City:</label>&nbsp;&nbsp;
        <input id="city"
               placeholder="SEI Immersive"
               size="12"
               name ="city"
               onChange={(e)=>handleChange(e)}
               ></input>&nbsp;&nbsp;
        <label htmlFor="state">State:</label>&nbsp;&nbsp;
        <input id="state"
               placeholder="California"
               size="10"
               name ="st"
               onChange={(e)=>handleChange(e)}
               ></input>&nbsp;&nbsp;
         <label htmlFor="zip">Zipcode:</label>&nbsp;&nbsp;
        <input id="zip"
               placeholder="90000"
               size="6"
               name ="zip"
               onChange={(e)=>handleChange(e)}
               ></input>
        </div>
        <br></br>
        <label htmlFor="phone">Phone Number:</label>&nbsp;&nbsp;
        <input id="phone"
               placeholder="123-456-7890"
               size="15"
               name ="phone"
               onChange={(e)=>handleChange(e)}
               ></input>
        <br></br>
        <br></br>
        <input type="submit" value="Send me the goods!"></input>
        </form>
    </div>
    )

}

export default Page2;