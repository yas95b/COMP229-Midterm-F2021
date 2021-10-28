/*name : Yasaman Barzegar
  Student id: 301072907
  Date: 10/28/2021 
  COMP229 midterm*/
  
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);