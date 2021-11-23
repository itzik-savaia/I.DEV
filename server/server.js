const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;

app.use(express.static(path.join(__dirname, "../client", "build")));

app.all('*', (req, res) => res.redirect("/"));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
app.use(function (error, req, res, next) {
    console.log('req =>', req);
    console.log('error =>', error);
    console.log('res =>', res);
});

