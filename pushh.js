const request = require('request')

// for(let i = 0; i <= 20; i++){
//   request.post('http://serene-wildwood-35121.herokuapp.com/query', {
//     form: {
//       query: 'describe student_educ_hist'
//     }
//   }, (err, res, body) => {
//     console.log(body)
//   })
// }

request.post('http://serene-wildwood-35121.herokuapp.com/query', {
  form: {
    query: 'describe student_sem_course_reg'
  }
}, (err, res, body) => {
  console.table(body)
})