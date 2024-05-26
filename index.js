import express from 'express';
import router from './route/router.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('/assets/css'))
app.use('/', router);



app.listen(PORT, () => {
    console.log (`Servidor iniciado en el puerto http://localhost:${PORT}`);
});