 import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Paytm");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connected to MongoDB");
}); 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    balance: Number,
});
const User = mongoose.model("User", userSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
    accountNumber: Number,
    ifsc: String,
    branch: String,
    bankName: String,
    transactions: Array,
});

const Account = mongoose.model("Account", accountSchema);


module.exports= { User, Account };