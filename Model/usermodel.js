
const mongoose = require("mongoose");
const Schema = mongoose.Schema


const mobileSchema = new Schema({
    
    mobilebrand:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
        unique:true
    },
    color:{
        type:String
    },
    quantity:{
        type:String,
        require:true
    }
},{timestamps:true}

)

const mobile =mongoose.model('Mobile',mobileSchema);

module.exports=mobile











// const mongoose = require('mongoose');
// const Schema = mongoose.Schema


// const userSchema = new Schema({

//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     phone:{
//         type:String,
//         required:true,
//         unique:true
//     }
// },{timestamps:true}

// )
// const user = mongoose.model('User',userSchema)

// mongoose.model.exports=user




