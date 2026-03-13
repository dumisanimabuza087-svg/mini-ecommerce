const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {

    const {name, email, password} = req.body;

    const hash = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [name,email,hash],
        (err,result)=>{
            if(err) return res.send(err);
            res.send("User created");
        }
    );

});

module.exports = router;