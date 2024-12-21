/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-21 17:00
* @Description: Minimal API
*****************************************************************************************/
import fastify from 'fastify';

const server = fastify({ logger: true });

server.get("/api/teams", async (req, res) => {
    res.type("application/json").code(200)

    return [
        { id: 1, name: "Ferrari" }
    ]
})

server.listen({ port: 3333 }, () => {
    console.log("SERVER INIT")
})