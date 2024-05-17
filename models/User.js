import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide a username."]
    },
    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: true
    },
    image:{
        type: String
    }
});

export default models.User || model("User", UserSchema);