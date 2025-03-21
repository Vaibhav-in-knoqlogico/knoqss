// const express=require('express');
// const app=express();
// const cors=require('cors');
// const PORT=3200
// const leadRoute=require('./route/leads');
// const path = require('path');
// const bodyParser = require("body-parser");


// app.listen(PORT,()=>{
//     console.log(`server is running ${PORT}`)
// })

// app.use(express.json()); // For JSON payloads
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use('/leads',leadRoute);
// app.use(express.static(path.join(__dirname)));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });


const express = require('express');
const path = require('path');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./google-service-account.json'); // JSON key file
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Serve the frontend HTML file
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const SHEET_ID = '1ziJOoWusMQLZ6f0j2Ax4NL6TL3cMIJ09NgI-GrXkcMo'; // Replace with actual Google Sheet ID

async function addRowToSheet(data) {
    try {
        // console.log('Connecting to Google Sheets...');
        const doc = new GoogleSpreadsheet(SHEET_ID);

        // Authenticate with service account credentials
        await doc.useServiceAccountAuth(creds);

        // Load the document information
        await doc.loadInfo();
        // console.log('Connected to Google Sheets.');

        const sheet = doc.sheetsByIndex[0]; // First sheet
        // console.log('Found sheet:', sheet.title);

        // Add row
        await sheet.addRow(data);
        // console.log('Data inserted successfully:', data);
    } catch (error) {
        // console.error('Error inserting row:', error);
        throw error;
    }
}

app.post('/submit', async (req, res) => {
    try {
        await addRowToSheet(req.body);
        res.json({ message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', error: error.message });
    }
});

app.listen(PORT, () => {
    // console.log(`Server running on http://localhost:${PORT}`);
});
