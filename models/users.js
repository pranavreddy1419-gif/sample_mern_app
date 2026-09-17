let mongoose=require('mongoose');
let userschema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
})
let users = mongoose.model('users',userschema);
module.exports={users}
// exporting the model to use in other files.