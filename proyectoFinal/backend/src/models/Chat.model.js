import {Schema, model} from 'mongoose' 

const chatCollection = "chat";

const ChatSchema = new Schema({
	date: { type: Date, default: Date.now, require: true },
	mail: { type: String, require: true },
	msg: { type: String, require: true }
    },
    { timestamps: true }
);

const ChatModel = model('chat', ChatSchema)



export default ChatModel