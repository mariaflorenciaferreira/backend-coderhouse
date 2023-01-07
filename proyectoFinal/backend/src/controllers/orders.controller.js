import Order from '../models/Order.Model.js'
import Products from '../persistencia/DAOs/ProductsMongoDb.DAO.js'
import 'dotenv/config'
import { createTransport } from 'nodemailer';


// servicio mail

const TEST_MAIL = process.env.TEST_MAIL
const PASSWORD= process.env.PASSWORD

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: PASSWORD
    }
});




//CREATE
export const saveOrder = async (req, res) => {
    const newOrder = new Order(req.body);

    // const prodTitle= Products.getById(newOrder.products)
    console.log(newOrder.products)

    const mailOptions = {
        from: 'Servidor Node.js',
        to: TEST_MAIL,
        subject: `ORDEN DE COMPRA #${newOrder._id}`,
        html: `<h1>Realizaste la compra en <span> e-commerce</span></h1> <div> <h3>Detalle de tu compra</h3> <p>${newOrder.products}</p></div>`,
        attachments:[
            {
                path:'https://raw.githubusercontent.com/andris9/Nodemailer/master/assets/nm_logo_200x136.png'
            }
        ]
    } 

    try {
        const savedOrder = await newOrder.save();

        // const info = await transporter.sendMail(mailOptions)
        // console.log(info)
        console.log(savedOrder)
        
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




