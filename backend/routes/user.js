const express = require('express');
const zod = require('zod');
const {jwtSecret} = require('../secrets.js');
const {User} = require('../db.js');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware.js');
const {Account} = require('../db.js');


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

   const existingUser=await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(409).send('User already exists');
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    await Account.create({
        userId: user._id,
        balance: 1+Math.random()*10000
      
    });



    const token = jwt.sign({ userId: user._id }, jwtSecret);

    
    res.json({ 
        message: 'User created successfully',
        token 
    });
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    

});


router.post('/signin', async(req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).send('Invalid request body');
    }

   const existingUsers=await User.findOne({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName
    })

    

    const token = jwt.sign({ userId: existingUsers._id }, jwtSecret);

    
    res.json({ 
        message: 'User sign in successfully',
        token 
    });
});

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/",  async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

	await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})

router.get("/", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;