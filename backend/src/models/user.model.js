const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"name must be 3 character long "]
    },
    email:{
        type:String,
        required:true,
        unique:[true,'user already exist'],
    },
    mobileNumber:{
        type:String,
        required:true,
        minlength:[10,"Mobile number should be 10 digits"],
        unique:[true,'user already login this number']
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'password must be 6 character long ']
    }
},{
    timestamps:true
})

const userModel=mongoose.model('user',userSchema);


module.exports=userModel;