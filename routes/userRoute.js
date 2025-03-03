const express = require('express')
const router = express.Router();
const User = require("../models/userModel");
const { route } = require('express/lib/application');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password })

    try {
        newUser.save();
        res.send("user registered successfully")
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.find({ email, password })

        if (user.length > 0) {
            const currentuser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentuser)
        } else {
            return res.status(400).json({ message: "User login faild" })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
})


router.get("/getallusers", async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/deleteuser", async (req, res) => {

    const userid = req.body.userid

    try {
        await User.findOneAndDelete({ _id: userid })
        res.send('User Deleted Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});



module.exports = router