const Contact = require('../models/contactModel');

const index = async (req, res) => {
    try{
        const contacts = await Contact.find({})
        if(contacts){
            return res.status(200).json(
                {
                    status: "Contact list returned.",
                    message: "Contatos recuperados com sucesso.",
                    data: contacts
                }
            );
        }
        else{
            return res.status(400);
        }
    }
    catch(err){
        console.log(err);
        return res.status(400);
    }
}

const create = async (req, res) => {
    try{
        const result = await Contact.create(req.body)
        if(result)
            return res.status(200).json({ status: "Contact created." });
        else{
            return res.status(400);
        }
    }
    catch(err){
        console.log(err);
        return res.status(400);
    }
}

const view = async (req, res) => {
    try {
        const { id } = req.params
        const contact = await Contact.findById(id)
        if (contact) {
            return res.status(200).json(
                {
                    status: "Contact returned.",
                    data: contact
                }
            );
        }
        else {
            return res.status(400);
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const contact = await Contact.findByIdAndUpdate(id, req.body, { returnOriginal: false })
        if (contact)
            return res.status(200).json(
                {
                    status: "Contact updated.",
                    data: contact
                }
            );
        else {
            return res.status(400);
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400);
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Contact.findByIdAndRemove(id)
        if (result)
            return res.status(200).json(
                {
                    status: "Contact removed.",
                }
            );
        else {
            return res.status(400);
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400);
    }
}

module.exports.index = index
module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove