import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors"


const app = fastify({
  logger: true
})

app.setErrorHandler((error, request, reply) => {
  reply.code(error.statusCode || 500).send({
    error: error.message
  })
})


const start = async () => {

  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}


start();