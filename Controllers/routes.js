const setFirstShema = require('../Models/projectSchema');

const mainGet = (req, res) =>{
    res.send("Back end port 4000")
};


const getFindAll = async (req, res) => {
        try {
            res.set('Access-Control-Allow-Origin', '*');
            res.json(await setFirstShema.find({}));
        } catch (error) {
            res.status(400).json(error);
        }
};



const getByID = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setFirstShema.findById(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


const postRoutes = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setFirstShema.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};


 const putRoutes = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setFirstShema.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteRoutes = async (req, res) =>{
    try {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(await setFirstShema.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
};



module.exports = {
    getRoutes,
    getFindAll,

};
