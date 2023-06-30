import Noticias from '../models/Noticias';


export const findAllNoticias= async(req,res)=>{
     try {
        const noticias = await Noticias.find()
        res.json(noticias);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovolver los noticias'})
     }
}


export const createNoticias= async(req,res)=>{
    if(!req.body.nameNoticiasEsp){
        return res.status(400).json({message: 'Nombre de la noticia requerido'})
     }
    try {
        const newNoticias= new Noticias({
            nameNoticiasEsp:req.body.nameNoticiasEsp,
            nameNoticiasEng:req.body.nameNoticiasEng,
            contenidoEsp:req.body.contenidoEsp,
            contenidoEng:req.body.contenidoEng,
            visibilidad:req.body.visibilidad,
            img:req.body.img,
            creador:req.body.creador
        
        });
        const  noticiaSaved = await newNoticias.save();
        
        res.json(noticiaSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear la noticia'})
    }
}

export const findOneNoticia= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const noticias = await Noticias.findById(id);
    if(!noticias)
    return res.
    status(404)
    .json({message:'la noticia con ese id no existe'});

    
    res.json(noticias);
    } catch (error) {
        
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteNoticia = async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Noticias.findByIdAndDelete(id);

    res.json({
        message: 'la noticia ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, la noticia no fue liminado'});
   }

}

export const updateNoticia = async(req,res)=>{

   try {
    await Noticias.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "noticia actualizada"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}