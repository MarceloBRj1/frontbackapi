import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ListClientControl } from "./controls/ListClientControl"
import { CreateCustomerControler } from "./controls/CreateCustomerControler"
import { DeleteCustomerControl } from "./controls/DeleteCostumerControl"

export async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { nome: "marcelo" }
  })

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerControler().handle(request, reply)

  })
  fastify.get("/clients", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListClientControl().handle(request, reply)
  })
  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerControl().handle(request, reply)
  })
  
}