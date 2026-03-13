const router = require("express").Router();
const db = require("../db");

router.post("/add", (req, res) => {

    const { user_id, product_id, qty } = req.body;

    db.query(
        "INSERT INTO cart(user_id,product_id,qty) VALUES(?,?,?)",
        [user_id, product_id, qty],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Added to cart");
        }
    );

});

module.exports = router;