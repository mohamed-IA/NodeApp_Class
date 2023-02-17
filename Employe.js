require("dotenv/config");
const express = require('express');
const mongoose = require('mongoose');
const Employe = require('./models/Employe.model');


const app = express();
app.listen(1212);

mongoose.set("strictQuery", false)
console.log(process.env.dbURL);


// connect to database
// mongoose.connect(process.env.dbURL, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//     socketTimeoutMS : 13000,
// }, (err) => {
//     if (err) {
//         console.log('err',err);
//         return;
//     }console.log('secc')
//     add();
// });

mongoose.connect(process.env.dbURL)
.then((res) => { console.log('connected'); add()})
.catch((err) => console.log('somthing wrong', err));



async function add() {
    try {
        const eml = await Employe.create(
            {
                name: 'sami',
                age: 24,
                salaire: 2600
            });
        await eml.save(),
        console.log('added succesfuly : ', eml);
    } catch {
        console.log(err.message)
    }
}

app.get('/', (req, res) => { 
    const eml = Employe.find({name :'mohamed'});
    res.send(eml)
})

// app.get('/mongo' , (req,res) => {
//     const eml = Employe.findById('63e78607f38982234a73c599');
//     res.send(eml);
// })

function findByI(){
    const eml = Employe.findById('63e78607f38982234a73c599');
    console.log(eml);
}
