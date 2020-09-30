import express from 'express'

const app = express()
const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.13'
const PORT = 7777

app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})

app.get('/aboutme/:hostId', (req, res) => {
    res.send(`my name is ${req.params.hostId}`)
})

app.get('/aboutyou', (req, res) => {
    res.send(`Welcome ${req.ip} to my first express app.`)
    let head = JSON.stringify(req.headers)
    res.send(`La version de votre navigateur est ${head['user-agent']}`)
})

app.get('/vote/:age', (req, res) => {
    let age = Number(req.params.age)
    if (age < 18) {
        res.send(`Vous êtes trop jeune pour voter`)
    } else {
        res.send(`Vous pouvez voter!`)
    }
})

app.get('/palindrome/:pal', (req, res) => {
    let pal = req.params.pal
    if (pal === pal.split('').reverse().join('')) {
        res.send(`${pal} is a palindrome`)
    } else {
        res.send(`${pal} is not a palindrome`)
    }
})

app.get('/oddtest/:nb', (req, res) => {
    let nb = Number(req.params.nb)
    nb % 2 === 0
        ? res.send(`${req.params.nb} is pair`)
        : res.send(`${req.params.nb} is impair`)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
