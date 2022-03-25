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
  // const [checkouts, setCheckoutData] = useState([]);

  //depending on the number of the page render diff pages;
  const [page, setPageNumber] = useState(0);

  // userEffect is similar to componentDidMount
  useEffect(() => {
    //insert some rendering function to update state later
  });

  //function that would set the page state to +1;
  function nextPage () {
    if(count < 4) {
      setPageNumber(count+1);
    } else if (count ===4) {
      setPageNumber(0);
    }
  };

  {/* <p>Hello, World!</p>
  <p>
    <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
  </p> */}

  return (
  <div>
    <h1>MULTISTEP CHECKOUT</h1>
    <div>
      <Page0 page={nextPage}/>
      {/* <Page1 />
      <Page2 />
      <Page3 />
      <Page4 /> */}
    </div>
  </div>
  )

}

export default App;