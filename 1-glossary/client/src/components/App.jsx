import React from "react";
import Wordlist from "./Wordlist.jsx";
import Addword from "./Addword.jsx";
import Searchword from "./Searchword.jsx";
import axios from "axios";

class App extends React.Component {
constructor (props) {
  super(props);

  this.state = {
    wordList:[]
  }
}

//some function to post word + def
addWord(word){
 axios.post('/glossary', {word})
 .then(() =>
 this.getWords())
 .catch(err =>
  console.log(err))
}

//some function to render page with updated list
getWords(){
  axios.get('/glossary')
  .then(res =>
    this.setState({
      wordList: res.data
    }))
    // console.log(res))
  .catch(err =>
    console.log("err with client get", err))
}

editWord(prev, curr) {
  axios.post('/glossary/edit', )
}

componentDidMount() {
  //invoke function to render page here
     this.getWords();
}

render () {
  return (
     <div>
     <h1 className="title">Glossary Application</h1>
     <div id="container">
       <div id="searchWords"><Searchword/></div>
       <div id="addWords"><Addword add={this.addWord.bind(this)}/></div>
     </div>
     <h3>Word bank</h3>
     <div id="wordbank">{this.state.wordList.map(word=> <Wordlist key={word.word} word={word}/>)}</div>
     </div>
  )
}

}

export default App;