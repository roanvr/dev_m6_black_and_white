import express from 'express';
const router = express.Router();
const __dirname = import.meta.dirname;
import path from 'path';

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

export default router
