import MsgApi from '../api/messages.api.js';
import Message from '../models/Message.Model.js'

const apiMsg = new MsgApi();

export const getAll = async (req, res) => {

    try {
        let msg = await apiMsg.getAll();
        res.status(200).json({msg});

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error getAll msg ${error}`)
    }
};

//GET USER MSG
export const getById = async (req, res) => {
    try {
        const msgs = await Message.find({ userId: req.params.userId });
        
        if(msgs.length>0){
            res.status(200).json(msgs);
        }else{
            res.json(`User ${req.params.userId} has 0 msgs`);

        }
    } catch (error) {
        res.status(500).json(error);
        console.log(`error msg getById ${error}`)

    }
};  


export const saveMsg = async (req, res) => {
    try {
        const data = req.body;
        const newMsg = await apiMsg.saveMsg(data);
        res.status(200).json({ prod: newMsg });

    } catch (error) {
        res.status(500).json({ success: false, err });
        console.log(`error saveMsg  ${error}`)

    }
};



export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await apiMsg.deleteById(id);
        res.status(200).json({ message: `msg id ${id} deleted` });

    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error deleteById msg ${error}`)

    }
    };

export const deleteAll = async (req, res) => {
    try {
        await apiMsg.deleteAll()
        res.status(200).json({success: true})
        
    } catch (error) {
        res.status(500).json({ success: false, error });
        console.log(`error deleteAll msgs ${error}`)

        
    }
};



