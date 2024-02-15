require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Router/router')
require('./DB/connection')


const rserver = express()
rserver.use(cors())
rserver.use(express.json())
rserver.use(router)


const PORT = 3000 || process.env.PORT
rserver.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})
rserver.get('/', (req, res) => {
    res.send("Server started")
})