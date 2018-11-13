# IIITS - API
---------------

## End points

### /student

url | verb(POST/GET) | payload | payload Example
----|------|---------|----------------
/   | POST | { query<String - SQL Conditional(criteria) Syntax>,  params<String - comma sepearted fields>} | { query: 'Student_Id=20160010007', params: 'Student_First_Name, Student_Middle_Name, Student_Last_name' }
/update | POST | { query<String - SQL Conditional Syntax>,  params<String - comma seperated key=value>} | { query: 'Student_Id=20160010070', params: "Student_First_Name='Mr. Bean'" }
/create | POST | { params<String - JSON key(field): value> } | { params: '{"key":"\\"value\\""}' }
/courses | POST | {} | {}
/courseid | POST | { CID<Int - course Id> } | { CID: 12 }
/set_reg_status | POST | { student_id<Int> } | { student_id: 2 }
/set_course_suggest | POST | { student<Int>, suggest<String> } | { student: 2, suggest: 'Good Course' }
/delete | POST | { sId<Int> }
### /course
url | verb | payload | payload Example
----|------|---------|----------------
/read | POST | |
/create | POST | |
/update | POST | |
/delete | POST | |

### /faculty
url | verb | payload | payload Example
----|------|---------|----------------
/facultyread | POST | |
/faculty-create | POST | |
/faculty-update | POST | |
/faculty-delete | POST | |
