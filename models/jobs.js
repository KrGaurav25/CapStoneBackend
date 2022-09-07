const mongoose = require('mongoose');

const jobsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        // unique:true,
    },
    organization:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    salary:{
        type:Number,
        required:true
    },
    keywords:{
        type:Array,
        default:[]
    },
    rating:{
        type:Number,
        min:0,
        max:5
    }
    // location:{
    //     type:Boolean,
    //     default:false
    // }
});
//plural form of Product is the name of collection 
module.exports = mongoose.model('Jobs',jobsSchema);