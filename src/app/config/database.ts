import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('Database is Conected'))
  .catch(err => console.log(err))