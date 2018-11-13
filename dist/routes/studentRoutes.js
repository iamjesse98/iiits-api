"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllerUtils_1 = require("../controllers/controllerUtils");
var studentControllers_1 = require("../controllers/studentControllers");
var router = new express_1.Router();
router.get('/*', controllerUtils_1.onlyPost)
    .post('/', studentControllers_1.studentIndex)
    .post('/update', studentControllers_1.studentUpdate)
    .post('/create', studentControllers_1.studentCreate)
    .post('/courses', studentControllers_1.StudentFromCourse)
    .post('/courseid', studentControllers_1.StudentFromAcademicCourseId)
    .post('/set_reg_status', studentControllers_1.setStudentRegStatus)
    .post('/set_course_suggest', studentControllers_1.setStudentCourseSuggest)
    .post('/education_history', studentControllers_1.educationHistory)
    .post('/delete', studentControllers_1.deleteStudent)
    .post('/parent', studentControllers_1.parent)
    .post('/sem_course_reg', studentControllers_1.semCourseReg);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map