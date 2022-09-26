const express = require('express');
const app = express();

const mongoose = require('mongoose');
connect().then(() => console.log("Database connection Successfull."))
         .catch((err) => console.log(err));
async function connect() {
    await mongoose.connect('mongodb://0.0.0.0:27017/excerise');
}
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    createdAt : {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('Users', userSchema);
async function createUser() {
    
    const user = new User({
        name: "Waqas Maqbool",
        username: "waqasmaqbool",
        password: "Waqas@123",
        
    });
    const result =await user.save();
    console.log(result);
}
async function getUser() {
    const user = await User.find().count();
    console.log(user);
}
async function updateUser(id) {
    const result = await User.update({ _id: id },
        {
            $set: {
                name: "Waqas",
                password: "hfjksdhkj"
        }
    });

    console.log(result);
};
async function removeUser(id) {
    const result = await User.deleteOne({ _id: id });

    console.log(result);
};

removeUser('632fcc5b791cdb71b35a64fa');