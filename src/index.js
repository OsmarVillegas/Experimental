import app from "./app";
import './database';

app.listen(process.env.PORT || 4001);
console.log('Server listen on port', process.env.PORT || 4001);

