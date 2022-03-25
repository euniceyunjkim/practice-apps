import React from "react";

class Searchword extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
     searchedWord: '',
     searchedDef: '',
     show: false
    }
  }

  handleToggle() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  //some function to handle on click and rerender state

  renderWord(input){
    this.setState({
      searchedWord : input.target.value
    })
  }

  renderDef(input){
    this.setState({
      searchedDef: input.target.value
    })
  }

  searchWord(input){
    this.props.searchIt("word", input);
    this.setState({
      searchedWord: ''
    })
  }

  searchDef(input){
    this.props.searchIt("def", input);
    this.setState({
      searchedDef: ''
    })
  }

  render () {
    return (
     <div>
      <button type="button" onClick={()=> this.handleToggle()}>Search a word!</button>
     {this.state.show ? <div id="searchcontainer">
       <div id="searchbyword">
         <input type="text" placeholder ="Search here" value ={this.state.searchedWord} onChange={this.renderWord.bind(this)}></input>
          <button type="button" onClick={()=> this.searchWord(this.state.searchedWord)}>By word</button>
        </div>
       <div id= "searchbydef">
         <input type="text" placeholder="Search here" value={this.state.searchedDef} onChange={this.renderDef.bind(this)}></input><button type="button" onClick={()=> this.searchDef(this.state.searchedDef)}>By definition</button>
       </div>
     </div> : null }
     </div>

    )
  }
}


export default Searchword;