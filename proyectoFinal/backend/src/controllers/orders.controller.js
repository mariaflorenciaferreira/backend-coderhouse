import Order from '../models/Order.Model.js'


//CREATE
export const saveOrder = async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
        console.log(`error saveOrder ${error}`)
    }
};



//UPDATE
export const updateOrder= async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
        console.log(`error updateOrder ${error}`)
    }
};


//DELETE
export const deleteById = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(`Order ${req.params.id} has been deleted...`);
    } catch (error) {
        res.status(500).json(error);
        console.log(`error deleteById ${error}`)
    }
};  



//GET USER ORDERS
export const getById = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        
        if(orders.length>0){
            res.status(200).json(orders);
        }else{
            res.json(`User ${req.params.userId} has 0 orders`);

        }
    } catch (error) {
        res.status(500).json(error);
        console.log(`error getById ${error}`)

    }
};  


//GET ALL
export const getAll = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
        console.log(`error getAll ${error}`)
        
    }
};




