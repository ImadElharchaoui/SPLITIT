import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    unique: [true, 'Username already exists!'],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  createdAt: {
    type: Date,
    default: Date.now 
  },
  image: {
    type: String,  
  },
  myGroups:[{
    type: Schema.Types.ObjectId,
    ref:'Group' 
  }],
  myFriends: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User'  
  }],
  resetPasswordToken:{
    type: String,
  },
   resetPasswordExpires:{
        type: Date,
    },



  
});

const User = models.User || model("User", UserSchema);

export default User;
