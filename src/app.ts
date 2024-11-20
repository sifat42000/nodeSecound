import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { StudentRoute } from './app/student/student.rouuter';

const app: Application = express();

// const port = 3000;

//parser
app.use(cors());

app.use(express.json());

app.use('/api/v1/student', StudentRoute)

app.get('/', (req: Request, res: Response) => {
  const a = "Hellow world";
//   res.send(a);
res.send(a);
  console.log(a)
  

});

export default app;
