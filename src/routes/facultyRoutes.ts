import { Router } from 'express';
import { onlyPost } from '../controllers/controllerUtils';
import { getToken, getData, query } from '../controllers/defaultControllers';
import { facultyRead, facultyCreate, facultyUpdate, facultyDelete } from '../controllers/facultyControllers'

const router = new Router();

router.get('/', onlyPost)
      .post('/facultyread', facultyRead)
      .post('/faculty-create', facultyCreate)
      .post('/faculty-update', facultyUpdate)
      .post('/faculty-delete', facultyDelete)

export default router;
