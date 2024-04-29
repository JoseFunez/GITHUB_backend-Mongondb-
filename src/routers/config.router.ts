import express from 'express';
import {obtenerConfig, obtenerConfigs, agregarConfig, actualizarConfig, eliminarConfig} from '../controllers/config.controller';

const router = express.Router();

router.get('/:id_config', obtenerConfig);

router.get('/', obtenerConfigs);

router.post('/', agregarConfig);

router.put('/:id_config', actualizarConfig);

router.delete('/:id_config', eliminarConfig);

export default router;