import {Schema, model} from 'mongoose' 

const CartSchema = new Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
            },
        ],
    },
    { timestamps: true }
);


const CartModel = model("Cart", CartSchema)

export default CartModel