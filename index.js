import express from 'express'
import dotenv from"dotenv"
import { DBconnecton } from './DBconnection/dbconection.js'
import { bootstrap} from './bootstrap.js'
const app = express()
const port = 3000
// ______________load environment variables_________
dotenv.config()

// ___________ middleware to parse the body of request into json format__________


app.use(express.json());


// ____________dataBase connection ______________
DBconnecton()
bootstrap(app) ;
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))