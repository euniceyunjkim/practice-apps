import React from "react";

class Addword extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      wordadded: '',
      defadded:'',
      show: false
    }
  }

  handleToggle() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
  //some function to handle on click and rerender state

  submitWord (word, def){
    let addIt = {word: word, definition: def};
    this.props.add(addIt);
    this.setState({
      defadded: '',
      wordadded: ''
    })
  }

  renderword(input) {
    this.setState({
      wordadded: input.target.value
    })
  }

  renderdef(input) {
    this.setState({
      defadded: input.target.value
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={()=> this.handleToggle()}>Add a word!</button>
     {this.state.show ? <div id="addcontainer">
       <div id="addword">
         Word: <input type="text" value={this.state.wordadded} placeholder ="Word" onChange={this.renderword.bind(this)}></input>
         Definition: <input type="text" value={this.state.defadded} placeholder ="Definition" onChange={this.renderdef.bind(this)}></input>
         <button type="button" onClick={() => this.submitWord(this.state.wordadded, this.state.defadded)}>Add</button>
        </div>
     </div> : null }
      </div>
    )
  }

}

export default Addword;