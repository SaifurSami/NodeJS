const express = require('express')
const app = express()
const dishesRouter = require('./Routes/dishes')
const promotionsRouter = require('./Routes/promotions')
const leadersRouter = require('./Routes/leaders')

app.get('/', (req, res) => {
    res.send("We are at HOME")
})
app.use('/dishes', dishesRouter)
app.use('/promotions', promotionsRouter)
app.use('/leaders', leadersRouter)

app.listen(3000, () => {
    console.log('Listening on port 3000... ')
})

