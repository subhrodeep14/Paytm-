
const express = require('express');
const {Account} = require('../db.js');
const { authMiddleware } = require('../middleware.js');
const { default: mongoose } = require('mongoose');

const router = express.Router();


router.get('/balance', authMiddleware,async(req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    if (!account) {
        return res.status(404).send('Account not found');
    }
    res.status(200).json({ balance: account.balance });
});

router.post('/transfer',authMiddleware, async(req, res) => {
    const session=await mongoose.startSession();
    session.startTransaction();

    const { to, amount } = req.body;
    const account = await Account.findOne({
        userId: req.userId
    }).session(session);
    

    if(!account||account.balance<amount){
        await session.abortTransaction();
        session.endSession();
        return res.status(400).send('Insufficient balance');
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).send('To account not found');
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: { balance: -amount }
    }).session(session);

    await Account.updateOne({
        userId: to
    }, {
        $inc: { balance: amount }
    }).session(session);

    await session.commitTransaction();

    res.json({
        message:"Transfer successfull"
    })

    

});


module.exports = router;