const express = require('express')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const dotenv = require('dotenv');

const app = express()

app.use(express.json())

const port = process.env.PORT || 3000

let posts = [
    {
        id: 1,
        title: '1st post',
        content: 'This is my first post'
    },
    {
        id: 2,
        title: 'Second post',
        content: 'This is my second post!'
    }
]


app.use((req, res, next) => {
    console.log(`Request Url: ${req.url}`);
    next();
});

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    next();
});


app.get('/posts/', (req, res) => {
        res.send(posts)
    }
)

app.get('/posts/:id', (req, res) => {
        const id = req.params.id
        const post = posts.find(post => post.id == id)
        res.send(post)
    }
)

app.post('/posts/', (req, res) => {
        const post = req.body
        posts.push(post)
        res.send(post)
    }
)

app.put('/posts/:id', (req, res) => {
        const id = req.params.id
        const newPost = req.body
        const post = posts.find(post => post.id == id)
        post.title = newPost.title
        post.content = newPost.content
        res.send(post)
    }
)

app.delete('/posts/:id', (req, res) => {
        const id = req.params.id
        posts = posts.filter(post => post.id != id)
        res.send(posts)
    }
)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    }
)