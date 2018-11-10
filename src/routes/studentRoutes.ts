import { Router } from 'express';
import { onlyPost } from '../controllers/controllerUtils';
import { getToken, getData, query } from '../controllers/defaultControllers';
import { studentIndex, setStudentRegStatus, setStudentCourseSuggest, StudentFromCourse, studentCreate, studentUpdate, educationHistory, parent, StudentFromAcademicCourseId, semCourseReg } from '../controllers/studentControllers';

const router = new Router();

router.get('/*', onlyPost)
      .post('/', studentIndex)
      .post('/update', studentUpdate)
      .post('/create', studentCreate)
      .post('/courses', StudentFromCourse)
      .post('/courseid', StudentFromAcademicCourseId)
      .post('/set_reg_status', setStudentRegStatus)
      .post('/set_course_suggest', setStudentCourseSuggest)
      .post('/education_history', educationHistory)
      .post('/parent', parent)
      .post('/sem_course_reg', semCourseReg);

export default router;
