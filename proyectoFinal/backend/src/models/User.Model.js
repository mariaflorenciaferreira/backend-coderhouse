import {Schema, model} from 'mongoose' 

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: {
        type: Boolean,
        default: false,
        },
    },
    { timestamps: true }
);

const UsersModel = model('users', UserSchema)

export default UsersModel
