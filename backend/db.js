 const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://subhrodeep022:zVQyAatfKOdBlQPk@cluster0.sn8ir.mongodb.net/paytm");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connected to MongoDB");
}); 

const userSchema = new mongoose.Schema({
    username: String,
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
        required: true,
    },
   
});

const Account = mongoose.model("Account", accountSchema);


module.exports= { User, Account };