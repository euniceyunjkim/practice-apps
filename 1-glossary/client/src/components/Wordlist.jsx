import React from "react";

class Wordlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      def: '',
      edit: false
    }
  }

  toggleFunc() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  toggleEdit() {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  }

  renderdef(input){
    this.setState({
      def: input.target.value
    })
  }

  editWord(prev, curr) {
    this.props.editIt(prev, curr);
    this.setState({
      def: ''
    })
  }

  deleteWord(word) {
    this.props.deleteIt(word);
  }

  render () {
    return (
      <div className="wordList">
        <li onClick={()=> this.toggleFunc()}>{this.props.word.word}</li>
        {this.state.show ?
          <div>
          <div id="wordDefinition">Definition: {this.props.word.definition}</div>
          <button onClick={()=> this.toggleEdit()}>Edit</button>
          {this.state.edit ?
          <div id="editcontainer">
           <div id="editword">
             Definition: <input type="text" value={this.state.def} placeholder ="Edit Definition" onChange={this.renderdef.bind(this)}></input>
             <button type="button" onClick={() => this.editWord(this.props.word, {word: this.props.word.word, definition: this.state.def})}>Add</button>
           </div></div> : null }
          <button onClick={()=> this.deleteWord(this.props.word)}>Delete</button></div> : null}
      </div>
    )
}
}

export default Wordlist;