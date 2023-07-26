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

import path from 'path';

const router = Router();


router.post("/Formato_FCAPS", uploadFileFormatoFCAPS(), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

router.get("/Formato_FCAPS", (req, res) => {
  const rutaArchivo = path.resolve(`/tmp/Formato_FCAPS.pdf`);

  res.download(rutaArchivo, (err) => {
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
    const rutaArchivo = path.resolve(`/tmp/Jefatura.pdf`);

    res.download(rutaArchivo, (err) => {
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
    const rutaArchivo = path.resolve(`/tmp/SNTE.pdf`);
  
    res.download(rutaArchivo, (err) => {
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
    const rutaArchivo = path.resolve(`/tmp/CentralesDRs.pdf`);
  
    res.download(rutaArchivo, (err) => {
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
    const rutaArchivo = path.resolve(`/tmp/Educativas.pdf`);
  
    res.download(rutaArchivo, (err) => {
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
    const rutaArchivo = path.resolve(`/tmp/Inscripcion.pdf`);
  
  
    res.download(rutaArchivo, (err) => {
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
    const rutaArchivo = path.resolve(`/tmp/Horario.pdf`);
  
  
    res.download(rutaArchivo, (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });

export default router;
