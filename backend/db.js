const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://gofra:gofra@cluster0.a9uxn51.mongodb.net/Gofra");
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/Gofra");

const newUsersSchema = mongoose.Schema({
    name: String,
    address: String,
    email: String,
    password: String,
    cart:Array,
    orders:Array,
    walletBalance:Number,
    isSelling:Boolean,
    sellerItems:Array,
    phone:Number,
    gender:String,
    pendingItems:Array
})

const allItemsSchema = mongoose.Schema({
    name:String,
    description:String,
    address:String,
    price:Number,
    Img:String,
    category:String,
    brand:String,
    sellerID:String
})

const verifyItemsSchema = mongoose.Schema({
    name:String,
    description:String,
    address:String,
    price:Number,
    Img:String,
    category:String,
    brand:String,
    sellerID:String,
    status:String,
})

const newUsersModel = mongoose.model("user", newUsersSchema)
const allItemsModel = mongoose.model("allItem", allItemsSchema)
const verifyItemsModel = mongoose.model("verifyItem", verifyItemsSchema)

module.exports = {
    connection,
    newUsersModel,
    allItemsModel,
    verifyItemsModel
}