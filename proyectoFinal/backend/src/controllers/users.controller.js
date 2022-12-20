import UsersApi from '../api/users.api.js';



const apiUser = new UsersApi();

export const getAll = async (  req, res) => {

    try {
        let user = await apiUser.getAll();
        res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error getAll users ${error}`)

    }
    };



    export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        let user = await apiUser.getById(id);
        res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error getById users ${error}`)

    }
    };

    export const saveUser = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await apiUser.saveUser(data);
        res.status(200).json({ user: newUser });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error saveUser ${error}`)

    }
    };

    export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedUser = await apiUser.updateUser(id, data);
        res.status(200).json({ user: updatedUser });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error updateUser ${error}`)

    }
    };

    export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await apiUser.deleteById(id);
        res.status(200).json({ message: `user id ${id} deleted` });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error deleteById user ${error}`)

    }
    };

    export const deleteAll = async (req, res) => {
    try {
        await apiUser.deleteAll()
        res.status(200).json({success: true})
        
    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error deleteAll users ${error}`)

        
    }
};
