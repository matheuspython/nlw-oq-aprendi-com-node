import express from 'express';
import cors from 'cors'
const app = express();
import http from 'http'
import {Server} from 'socket.io'
import { router } from './routes'
app.use(cors());

const servertHttp = http.createServer(app);
const io = new Server(servertHttp,{
  cors: {
    origin: '*'
  }
});
io.on("connection", socket => {
  console.log(`usuario conectado no socket ${socket.id}`)
})

app.use(express.json())
app.use(router);


export { servertHttp, io }