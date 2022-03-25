import React, { useState, useEffect } from "react";
import axios from "axios";

function Page4 ({setPage, userData}) {
  const buttonFunc = () => {
    axios.post("/completed", {userData})
      .then((data) => {
        console.log("Completed checkout");
        setPage(0);
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
      <h3>Ready to checkout?</h3>
      <br></br>
      <h4>Please review the information below.</h4>
      <br></br>
      <div id="allinfo">
      <div id="userconfirm">
      <br></br>
      <h4>Your User Information</h4>
      <br></br>
      <div>First Name: {userData.first_name}</div><br></br>
      <div>Last Name: {userData.last_name}</div><br></br>
      <div>Email Address: {userData.email}</div>
      <br></br>
      </div>
      <br></br>
      <div id="shippingconfirm">
      <br></br>
      <h4>Your Shipping Information</h4>
      <br></br>
      <div>Address (line 1): {userData.addr}</div><br></br>
      <div>(line 2): {userData.addr2}</div><br></br>
      <div>City: {userData.city}</div><br></br>
      <div>State: {userData.st}</div><br></br>
      <div>Zipcode: {userData.zip}</div><br></br>
      <div>Phone Number: {userData.phone}</div>
      <br></br>
      </div>
      <br></br>
      <div id="payconfirm">
      <br></br>
      <h4>Your Payment Information</h4>
      <br></br>
      <div>Last 4 digits of CC: {userData.cc_num.slice(-4)}</div><br></br>
      <div> Exp Date of CC: {userData.exp_date}</div><br></br>
      <div>CVV: {userData.cvv}</div><br></br>
      <div>Billing Zipcode: {userData.pmt_zip}</div>
      <br></br>
      </div>
      <br></br>
      </div>
      <button type="button" onClick={buttonFunc}>All good!</button>
    </div>
  )

}

export default Page4;