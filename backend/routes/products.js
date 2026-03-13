const router = require("express").Router();
const db = require("../db");

router.get("/", (req,res)=>{

    db.query("SELECT * FROM products",
    (err,result)=>{
        if(err) return res.send(err);
        res.json(result);
    });

});

router.post("/", (req,res)=>{

    const {name,price,image,description} = req.body;

    db.query(
        "INSERT INTO products(name,price,image,description) VALUES(?,?,?,?)",
        [name,price,image,description],
        (err,result)=>{
            if(err) return res.send(err);
            res.send("Product added");
        }
    );

});

module.exports = router;