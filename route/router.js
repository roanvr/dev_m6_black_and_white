import express from 'express';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
const __dirname = import.meta.dirname;
import path from 'path';

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/cargar', async(req,res) => {
    const { img } = req.query;
    const imagenGuardada = `imagen${uuidv4().slice(0,4)}.jpg`
    const imgJimp = await Jimp.read(img);
    await imgJimp
    .resize(350, AUTO)
    .sepia()
    .writeAsync(`assets/img/imagen${uuidv4().slice(0,4)}.jpg`);
    res.sendFile(path.join(__dirname, `../assets/img/${imagenGuardada}`))
})

export default router
