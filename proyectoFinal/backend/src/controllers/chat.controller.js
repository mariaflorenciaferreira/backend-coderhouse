import ChatsApi from '../api/chat.api.js';

const apiChats = new ChatsApi();

export const getAll = async (req, res) => {

    try {
        let chat = await apiChats.getAll();
        res.status(200).json({ chat });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error getAll chats ${error}`)

    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        let chat = await apiChats.getById(id);
        res.status(200).json({ chat });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error getById chats ${error}`)

    }
};




export const saveChat= async (req, res) => {
    try {
        const data = req.body;
        const newChat= await apiChats.saveChat(data);
        res.status(200).json({ prod: newChat });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error saveChat ${error}`)

    }
};

export const updateChat = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedChat = await apiChats.updateChat(id, data);
        const newChat=await apiChats.getById(id)
        res.status(200).json({ update: newChat});

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error updateChat ${error}`)

    }
};

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await apiChats.deleteById(id);
        res.status(200).json({ message: `chat  id ${id} deleted` });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error deleteById chat ${error}`)

    }
};  
