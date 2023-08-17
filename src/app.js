import express from "express";
import morgan from "morgan";
import pkg from '../package.json'
import cors from 'cors'

import datosGeneralesRoutes from './routes/datosGenerales.routes'
import antiguedadRoutes from './routes/antiguedad.routes'
import preparacionAcademicaRoutes from './routes/preparacionAcademica.routes'
import cursosRoutes from './routes/cursos.routes'
import filesRoutes from './routes/files.routes'
import modoImpresionRoutes from './routes/modoImpresion'
import multer from "multer";

const app = express()

app.use((req, res, next) => {
    // res.append('Access-Control-Allow-Origin',['http://localhost:4200']);
    res.append('Access-Control-Allow-Origin',['https://copper-axiom-368104.web.app','http://localhost:4200']);
    res.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.setHeader('Connection', 'keep-alive');
    // res.append('Access-Control-Allow-Headers',['Content-Type']);
    next()
})

const whiteList = ['https://copper-axiom-368104.web.app','http://localhost:4200']

app.use(cors({ origin: whiteList }))

app.set('pkg', pkg)

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/files/',filesRoutes)
app.use('/api/datosGenerales',datosGeneralesRoutes)
app.use('/api/antiguedad',antiguedadRoutes)
app.use('/api/preparacionAcademica',preparacionAcademicaRoutes)
app.use('/api/cursos',cursosRoutes)
app.use('/api/modoImpresion',modoImpresionRoutes)

export default app;