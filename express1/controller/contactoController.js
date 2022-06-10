const Contacto = require("../models/Contacto")

exports.crearContacto = async (req, res) => {
    try {
        let contacto;
        contacto= new Contacto(req.body);
        await contacto.save();
        res.send(contacto);
    } catch(error) {
        console.log(error)
        res.status(500).send("hay un error")
    }
}


exports.obtenerContactos = async(req, res)=>{
    try{
        let contactos = await Contacto.find();
        res.json(contactos)
    }catch (error){
        console.log(error)
        res.status(500).send("hay un problema")
    }
} 

exports.obtenerContacto = async(req, res)=>{
    try{
        let contacto = await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(404).json({mesaje:"No existe la informacion solicitada"})
        }
        res.json(contacto)
    }catch (error) {
        console.log(error)
        res.status(500).send("hay un problema")
    }
}

exports.actualizarContacto = async(req, res)=> {
    try{
        const { correo,nombre,direccion,ciudad,edad } = req.body
        let contacto = await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(404).json({mesaje:"No existe la informacion solicitada"})
        }

        contacto.correo = correo
        contacto.nombre = nombre
        contacto.direccion = direccion
        contacto.ciudad = ciudad
        contacto.edad = edad

        let procesoUpdate = await Contacto.findOneAndUpdate({_id: req.params.id}, contacto, {new: true})
        res.json(procesoUpdate)


    }catch (error) {
        console.log(error)
        res.status(500).send("hay un problema")
    }
}

exports.borrarContacto = async(req, res) => {
    try{
        let contacto = await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(404).json({mesaje:"No existe la informacion solicitada"})
        }
        await Contacto.findByIdAndRemove({_id: req.params.id})
        res.status(200).json({mensaje: "dato eliminado correctamente"})
    }catch (error) {
        console.log(error)
        res.status(500).send("hay un problema")
    } 

}