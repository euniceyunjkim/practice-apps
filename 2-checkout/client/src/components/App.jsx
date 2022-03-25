import React, { useState, useEffect } from "react";
import axios from "axios";
import Page0 from "./Page0.jsx";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";
import Page4 from "./Page4.jsx";

function App () {

  //declare a new state variable, followed by function that let's you update it
  // [ variable , function ] = useState (initial state);

  //depending on the number of the page render diff pages;
  const [page, setPageNumber] = useState(0);
  const [userData, setUserData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    userPW: '',
    addr: '',
    addr2: '',
    city: '',
    st: '',
    zip: '',
    phone: '',
    cc_num: '',
    exp_date: '',
    cvv: '',
    pmt_zip: ''
  });

  // userEffect is similar to componentDidMount
  // useEffect(() => {
  //   setPageNumber(page);
  // });

  const currentPage = page;
  let pageShown;
  if (currentPage === 0) {
    pageShown = <Page0 setPage= {setPageNumber} userData={userData} setUserData={setUserData}/>
  } else if (currentPage === 1) {
    pageShown = <Page1 setPage={setPageNumber} userData={userData} setUserData={setUserData}/>
  } else if (currentPage === 2) {
    pageShown = <Page2 setPage={setPageNumber} userData={userData} setUserData={setUserData}/>
  } else if (currentPage === 3) {
    pageShown = <Page3 setPage={setPageNumber} userData={userData} setUserData={setUserData}/>
  } else if (currentPage === 4) {
    pageShown = <Page4 setPage={setPageNumber} userData={userData} setUserData={setUserData}/>
  }

  {/* <p>Hello, World!</p>
  <p>
    <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
  </p> */}

  return (
  <div>
    <h1 id="banner">MULTISTEP CHECKOUT</h1>
    <br></br>
    <div id="container">
      {pageShown}
    </div>
  </div>
  )

}

export default App;