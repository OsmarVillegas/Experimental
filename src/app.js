import express from "express";
import morgan from "morgan";
import pkg from '../package.json'

import {createRoles} from './lib/initialSetup'

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes'
import datosGeneralesRoutes from './routes/datosGenerales.routes'
import antiguedadRoutes from './routes/antiguedad.routes'
import preparacionAcademicaRoutes from './routes/preparacionAcademica.routes'
import cursosRoutes from './routes/cursos.routes'

const app = express()
// createRoles();

app.set('pkg', pkg)

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/datosGenerales',datosGeneralesRoutes)
app.use('/api/antiguedad',antiguedadRoutes)
app.use('/api/preparacionAcademica',preparacionAcademicaRoutes)
app.use('/api/cursos',cursosRoutes)

export default app;