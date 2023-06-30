import datosGenerales from '../models/datosGenerales';

export const findAllDatosGenerales = async(req,res)=>{
     try {
        const datosgenerales = await datosGenerales.find()
        res.json(datosgenerales);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al devolver los datos generales'})
     }
}


export const  createDatosGenerales = async(req,res)=>{
    if(!req.body.municipio){   
        return res.status(400).json({message: 'Municipio del evento es requerido'})
     }
    try {
        const newDatosGenerales = new datosGenerales({
            municipio:req.body.municipio,
            anio:req.body.anio
        });

        const datosGeneralesSaved = await newDatosGenerales.save();
        
        res.json(datosGeneralesSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear los datos generales'})
    }
}

export const findOneDatosGenerales= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const datosGeneralesSaved = await datosGenerales.findById(id);
    if(!datosGeneralesSaved)
    return res.
    status(404)
    .json({message:'el dato general con es id no existe'});

    
    res.json(datosGeneralesSaved);
    } catch (error) {
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteDatosGenerales = async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await datosGenerales.findByIdAndDelete(id);

    res.json({
        message: 'el dato ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el dato no fue liminado'});
   }

}

export const updateDatosGenerales = async(req,res)=>{

   try {
    await datosGenerales.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "dato general actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}