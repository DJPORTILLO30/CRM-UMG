require("dotenv").config()
const express = require("express")
const cors = require("cors")
const swaggerUI = require("swagger-ui-express")
const openApiConfiguration = require("./docs/swagger")
const {dbConnectMySQL} = require("./config/mysql")
const app = express()
const ENGINE_DB = process.env.ENGINE_DB;


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))


const port = process.env.PORT || 3000



app.use('/documentation',
swaggerUI.serve,
swaggerUI.setup(openApiConfiguration))



app.listen(port, () => {
     console.log(`App corriendo en el puerto ${port}`)
});
dbConnectMySQL();