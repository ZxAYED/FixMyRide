import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { AllRoutes } from './app/routes';
const app: Application = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())


app.get('/', (req: Request, res: Response) => {
    res.send('Kela Mela shara bela!')
})

app.use('/api', AllRoutes)



// app.use(GlobalErrorHandler)
// app.use(NotFound)
export default app