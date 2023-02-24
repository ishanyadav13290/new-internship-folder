const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/Gofra");

const newUsersSchema = mongoose.Schema({
    name: String,
    address: String,
    email: String,
    password: String,
    cart:Array,
    walletBalance:Number,
    isSelling:Boolean,
    sellerItems:Array
})
const allItemsSchema = mongoose.Schema({
    name:String,
    description:String,
    address:String,
    price:Number,
    Img:String,
    category:String,
    brand:String
})

const newUsersModel = mongoose.model("user", newUsersSchema)
const allItemsModel = mongoose.model("allItem", allItemsSchema)

module.exports = {
    connection,
    newUsersModel,
    allItemsModel
}