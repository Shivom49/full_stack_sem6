const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./model");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/exp10DB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// ------------------ ROUTES ------------------

// CREATE (POST)
app.post("/addUser", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ message: "User Added", data: user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// READ (GET)
app.get("/getUsers", async (req, res) => {
    const users = await User.find();
    res.json(users);
});


// UPDATE (PUT)
app.put("/updateUser/:id", async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({ message: "User Updated", data: updatedUser });
});


// DELETE (DELETE)
app.delete("/deleteUser/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted" });
});


// SERVER
app.listen(5000, () => {
    console.log("Server running on port 5000");
});