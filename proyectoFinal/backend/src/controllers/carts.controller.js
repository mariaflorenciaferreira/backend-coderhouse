import CartApi from '../api/carts.api.js';

const apiCart = new CartApi();

export const getAll = async (req, res) => {

    try {
        let carts = await apiCart.getAll();
        res.status(200).json({ carts});

    } catch (error) {
        res.status(500).json({ success: false, error });
    }
    };

    export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        let cart = await apiCart.getById(id);
        res.status(200).json({ cart });

    } catch (error) {
        res.status(500).json({ success: false, err });
    }
    };

    export const saveCart = async (req, res) => {
    try {
        const data = req.body;
        const newCart = await apiCart.saveCart(data);
        res.status(200).json({ prod: newCart });

    } catch (error) {
        res.status(500).json({ success: false, err });
    }
    };

    export const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedCart = await apiCart.updateCart(id, data);
        res.status(200).json({ prod: updatedCart });

    } catch (error) {
        res.status(500).json({ success: false, error });
    }
    };

    export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await apiCart.deleteById(id);
        res.status(200).json({ message: `cart id ${id} deleted` });

    } catch (error) {
        res.status(500).json({ success: false, error });
    }
    };

    export const deleteAll = async (req, res) => {
    try {
        await apiCart.deleteAll()
        res.status(200).json({success: true})
        
    } catch (error) {
        res.status(500).json({ success: false, error });
        
    }
};
