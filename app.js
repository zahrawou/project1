const express = require('express');
const path = require('path');

const app = express();

app.use('/LabReaserch',express.static(path.join(__dirname ,'/PROJECT1')));

app.use((req, res) => {
    res.status(404);
    res.sendFile('<h1>Error 404: Resource not found</h1>');
})
app.listen(5501, () => {
    console.log('server is running on port 5500');
})