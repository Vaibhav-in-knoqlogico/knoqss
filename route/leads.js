const express = require('express');
const router = express.Router();
const pool = require('../database/connection'); // Assuming you're using a database connection pool

// router.get('/create', (req, res) => {
  
//   res.render('leads'); 
  
// });


router.post('/create', (req, res) => {
  const first_name = req.body.Fname;
  const last_name = req.body.Lname;
  const email = req.body.email;
  const phone_number = req.body.phone;
  const description = req.body.message;

  // Validate required fields
//   if (!first_name || !last_name || !email || !phone_number ) {
//     return res.status(400).send('All fields are required');
//   }

  // Insert data into the leads table
  const sql = `
     INSERT INTO leads (first_name, last_name, email, phone_number,description,created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?,NOW(), NOW())
  `;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      return res.status(500).send('Error connecting to the database');
    }

    connection.query(
      sql,
      [first_name, last_name, email, phone_number,description],
      (err, result) => {
        console.log(result);
        connection.release(); // Release the connection back to the pool

        if (err) {
          console.error('Error inserting lead data:', err);
          return res.status(500).send('Error saving lead data');
        }

        // Redirect to a success page or send a success message
        res.redirect('/');
      }
    );
  });
});

module.exports = router;