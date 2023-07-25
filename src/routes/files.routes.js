import { Router } from "express";
import {
  uploadFileFormatoFCAPS,
  uploadFileJefatura,
  uploadFileSNTE,
  uploadFileCentralesDRs,
  uploadFileEducativas,
  uploadFileInscripcion,
  uploadFileHorario,
} from "../middlewares/multer";

const router = Router();

router.post("/Formato_FCAPS", uploadFileFormatoFCAPS(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/Formato_FCAPS", (req, res) => {
  const rutaArchivo = "/files/Formato_FCAPS.pdf";

  res.download(__dirname + rutaArchivo, (err) => {
    if (err) {
      // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
      console.log(err);
      res.status(404).send("Archivo no encontrado");
    }
  });
});

router.post("/Jefatura", uploadFileJefatura(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/Jefatura", (req, res) => {
    const rutaArchivo = "/files/Jefatura.pdf";
  
    res.download(__dirname + rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });

router.post("/SNTE", uploadFileSNTE(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/SNTE", (req, res) => {
    const rutaArchivo = "/files/SNTE.pdf";
  
    res.download(__dirname + rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });


router.post("/CentralesDRs", uploadFileCentralesDRs(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/CentralesDRs", (req, res) => {
    const rutaArchivo = "/files/CentralesDRs.pdf";
  
    res.download(__dirname + rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });

router.post("/Educativas", uploadFileEducativas(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/Educativas", (req, res) => {
    const rutaArchivo = "/files/Educativas.pdf";
  
    res.download(__dirname + rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });

router.post("/Inscripcion", uploadFileInscripcion(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/Inscripcion", (req, res) => {
    const rutaArchivo = "/files/Inscripcion.pdf";
  
    res.download(__dirname + rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });


router.post("/Horario", uploadFileHorario(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/Horario", (req, res) => {
    const rutaArchivo = "/files/Horario.pdf";
  
    res.download(__dirname + rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });

export default router;