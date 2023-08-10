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

import path from "path";
import fs from "fs";
import { db } from "../database";

const router = Router();

router.post("/Formato_FCAPS", uploadFileFormatoFCAPS(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/Formato_FCAPS.pdf")
    );

    var collection = db.collection("Formato_FCAPS");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err)
  }
});

router.get("/Formato_FCAPS", async (req, res) => {
  try {
    var collection = db.collection("Formato_FCAPS");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/Jefatura", uploadFileJefatura(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/Jefatura.pdf")
    );

    var collection = db.collection("Jefatura");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err);
  }
});

router.get("/Jefatura", async (req, res) => {
  try {
    var collection = db.collection("Jefatura");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/SNTE", uploadFileSNTE(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/SNTE.pdf")
    );

    var collection = db.collection("SNTE");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err);
  }
});

router.get("/SNTE", async (req, res) => {
  try {
    var collection = db.collection("SNTE");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/CentralesDRs", uploadFileCentralesDRs(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/CentralesDRs.pdf")
    );

    var collection = db.collection("CentralesDRs");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err);
  }
});

router.get("/CentralesDRs", async (req, res) => {
  try {
    var collection = db.collection("CentralesDRs");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/Educativas", uploadFileEducativas(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/Educativas.pdf")
    );

    var collection = db.collection("Educativas");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err);
  }
});

router.get("/Educativas", async (req, res) => {
  try {
    var collection = db.collection("Educativas");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/Inscripcion", uploadFileInscripcion(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/Inscripcion.pdf")
    );

    var collection = db.collection("Inscripcion");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err);
  }
});

router.get("/Inscripcion", async (req, res) => {
  try {
    var collection = db.collection("Inscripcion");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/Horario", uploadFileHorario(), async (req, res) => {
  try {
    var documento = await fs.readFileSync(
      path.resolve("/tmp/Horario.pdf")
    );

    var collection = db.collection("Horario");

    const archivo = { id: 1, FileData: Buffer.from(documento) };

    collection.updateOne(
      { id: 1 },
      { $set: { id: archivo.id, file: archivo.FileData } }
    );

    res.send(
      "ok"
    );
  } catch (err) {
    res.send(err);
  }
});

router.get("/Horario", async (req, res) => {
  try {
    var collection = db.collection("Horario");

    var archivo = await collection.findOne({ id: 1 });

    var lta = Object.values(archivo.file);

    var ff = lta.toString("binary");

    var file = Buffer.from(ff);

    await fs.writeFileSync(path.resolve("/tmp/archivo.pdf"), lta[1]);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperar 500 ms

    res.download(path.resolve("/tmp/archivo.pdf"), (err) => {
      if (err) {
        // Manejar errores en caso de que el archivo no se encuentre o no se pueda descargar
        console.log(err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

export default router;
