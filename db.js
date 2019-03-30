const Pool = require('pg').Pool

const pool = new Pool({
  user: 'c2g',
  host: 'c2g.cvcqungjz8q3.us-east-2.rds.amazonaws.com',
  database: 'c2g',
  password: 'amsterdam',
  port: 5432,
})

module.exports = pool