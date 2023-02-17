const mongoose = require('mongoose');



const EmployeShema = mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    salaire : {
        type : Number
    }
})

module.exports = (mongoose.model('Employe', EmployeShema));