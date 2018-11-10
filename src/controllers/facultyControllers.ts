import { query as queryDB } from '../database/db';

const facultyRead = async (req, res) => {
  const { query } = req.body
  console.log("Query:",query)
  const s = `SELECT * from employee ${query && 'WHERE'} ${query}`
  try {
    const docs = await queryDB(s);
    // console.log(docs);
    res.json({ s, docs });
  } catch (err) {
    res.json(err);
  }
}

const facultyCreate = async (req, res) => {
  const { params } = req.body;
  console.log(params)
  const joParams = JSON.parse(params)
  // console.log(JSON.parse(params)['a'])
  // console.log(JSON.parse(joParams))
  const s = `INSERT INTO employee (${Object.keys(joParams).join(', ')}) VALUES (${Object.values(joParams).join(', ')})`;
  console.log(s)
  try {
    const docs = await queryDB(s);
    res.json(s);
  } catch (err) {
    res.json(err);
  }
}

const facultyUpdate = async (req, res) => {
  const { query, params } = req.body
  console.log(query, params)
    const s = `UPDATE employee SET ${params} WHERE ${query}`;
  try {
    const docs = await queryDB(s);
    res.json(s);
  } catch (err) {
    res.json(err);
  }
}

const facultyDelete = async (req, res) => {

}

export { facultyRead, facultyCreate, facultyUpdate, facultyDelete }
