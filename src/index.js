import dotenv from 'dotenv';
dotenv.config();
import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';
const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: false
};
app.use(cors(corsOptions));
app.use(express.json());

const httpServer = createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`🔌 Client connecté en WebSocket : ${socket.id}`);
    socket.on('join_session', (sessionName) => {
        socket.join(sessionName);
        console.log(`Client ${socket.id} a rejoint la room : ${sessionName}`);
    });
});

const PORT = process.env.PORT || 8045;

httpServer.listen(PORT, () => {
    console.log(`🚀 Serveur HTTP & WebSocket démarré sur le port ${PORT}`);
});

