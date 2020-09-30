// import de express
import express from 'express'
import fs from 'fs/promises'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 3000

// définition d'une route '/', la route par défaut.
// lorsqu'un client effectuera une requête sur ce endpoint
// on lui retournera le texte 'Hello World!' via la callback/
// Cette callback est aussi appellée 'handler function'
app.get('/', (req, res) => {
    // on pourrait lire une page html que l'on a codée
    //et send le contenun du fichier index.html

    res.send('Hello World!')
})

// a route with parameters userId & BookId, les":" nécessaires
// GET /users/11/books/13
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(
        `Book with id ${req.params.bookId} for user with id ${req.params.userId}`
    )
})

app.get('readfile/:filename', async (req, res) => {
    // il faut y rajouter un try, catch, pour gérer les erreurs
    try {
        let content = await fs.readFile(req.params.filename, 'utf-8')
        res.send(content)
    } catch (e) {
        res.send('sorry')
    }
})

// démarrage de notre serveur sur le port 3000
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log(`Example app listening at http://localhost:${PORT}`)
})
