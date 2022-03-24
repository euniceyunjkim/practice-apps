const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let wordSchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true,
    required: true
  },
  definition: {
    type: String
  }
});

let Word = mongoose.model('Word', wordSchema);

let saveWord = (word) => {
  return Word.create(word)
  .catch(err =>
    console.log("issue with db save", err))
}

let deleteWord = (word) => {
  return Word.deleteOne(word)
  .catch(err =>
    console.log("issue with db delete", err))
}

let updateWord = (prev, updated) => {
  return Word.updateOne(prev, updated)
  .catch(err =>
    console.log("issue with db update", err))
}

let getWords = () => {
  return Word.find()
  .catch(err=>
    console.log("issue with db find", err))
}

module.exports.saveWord = saveWord;
module.exports.deleteWord = deleteWord;
module.exports.updateWord = updateWord;
module.exports.getWords = getWords;
