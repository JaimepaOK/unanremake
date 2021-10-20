const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'Link2000',
    database: 'unantest',
    port: '5432'
};

const pool = new Pool(config);

const getNombres = async() => {

    try {
        const res = await pool.query('select nombre from cunan order by "ID"');
        console.log(res.rows);

    } catch (e) {
        console.log(e);
    }

};

module.exports = { getNombres };