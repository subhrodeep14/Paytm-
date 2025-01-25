const express = require('express');
const zod = require('zod');
const jwtSecret = require('../config.js');
const {User} = require('../db.js');


const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),

});

router.post('/signup', async(req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).send('Invalid request body');
    }

   await User.findOne({
    
   })


    
    res.send('Signup page');
});

module.exports = router;