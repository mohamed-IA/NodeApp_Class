require("dotenv/config");
const express = require('express');
const mongoose = require('mongoose');
const Employe = require('./models/Employe.model');
const EmployeRoutes = require('./routes/employe.route');


const app = express();
app.listen(3000);

mongoose.set("strictQuery", false)
// console.log(process.env.dbURL);


// connect to database
mongoose.connect(process.env.dbURL)
.then((res) => { console.log('connected');})
.catch((err) => console.log('somthing wrong', err));



// the main page
app.get('/' , (req , res) => {
    res.send('Home Page')
})


app.use(EmployeRoutes)


