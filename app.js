const express = require('express')
const es6Renderer = require('express-es6-template-engine')

const app = express()

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('part1000.html')
})

app.listen(8000, () => {
    console.log("Up and running")
})