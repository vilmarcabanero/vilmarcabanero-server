import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

// app.use(bodyParser.json({limit: "20mb", extended: true}))
// app.use(bodyParser.urlencoded({limit: "20mb", extended: true}))

// app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged Error: ${err}`)
	server.close(() => process.exit(1))
})
