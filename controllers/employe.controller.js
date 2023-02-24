const Employe = require('../models/Employe.model')


// Add One Employe
const Add_Epmloye = (req , res) => {
    console.log(req.body);
    const employe  = new Employe({
        name : 'ahmed',
        age  : 30,
        salaire : 25000
    })
    console.log(req.body);
    employe.save().then(rest => res.send(rest))
    .catch(err => console.log(err))
    // res.redirect('/')
}


//find all the Employe's
const findAll = (req, res) => { 
    Employe.find()
    .then(rest => res.send(rest))
}


// find One by Id
const find_by_id = (req , res) => {
    const id = req.params.id;
    Employe.findById(id).then(rest => res.send(rest))
    .catch(err => console.log(err))
}

//update by id 
const update_by_id = (req , res) => {
    const id = req.params.id;
    const updateope = { $set: { name: "rafiq", age : 23 , salaire: 5000}};
    Employe.findByIdAndUpdate(id, updateope).then(rest => console.log('updated' , rest) )
    .catch(err => console.log(err))
    res.redirect('/')
}


// delete by id 
const delete_by_id = (req , res) => {
    const id = req.params.id;
   Employe.findByIdAndDelete(id)
   .then(res => console.log('deleted'))
    .catch(err => console.log(err))
    res.redirect('/')
}

module.exports = {
    Add_Epmloye,
    findAll,
    find_by_id,
    update_by_id,
    delete_by_id,
   
}
