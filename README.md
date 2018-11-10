# IIITS - API
---------------

## End points

### /student

url | verb | payload | payload Example
----|------|---------|----------------
/   | POST | { query<String - SQL Conditional(criteria) Syntax>,  params<String - comma sepearted fields>} | { query: 'Student_Id=20160010007', params: 'Student_First_Name, Student_Middle_Name, Student_Last_name' }
  /update | POST | { query<String - SQL Conditional Syntax>,  params<String - comma seperated key=value>} | { query: 'Student_Id=20160010070', params: "Student_First_Name='Mr. Bean'" }
  /create | POST | { params<String - JSON key(filed): value> } | { params: '{"key":"\"value\""}' }

### /course

### /faculty
