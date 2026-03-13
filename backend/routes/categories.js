const router = require("express").Router();
const db = require("../db");

router.get("/", (req,res)=>{

    db.query(
        "SELECT * FROM categories",
        (err,result)=>{
            if(err) return res.send(err);
            res.json(result);
        }
    );

});

router.post("/", (req,res)=>{

    const {name} = req.body;

    db.query(
        "INSERT INTO categories(name) VALUES(?)",
        [name],
        (err,result)=>{
            if(err) return res.send(err);
            res.send("Category added");
        }
    );

});

module.exports = router;