import preparacionAcademica from '../models/preparacionAcademica';

export const findAllPreparacionAcademicaCtrl = async(req,res)=>{
     try {
        const preparacionacademica = await preparacionAcademica.find()
        res.json(preparacionacademica);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al devolver los datos generales'})
     }
}


export const  createPreparacionAcademicaCtrl = async(req,res)=>{
    if(!req.body.primaria){   
        return res.status(400).json({message: 'informacion de primaria del evento es requerido'})
     }
    try {
        const newPreparacionAcademica = new preparacionAcademica({
            primaria:req.body.primaria,
            secundaria:req.body.secundaria,
            carreraC:req.body.carreraC,
            licenciatura:req.body.licenciatura
        });

        const preparacionAcademicaSaved = await newPreparacionAcademica.save();
        
        res.json(preparacionAcademicaSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear los datos de preparacion academica'})
    }
}

export const findOnePreparacionAcademicaCtrl= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const preparacionAcademicaSaved = await preparacionAcademica.findById(id);
    if(!preparacionAcademicaSaved)
    return res.
    status(404)
    .json({message:'preparacion academica con es id no existe'});

    
    res.json(preparacionAcademicaSaved);
    } catch (error) {
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deletePreparacionAcademicaCtrl = async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await preparacionAcademica.findByIdAndDelete(id);

    res.json({
        message: 'preparacion academica ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el dato no fue liminado'});
   }

}

export const updatePreparacionAcademicaCtrl = async(req,res)=>{

   try {
    await preparacionAcademica.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "preparacion academica actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}