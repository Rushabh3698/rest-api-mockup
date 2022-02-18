const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subscribeToChanel:{
        type:String,
        required:true
    },
    subscriberDate:{
        type:Date,
        required:true,
        default:Date.now
    }
})


module.exports = mongoose.model("Subscriber", subscriberSchema)