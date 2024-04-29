import express from 'express';
import {obtenerSponsor_otros_user, obtenerSponsor_otros_users, agregarSponsor_otros_user, actualizarSponsor_otros_user, eliminarSponsor_otros_user} from '../controllers/Sponsor_otros_user.controller';

const router = express.Router();

router.get('/:id_Sponsor_otros_user', obtenerSponsor_otros_user);

router.get('/', obtenerSponsor_otros_users);

router.post('/', agregarSponsor_otros_user);

router.put('/:id_Sponsor_otros_user', actualizarSponsor_otros_user);

router.delete('/:id_Sponsor_otros_user', eliminarSponsor_otros_user);



export default router;