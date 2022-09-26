const express = require('express')
const app = express();

const middleware = (req, res, next)=>{
    next()
}
app.use(middleware)
const loginStatus = true
const loginCheck = (req, res, next) => {
    if (loginStatus) {
        req.id = '343434'
        next()
    }
    else {
        res.send('Invalid login detail')
    }
}
app.set('views', './public')
app.set('view engine', 'pug')
app.get('/', (req, res) => {
    const name = "Waqas Maqbool"
    res.render('index',{name})
})
app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', {root:__dirname})
})
app.get('/profile', loginCheck, (req, res) => {
    res.send('Dashboard')
})

app.use((req, res) => {
    res.sendFile('./public/404.html', {root:__dirname})
})

app.listen(3000, () => {
    console.log('Server is running')
})