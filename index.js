const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log("Server running on port ", PORT)
});
app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.status(200).sendFile('./html/index-2.html', { root: __dirname })
})
app.get('/resume', (req, res) => {
    res.status(200).sendFile('./html/resume.html', { root: __dirname })
})



app.use((req, res) => {
    res.status(404).sendFile('./html/404.html', { root: __dirname })
})