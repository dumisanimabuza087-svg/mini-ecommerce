const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const categoryRoutes = require("./routes/categories");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");

});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.use("/api/categories", categoryRoutes);