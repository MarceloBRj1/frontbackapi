import {FastifyRequest, FastifyReply} from "fastify";
import { ListClient } from "../services/ListClient";

class ListClientControl{

  async handle(request: FastifyRequest, reply: FastifyReply){
    const listClient = new ListClient();
    const clients = await listClient.execute();
    reply.send(clients)
  }
}
export {ListClientControl}