require('dotenv').config()
//async errors
require('express-async-errors')

const express = require('express');
const app = express();

const connectDB = require('./db/connect')

const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('hello world')
})
app.use('/api/v1/products', productsRouter)

//products routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try{
        //connect db
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch(error){
console.log(error)
    }
}
start()