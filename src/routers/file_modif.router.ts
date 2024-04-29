import express from 'express';
import {obtenerFile_modif, obtenerFile_modifs, agregarFile_modif, actualizarFile_modif, eliminarFile_modif} from '../controllers/file_modif.controller';

const router = express.Router();

router.get('/:id_file_modif', obtenerFile_modif);

router.get('/', obtenerFile_modifs);

router.post('/', agregarFile_modif);

router.put('/:id_file_modif', actualizarFile_modif);

router.delete('/:id_file_modif', eliminarFile_modif);

export default router;