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
  axios.patch('/glossary/edit', {prev, curr})
  .then(()=>
  this.getWords())
  .catch(err=>
    console.log(err))
}

deleteWord(word) {
  axios.delete('/glossary/delete', {params : word})
  .then(()=>
    this.getWords())
  .catch(err=>
    console.log(err))
}

search(type, word){
  let result = [];
  let wordi = word.toLowerCase();
  if (type === "word"){
    this.state.wordList.forEach(function (el) {
      let current = el.word.toLowerCase();
      if (current.includes(wordi)){
        result.push(el)
      }
    })
  } else if (type === "def") {
    this.state.wordList.forEach(function (el) {
      let current = el.definition.toLowerCase();
      if (current.includes(wordi)){
        result.push(el)
      }
    })
  }

  if(result.length === 0) {
    result.push({word: "No words or definitions found with searched input", definition: ""})
  }

  this.setState({
    wordList: result
  })

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
       <div id="searchWords"><Searchword searchIt={this.search.bind(this)}/></div>
       <div id="addWords"><Addword add={this.addWord.bind(this)}/></div>
     </div>
     <h3>Word bank</h3>
     <button type="button" onClick={()=>this.getWords()}>Return All</button>
     <div id="wordbank">{this.state.wordList.map(word=> <Wordlist key={word.word} word={word} editIt={this.editWord.bind(this)} deleteIt={this.deleteWord.bind(this)}/>)}</div>
     </div>
  )
}

}

export default App;