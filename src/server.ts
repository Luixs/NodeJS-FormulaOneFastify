/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-21 17:00
* @Description: Minimal API
*****************************************************************************************/
import cors from '@fastify/cors';
import fastify from 'fastify';

// ===== CONSTS
const server = fastify({ logger: true });
server.register(cors, {
    origin: "*", 
    methods: ["GET", "POST"]
});


const dummyTeams = [
    { id: 1, name: "McLaren", base: "United Kingdom" },
    { id: 2, name: "Mercedes", base: "United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "United Kingdom" }
]
const dummyDrivers = [
    { id: 1, name: "Max Verstappen", team: "Red bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren" }
]

server.get("/api/teams", async (req, res) => {
    res.type("application/json").code(200)

    return { dummyTeams };
})

server.get("/api/drivers", async (req, res) => {
    res.type("application/json").code(200)

    return { dummyDrivers }
})

interface DriverParams {
    id: string
}

server.get<{ Params: DriverParams }>("/api/drivers/:id", async (req, res) => {

    // ===== GET PARAMS & SEARCH DATA
    const id = parseInt(req.params.id);
    const driver = dummyDrivers.find(d => d.id === id);

    if (!driver) {
        res.type("application/json").code(204);
        return { message: "Driver not found!" };
    }
    res.type("application/json").code(200)
    return { driver };

});

server.listen({ port: 3333 }, () => {
    console.log("SERVER INIT")
})