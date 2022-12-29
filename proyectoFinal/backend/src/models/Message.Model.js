import {Schema, model} from 'mongoose' 

const MsgsSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    type: { type: String, required: true, },
    body: { type: String, required: true }

  },
  { timestamps: true }
)

const MessagesModel = model('messages', MsgsSchema)

export default MessagesModel

