import app from "./src/app";
import './src/database';

app.listen(process.env.PORT || 4001);
console.log('Server listen on port', process.env.PORT || 4001);

