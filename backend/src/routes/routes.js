const express = require('express');

const routes = express.Router();

const userData = [{
    id: 1,
    name: 'John',
    email: 'joao@',
    password: 123
}]
routes.post('/login', (req, res) => {
    const {email, password} = req.body;
    const user = userData.find(user => user.email === email && user.password === password)

    try {
        if(user){
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(401).json(error,{message: 'invalid credentials' });        
    }
});

module.exports = routes;