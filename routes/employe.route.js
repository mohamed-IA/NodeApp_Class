const express = require('express');
const router = express.Router();
const EmployeController = require('../controllers/employe.controller');


router.get('/addOne' , EmployeController.Add_Epmloye);
router.get('/findAll' , EmployeController.findAll);
router.get('/findOne/:id' , EmployeController.find_by_id);
router.get('/update/:id' , EmployeController.update_by_id);
router.get('/delete/:id' , EmployeController.delete_by_id);


module.exports = router