"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../database/db");
var studentIndex = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, query, params, s, docs, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, query = _a.query, params = _a.params;
                s = "SELECT " + params + " FROM student WHERE " + query;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _b.sent();
                // console.log(docs);
                res.json({ s: s });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.json({ s: s, err: err_1, msg: '😨 oh no!!!' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.studentIndex = studentIndex;
var studentUpdate = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, query, params, s, docs, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, query = _a.query, params = _a.params;
                s = "UPDATE student SET " + params + " WHERE " + query;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _b.sent();
                res.json(s);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                res.json(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.studentUpdate = studentUpdate;
var studentCreate = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var params, joParams, s, docs, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.body.params;
                joParams = JSON.parse(params);
                s = "INSERT INTO student (" + Object.keys(joParams).join(', ') + ") VALUES (" + Object.values(joParams).join(', ') + ")";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _a.sent();
                res.json({ s: s, docs: docs });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.json(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.studentCreate = studentCreate;
// select s.Student_Id,s.Student_First_Name,s.Student_Middle_Name,s.Student_Last_name,Student_Cur_Sem from student as s where s.Student_Id in (select Distinct Student_Sem_Course_Reg_Student_Id from student_sem_course_reg where Student_Sem_Course_Reg_Reg_Status=0)
var StudentFromCourse = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var s, docs, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                s = "select s.Student_Id,s.Student_First_Name,s.Student_Middle_Name,s.Student_Last_name,Student_Cur_Sem from student as s where s.Student_Id in (select Distinct Student_Sem_Course_Reg_Student_Id from student_sem_course_reg where Student_Sem_Course_Reg_Reg_Status=0)";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _a.sent();
                res.json(docs);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.json(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.StudentFromCourse = StudentFromCourse;
var deleteStudent = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var sId, s, resp, q, d, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sId = req.body.sId;
                s = "select is_deleted from student where Id=" + sId;
                console.log(s);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                resp = _a.sent();
                console.log(resp[0]['is_deleted'].toString());
                if (!(resp[0]['is_deleted'].toString() == '1')) return [3 /*break*/, 3];
                res.json({ message: 'already deleted....' });
                return [3 /*break*/, 5];
            case 3:
                q = "update student set is_deleted=1 where Id=" + sId;
                return [4 /*yield*/, db_1.query(q)];
            case 4:
                d = _a.sent();
                res.json({ message: "successfully deleted " + sId + "...." });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_5 = _a.sent();
                res.json({ err: err_5 });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.deleteStudent = deleteStudent;
var StudentFromAcademicCourseId = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var CID, s, docs, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                CID = req.body.CID;
                s = "select a.Academic_Prog_Batch_Sem_Course_Credits,ac.Academic_Course_Name from academic_prog_batch_sem_course as a inner join academic_course as ac on a.Academic_Prog_Batch_Sem_Course=ac.Academic_Course_Id where Academic_Course_Id=" + CID + ");";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _a.sent();
                res.json(docs);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                res.json(err_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.StudentFromAcademicCourseId = StudentFromAcademicCourseId;
var setStudentRegStatus = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var student_id, s, docs, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                student_id = req.body.student_id;
                s = "update student_sem_course_reg set Student_Sem_Course_Reg_Reg_Status=1 where Student_Sem_Course_Reg_Student_Id=" + student_id + ";";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _a.sent();
                res.json(docs);
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                res.json(err_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.setStudentRegStatus = setStudentRegStatus;
var setStudentCourseSuggest = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, student_id, suggest, s, docs, err_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, student_id = _a.student_id, suggest = _a.suggest;
                s = "update student_sem_course_reg set Student_Sem_Course_Reg_Reg_Status=2,Student_Sem_Course_Reg_Student_Suggestion='" + suggest + "' where Student_Sem_Course_Reg_Student_Id='" + student_id + "';";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.query(s)];
            case 2:
                docs = _b.sent();
                res.json(docs);
                return [3 /*break*/, 4];
            case 3:
                err_8 = _b.sent();
                res.json(err_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.setStudentCourseSuggest = setStudentCourseSuggest;
var educationHistory = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var docs, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.query(req.body.query)];
            case 1:
                docs = _a.sent();
                res.json({ data: docs });
                return [3 /*break*/, 3];
            case 2:
                err_9 = _a.sent();
                res.json(err_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.educationHistory = educationHistory;
var parent = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var docs, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.query(req.body.query)];
            case 1:
                docs = _a.sent();
                res.json(docs);
                return [3 /*break*/, 3];
            case 2:
                err_10 = _a.sent();
                res.json(err_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.parent = parent;
var semCourseReg = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var docs, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.query(req.body.query)];
            case 1:
                docs = _a.sent();
                res.json(docs);
                return [3 /*break*/, 3];
            case 2:
                err_11 = _a.sent();
                res.json(err_11);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.semCourseReg = semCourseReg;
//# sourceMappingURL=studentControllers.js.map