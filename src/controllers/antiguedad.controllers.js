import Antiguedad from '../models/antiguedad';

export const findAllAntiguedad = async(req,res)=>{
     try {
        const antiguedad = await Antiguedad.find()
        res.json(antiguedad);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al devolver los de antiguedad'})
     }
}

export const createAntiguedad = async(req,res)=>{
    if(!req.body.valoresAntiguedad){   
        return res.status(400).json({message: 'Valores de antiguedad es requerido'})
     }
    try {
        const newAntiguedad = new Antiguedad({
            valoresAntiguedad:req.body.valoresAntiguedad,
        });

        const newAntiguedadSaved = await newAntiguedad.save();
        
        res.json(newAntiguedadSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear los valores de antiguedad'})
    }
}

export const findOneAntiguedad = async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const newAntiguedadSaved = await Antiguedad.findById(id);
    if(!newAntiguedadSaved)
    return res.
    status(404)
    .json({message:'el dato general con es id no existe'});

    
    res.json(newAntiguedadSaved);
    } catch (error) {
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteAntiguedad = async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Antiguedad.findByIdAndDelete(id);

    res.json({
        message: 'el dato ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el dato no fue eliminado'});
   }

}

export const updateAntiguedad = async(req,res)=>{
   try {
    await Antiguedad.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "dato general actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}