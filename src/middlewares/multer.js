import multer from "multer";

export function uploadFileFormatoFCAPS() {
  const storage = multer.diskStorage({
    destination: "./src/routes/files",
    filename: function (_req, file, cb) {
      cb(null, "Formato_FCAPS.pdf");
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

export function uploadFileJefatura() {
  const storage = multer.diskStorage({
    destination: "/tmp/",
    filename: function (_req, file, cb) {
      cb(null, "Jefatura.pdf");
    },
    limits: {
      fileSize: 1024 * 1024 * 5 // Tamaño máximo del archivo en bytes (5 MB en este caso)
    }
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

export function uploadFileSNTE() {
  const storage = multer.diskStorage({
    destination: "/tmp/",
    filename: function (_req, file, cb) {
      cb(null, "SNTE.pdf");
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

export function uploadFileCentralesDRs() {
  const storage = multer.diskStorage({
    destination: "./src/routes/files",
    filename: function (_req, file, cb) {
      cb(null, "CentralesDRs.pdf");
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

export function uploadFileEducativas() {
  const storage = multer.diskStorage({
    destination: "./src/routes/files",
    filename: function (_req, file, cb) {
      cb(null, "Educativas.pdf");
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

export function uploadFileInscripcion() {
  const storage = multer.diskStorage({
    destination: "./src/routes/files",
    filename: function (_req, file, cb) {
      cb(null, "Inscripcion.pdf");
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

export function uploadFileHorario() {
  const storage = multer.diskStorage({
    destination: "./src/routes/files",
    filename: function (_req, file, cb) {
      cb(null, "Horario.pdf");
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}