import express from 'express'
import userRoutes from './routes/userRoutes'
import messageRoutes from './routes/messageRoutes'

const app = express()
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', messageRoutes)
const port = 8080
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
 })