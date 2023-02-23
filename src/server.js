const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()
app.use(express.json())
app.get('/', (req, res) => { 
    console.log('hello world');
    res.send('Hello World!')
})
app.use('/api', userRoutes)
const port = 8080
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
 })