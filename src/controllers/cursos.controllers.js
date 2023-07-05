import Cursos from '../models/cursos';

export const findAllCursos = async(req,res)=>{
     try {
        const cursos = await Cursos.find()
        res.json(cursos);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al devolver los cursos'})
     }
}

export const createCursos = async(req,res)=>{
    if(!req.body.nombre){   
        return res.status(400).json({message: 'Valores de cursos es requerido'})
     }
    try {
        const newCursos = new Cursos({
            id: req.body.id,
            nombre:req.body.nombre,
            puntaje:req.body.puntaje
        });

        const newCursosSaved = await newCursos.save();
        
        res.json(newCursosSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear los valores de cursos'})
    }
}

export const findOneCursos = async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const newCursosSaved = await Cursos.findById(id);
    if(!newCursosSaved)
    return res.
    status(404)
    .json({message:'el dato de cursos con es id no existe'});

    
    res.json(newCursosSaved);
    } catch (error) {
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteCursos = async(req,res)=>{
    const {id}= req.params;
   try {
    const data = await Cursos.findByIdAndDelete(id);

    res.json({
        message: 'el dato de cursos ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el dato de cursos no fue eliminado'});
   }

}

export const updateCursos = async(req,res)=>{
   try {
    await Cursos.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "dato de cursos a actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}