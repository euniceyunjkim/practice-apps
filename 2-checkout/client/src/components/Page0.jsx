import React, { useState, useEffect } from "react";
import axios from "axios";

function Page0 ({setPage}) {

  return (
    <div>
      <button type="button" onClick={()=> setPage(1)}>Let's get started!</button>
    </div>
    )
}

export default Page0;