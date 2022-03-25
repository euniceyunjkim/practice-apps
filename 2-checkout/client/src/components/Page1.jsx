import React, { useState, useEffect } from "react";
import axios from "axios";

function Page1 ({setPage, setUserData, userData}) {

  // const [userData, setUserData] = useState({
  //   id: '',
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   userPW: '',
  //   addr: '',
  //   addr2: '',
  //   city: '',
  //   st: '',
  //   zip: '',
  //   phone: '',
  //   cc_num: '',
  //   exp_date: '',
  //   cvv: '',
  //   pmt_zip: ''
  // });

  function buttonFunc (){
    setPage(2);
    console.log("step1", userData);
  }

  function handleChange(event){
    setUserData({...userData, [event.target.name]: event.target.value});
    }

  return (
    <div>
      <h3>Create an account with us!</h3><br></br>
      <form onSubmit={()=>buttonFunc()}>
        <label htmlFor="first">First name:</label><br></br>
        <input id="first"
               placeholder="Hack"
               name="first_name"
               value={userData.first_name}
               onChange={(e)=>handleChange(e)}></input><br></br>
        <label htmlFor="last">Last name:</label><br></br>
        <input id="last"
               placeholder="Reactor"
               name="last_name"
               value={userData.last_name}
               onChange={(e)=>handleChange(e)}></input><br></br>
        <br></br>
        <label htmlFor="email">Email:</label><br></br>
        <input id="email"
               placeholder="hr@hackreactor.com"
               name="email"
               value={userData.email}
               onChange={(e)=>handleChange(e)}></input><br></br>
        <label htmlFor="password">Password:</label><br></br>
        <input id="password"
               placeholder="YouGotThi$!"
               name="userPW"
               value={userData.userPW}
               onChange={(e)=>handleChange(e)}></input><br></br>
        <br></br><br></br>
        <input type="submit" value="Create Account"></input>
      </form>
    </div>
    )
}

export default Page1;