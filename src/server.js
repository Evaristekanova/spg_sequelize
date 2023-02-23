import express from 'express'
import userRoutes from './routes/userRoutes'

const app = express()
app.use(express.json())

app.use('/api', userRoutes)
const port = 8080
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
 })