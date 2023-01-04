const getAllUsers = `SELECT * FROM users`; //Get all Users
const getUserById = `SELECT * FROM users WHERE id = $1 `; //Get single user
const checkUser = `SELECT u FROM users u WHERE u.email = $1`; // Search user exits
const addNewUser =  `INSERT INTO users (name, email, gender, password) VALUES ($1, $2, $3, $4)`; //Add user
const logged = `SELECT * FROM users u WHERE u.email = $1 AND u.password = $2`; // Search user exits

module.exports = {
    getAllUsers,
    getUserById,
    checkUser,
    addNewUser,
    logged
}