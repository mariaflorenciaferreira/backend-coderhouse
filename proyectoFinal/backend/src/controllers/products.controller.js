import ProductsApi from '../api/products.api.js';

const apiProducts = new ProductsApi();

export const getAll = async (req, res) => {

    try {
        let products = await apiProducts.getAll();
        res.status(200).json({ products });

    } catch (error) {
        // res.status(500).json({ success: false, error });
        console.log(`error getAll products ${error}`)

    }
    };

    export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        let prod = await apiProducts.getById(id);
        res.status(200).json({ prod });

    } catch (error) {
        // res.status(500).json({ success: false, error });
        console.log(`error getById products ${error}`)

    }
    };

    export const saveProduct = async (req, res) => {
    try {
        const data = req.body;
        const newProduct = await apiProducts.saveProduct(data);
        res.status(200).json({ prod: newProduct });

    } catch (error) {
        // res.status(500).json({ success: false, error });
        console.log(`error saveProduct ${error}`)

    }
    };

    export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedProd = await apiProducts.updateProd(id, data);
        res.status(200).json({ prod: updatedProd });

    } catch (error) {
        // res.status(500).json({ success: false, error });
        console.log(`error updateProduct ${error}`)

    }
    };

    export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await apiProducts.deleteById(id);
        res.status(200).json({ message: `product id ${id} deleted` });

    } catch (error) {
        // res.status(500).json({ success: false, error });
        console.log(`error deleteById product ${error}`)

    }
    };

    export const deleteAll = async (req, res) => {
    try {
        await apiProducts.deleteAll()
        res.status(200).json({success: true})
        
    } catch (error) {
        // res.status(500).json({ success: false, error });
        console.log(`error deleteAll product ${error}`)

        
    }
};
