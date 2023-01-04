const db_Client = require('../../database');
const queries = require('./queries');
//Get all Users
const getUsers = (req, res) => {
    db_Client.query(queries.getAllUsers,(err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}
//Login user
const loginUsers = (req, res) => {
    const { email, password } = req.body;
    db_Client.query(queries.logged,[email,password], (err, results) => {
        const user = results.rows.length;
        if(!user == 0){
            res.status(200).send('User Logged');
        }else{
         res.send('User not found')
        }
    })
}
//Get single user
const getUser = ( req, res) => {
    const id = parseInt(req.params.id) 
    db_Client.query(queries.getUserById,[id], (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}
//Add user
const addUser = ( req, res) => {
    const {name, email, gender, password} = req.body;
    console.log(req.body,queries.checkUser)
    db_Client.query(queries.checkUser, [email], (err, results) => {
        if(name === '' || email === '' || gender === '' || password === '' ){
            res.send('fill the form');
        }
        else if(results.rows.length){
            res.send('Email already exists');
        }
        else{
            db_Client.query(queries.addNewUser, [name, email, gender, password], (err, results) => {
                if(err) throw err;
                res.status(201).send('New User Added');
            })
        }
    })
}

module.exports = {
    getUsers,
    loginUsers,
    getUser,
    addUser
}