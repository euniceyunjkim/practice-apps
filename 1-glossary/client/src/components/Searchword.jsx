import React from "react";

class Searchword extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
     searched: '',
     show: false
    }
  }

  handleToggle() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  //some function to handle on click and rerender state

  render () {
    return (
     <div>
      <button type="button" onClick={()=> this.handleToggle()}>Search a word!</button>
     {this.state.show ? <div id="searchcontainer">
       <div id="searchbyword">
         <input type="text" placeholder ="Search here"></input>
          <button type="button">By word</button>
        </div>
       <div id= "searchbydef">
         <input type="text" placeholder="Search here"></input><button type="button">By definition</button>
       </div>
     </div> : null }
     </div>

    )
  }
}


export default Searchword;