const { Router } = require('express');
const userControl = require('./controllers');

const router = Router(); 

router.get('/', userControl.getUsers); //Get all Users
router.post('/login', userControl.loginUsers)//Login user
router.get('/:id', userControl.getUser); //Get single user
router.post('/', userControl.addUser); //Add user

module.exports = router;