const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();

//app.use(bodyParser.json());
require('dotenv').config();
const ProductsRoute = require('./routes/products')




const PORT = process.env.PORT || 3000
//middleware
app.use(express.json());//we will be posting json data
app.use(express.urlencoded({extended:true}));//tell server we can have objects arrays not only string

//routes
app.use('/api/products',ProductsRoute);

//connect to mongo db atlas
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("MongoDB Connection failed",err));



//app.listen(PORT,()=>{console.log("Server is running at port",PORT);});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
