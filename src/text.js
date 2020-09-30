import express from 'express'
const app = express()

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.13' // my local ip on my network
const PORT = 3000

// GET sur la racine
app.get('/', (req, res) => {
    //nous recupérons l'ip source de la requête
    // console.log(req)
    res.send(`Welcome ${req.ip} to my first express app.`)
})

// POST sur la racine
app.post('/', (req, res) => {
    res.send("Sorry we don't post requests yet.")
})

// GET sur '/hello'
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// GET sur '/hello/sofiane'
app.get('/hello/Vladimir', (req, res) => {
    res.send('Hello Vladimir!')
})

// GET sur '/hello/franck'
app.get('/hello/franck', (req, res) => {
    res.send('Hello Franck!')
})

// start the server
app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
